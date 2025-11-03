"use client";
import { useEffect, useRef, useState } from 'react';

export default function NetworkGraph({ tasks, projects, users }) {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedNode, setDraggedNode] = useState(null);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const animationFrameRef = useRef(null);

    // Track dark mode changes
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Check initial state
        checkDarkMode();

        // Create observer to watch for class changes on html element
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    // Initialize graph data
    useEffect(() => {
        if (!tasks || !projects || !users) return;

        const graphNodes = [];
        const graphEdges = [];
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        // Add project nodes
        projects.forEach((project, index) => {
            const angle = (index / projects.length) * 2 * Math.PI;
            const radius = Math.min(width, height) * 0.3;
            graphNodes.push({
                id: `project-${project.id}`,
                type: 'project',
                data: project,
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                vx: 0,
                vy: 0,
                size: 16,
            });
        });

        users.forEach((user, index) => {
            const angle = (index / users.length) * 2 * Math.PI;
            const radius = Math.min(width, height) * 0.15;
            graphNodes.push({
                id: `user-${user.id}`,
                type: 'user',
                data: user,
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                vx: 0,
                vy: 0,
                size: 12,
            });
        });

        tasks.forEach((task, index) => {
            const angle = (index / tasks.length) * 2 * Math.PI;
            const radius = Math.min(width, height) * 0.45;
            graphNodes.push({
                id: `task-${task.id}`,
                type: 'task',
                data: task,
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                vx: 0,
                vy: 0,
                size: 8,
            });
        });

        tasks.forEach(task => {
            graphEdges.push({
                source: `task-${task.id}`,
                target: `project-${task.projectId}`,
                type: 'task-project'
            });

            task.members?.forEach(memberId => {
                graphEdges.push({
                    source: `task-${task.id}`,
                    target: `user-${memberId}`,
                    type: 'task-user'
                });
            });
        });

        projects.forEach(project => {
            project.members?.forEach(memberId => {
                graphEdges.push({
                    source: `project-${project.id}`,
                    target: `user-${memberId}`,
                    type: 'project-user'
                });
            });
        });

        setNodes(graphNodes);
        setEdges(graphEdges);
    }, [tasks, projects, users]);

    useEffect(() => {
        if (nodes.length === 0) return;

        const simulate = () => {
            setNodes(prevNodes => {
                const newNodes = [...prevNodes];
                const alpha = 0.3;
                const linkDistance = 100;
                const linkStrength = 0.1;
                const chargeStrength = -300;
                const centerStrength = 0.05;
                const canvas = canvasRef.current;
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;

                newNodes.forEach(node => {
                    if (draggedNode && node.id === draggedNode.id) return;

                    const dx = centerX - node.x;
                    const dy = centerY - node.y;
                    node.vx += dx * centerStrength;
                    node.vy += dy * centerStrength;

                    newNodes.forEach(other => {
                        if (node.id === other.id) return;
                        const dx = other.x - node.x;
                        const dy = other.y - node.y;
                        const distSq = dx * dx + dy * dy;
                        if (distSq > 0) {
                            const dist = Math.sqrt(distSq);
                            const force = chargeStrength / distSq;
                            node.vx -= (dx / dist) * force;
                            node.vy -= (dy / dist) * force;
                        }
                    });

                    edges.forEach(edge => {
                        const source = newNodes.find(n => n.id === edge.source);
                        const target = newNodes.find(n => n.id === edge.target);
                        if (!source || !target) return;

                        if (node.id === source.id || node.id === target.id) {
                            const other = node.id === source.id ? target : source;
                            const dx = other.x - node.x;
                            const dy = other.y - node.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist > 0) {
                                const force = (dist - linkDistance) * linkStrength;
                                const fx = (dx / dist) * force;
                                const fy = (dy / dist) * force;
                                node.vx += fx;
                                node.vy += fy;
                            }
                        }
                    });

                    node.vx *= 0.8;
                    node.vy *= 0.8;
          node.x += node.vx * alpha;
          node.y += node.vy * alpha;

          const margin = 50;
                    node.x = Math.max(margin, Math.min(canvas.width - margin, node.x));
                    node.y = Math.max(margin, Math.min(canvas.height - margin, node.y));
                });

                return newNodes;
            });

      animationFrameRef.current = requestAnimationFrame(simulate);
    };

    const timeoutId = setTimeout(() => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }, 3000);

        simulate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            clearTimeout(timeoutId);
    };
  }, [nodes.length, edges, draggedNode]);

  useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || nodes.length === 0) return;

        const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = 1;
            edges.forEach(edge => {
                const source = nodes.find(n => n.id === edge.source);
                const target = nodes.find(n => n.id === edge.target);
                if (!source || !target) return;

                ctx.beginPath();
                ctx.moveTo(source.x, source.y);
                ctx.lineTo(target.x, target.y);
        ctx.stroke();
      });

      nodes.forEach(node => {
                const isHovered = hoveredNode?.id === node.id;
                const isSelected = selectedNode?.id === node.id;

        ctx.save();

        if (isSelected) {
                    const connectedEdges = edges.filter(e => e.source === node.id || e.target === node.id);
                    connectedEdges.forEach(edge => {
                        const other = nodes.find(n => n.id === (edge.source === node.id ? edge.target : edge.source));
                        if (other) {
                            ctx.strokeStyle = isDarkMode ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.4)';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                        }
          });
        }

        let fillColor;
                if (node.type === 'project') {
                    fillColor = isDarkMode ? '#8b5cf6' : '#7c3aed';
                } else if (node.type === 'user') {
                    fillColor = isDarkMode ? '#3b82f6' : '#2563eb';
                } else {
          fillColor = isDarkMode ? '#10b981' : '#059669';
        }

        ctx.fillStyle = fillColor;
                ctx.strokeStyle = isHovered || isSelected ? '#fff' : fillColor;
        ctx.lineWidth = isHovered || isSelected ? 3 : 1;

        if (node.type === 'project') {
          ctx.fillRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);
                    ctx.strokeRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);
                } else if (node.type === 'user') {
                    // Hexagon for users
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const x = node.x + node.size * Math.cos(angle);
                        const y = node.y + node.size * Math.sin(angle);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                } else {
                    // Circle for tasks
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.stroke();
                }

                ctx.restore();
            });

            requestAnimationFrame(draw);
        };

        draw();
    }, [nodes, edges, hoveredNode, selectedNode, isDarkMode]);

    // Mouse handlers
    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const clickedNode = nodes.find(node => {
            const dx = node.x - x;
            const dy = node.y - y;
            return Math.sqrt(dx * dx + dy * dy) < node.size * 2;
        });

        if (clickedNode) {
            setIsDragging(true);
            setDraggedNode(clickedNode);
            setSelectedNode(clickedNode);
        } else {
            setSelectedNode(null);
        }
    };

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (isDragging && draggedNode) {
            setNodes(prevNodes =>
                prevNodes.map(node =>
                    node.id === draggedNode.id
                        ? { ...node, x, y, vx: 0, vy: 0 }
                        : node
                )
            );
            setDraggedNode({ ...draggedNode, x, y });
        } else {
            const hoveredNode = nodes.find(node => {
                const dx = node.x - x;
                const dy = node.y - y;
                return Math.sqrt(dx * dx + dy * dy) < node.size * 2;
            });
            setHoveredNode(hoveredNode || null);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setDraggedNode(null);
    };

    return (
        <div className="flex flex-col h-full w-full relative">
            <canvas
                ref={canvasRef}
                width={1000}
                height={700}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="w-full h-full cursor-move"
            />

            {/* Legend */}
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-xs font-bold mb-3 text-gray-900 dark:text-white">Legend</div>
                <div className="flex flex-col gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-sm"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">People</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Tasks/Events</span>
                    </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                    💡 Click & drag nodes
                </div>
            </div>

            {/* Info panel */}
            {(hoveredNode || selectedNode) && (
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs">
                    <div className="text-sm font-bold mb-1 text-gray-900 dark:text-white">
                        {(hoveredNode || selectedNode).data.title || (hoveredNode || selectedNode).data.name}
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full inline-block mb-2 font-medium"
                        style={{
                            backgroundColor: (hoveredNode || selectedNode).type === 'project' ? '#7c3aed20' :
                                (hoveredNode || selectedNode).type === 'user' ? '#2563eb20' : '#05966920',
                            color: (hoveredNode || selectedNode).type === 'project' ? '#7c3aed' :
                                (hoveredNode || selectedNode).type === 'user' ? '#2563eb' : '#059669'
                        }}>
                        {(hoveredNode || selectedNode).type.charAt(0).toUpperCase() + (hoveredNode || selectedNode).type.slice(1)}
                    </div>
                    {(hoveredNode || selectedNode).data.description && (
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                            {(hoveredNode || selectedNode).data.description}
                        </div>
                    )}
                    {(hoveredNode || selectedNode).data.role && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Role: <span className="font-medium">{(hoveredNode || selectedNode).data.role}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
