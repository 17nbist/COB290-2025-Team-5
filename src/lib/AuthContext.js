"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import baseUsers from "./base-data/users.js"
import baseProjects from "./base-data/projects.js"
import baseTasks from "./base-data/tasks.js"
import baseEvents from "./base-data/events.js"


const AuthContext = createContext();

// user data. everyone in the team should add more data here for the demo as needed.

//leave as export so server components "[TaskId]/page.js" can access it too.
export const userData = {
    'manager@gmail.com': {
        events: [
            { id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16) },
            { id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15) },
            { id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15) },
        ],
        forumPosts: [
            {
                id: 1,
                title: "How can I access API keys?",
                flair: "technical",
                preview: "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently...",
                timeAgo: "3 weeks ago",
                tags: ["api", "help"],
                upvotes: 15,
                downvotes: 0,
                comments: 2,
                author: "manager@gmail.com",
                directedTo: "employee@gmail.com"
            },
            {
                id: 2,
                title: "How can I make a referral for a job posting?",
                flair: "non-technical",
                preview: "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive...",
                timeAgo: "2 weeks ago",
                tags: ["hr", "referral", "recruitment", "selection"],
                upvotes: 10,
                downvotes: 1,
                comments: 10,
                author: "manager@gmail.com",
                directedTo: null
            },
        ]
    },
    'employee@gmail.com': {
        events: [
            { id: 0, title: "Team Standup", from: new Date(2025, 9, 19, 9), to: new Date(2025, 9, 20, 10), },
            { id: 1, title: "Code Review", from: new Date(2025, 9, 19, 14), to: new Date(2025, 9, 29, 15), },
            { id: 2, title: "Team Meeting", from: new Date(2025, 9, 24, 9, 0), to: new Date(2025, 9, 24, 10, 0), },
            { id: 3, title: "Project Deadline", from: new Date(2025, 9, 24, 0, 0), to: new Date(2025, 9, 25, 23, 59), },
            { id: 4, title: "why Review", from: new Date(2025, 9, 25, 13, 0), to: new Date(2025, 9, 25, 15, 0), },
            { id: 5, title: "Please Deadline", from: new Date(2025, 9, 25, 0, 0), to: new Date(2025, 9, 25, 23, 59), },
            { id: 6, title: "help Deadline", from: new Date(2025, 9, 26, 0, 0), to: new Date(2025, 9, 26, 23, 59), },
        ],
        forumPosts: [
            {
                id: 3,
                title: "Weekly Guest WiFi Code - Week 45",
                flair: "technical",
                preview: "For security reasons, we have a separate WiFi code for visitors. This code is updated weekly, ensuring that only genuine...",
                timeAgo: "2 hours ago",
                tags: ["wifi", "tech", "visitors"],
                upvotes: 10,
                downvotes: 0,
                comments: 0,
                author: "employee@gmail.com",
                directedTo: null
            },
        ]
    }
};

export function AuthProvider({ children }) {
    const [allProjects, setAllProjects] = useState(null)
    const [allTasks, setAllTasks] = useState(null)
    const [allEvents, setAllEvents] = useState(null)
    const [allUsers, setAllUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user and data from localStorage on mount
    useEffect(() => {
        const localUser = localStorage.getItem('user')
        if (localUser) {
            setUser(JSON.parse(localUser));
        }

        const localUsers = localStorage.getItem('users');
        if (localUsers) {
            setAllUsers(JSON.parse(localUsers));
        } else {
            setAllUsers(baseUsers);
            localStorage.setItem('users', JSON.stringify(baseUsers));
        }


        const localProjects = localStorage.getItem('projects');
        if (localProjects) {
            setAllProjects(JSON.parse(localProjects).map(e => ({
                ...e, 
                creationDate: new Date(e.creationDate),
                dueDate: new Date(e.dueDate),
            })));
        } else {
            setAllProjects(baseProjects);
            localStorage.setItem('projects', JSON.stringify(baseProjects));
        }

        const localTasks = localStorage.getItem('tasks');
        if (localTasks) {
            setAllTasks(JSON.parse(localTasks).map(e => ({
                ...e, 
                from: new Date(e.from),
                to: new Date(e.to),
            })));
        } else {
            setAllTasks(baseTasks);
            localStorage.setItem('tasks', JSON.stringify(baseTasks));
        }

        const localEvents = localStorage.getItem('events');
        if (localEvents) {
            setAllEvents(JSON.parse(localEvents).map(e => ({
                ...e, 
                from: new Date(e.from),
                to: new Date(e.to),
            })));
        } else {
            setAllEvents(baseEvents);
            localStorage.setItem('events', JSON.stringify(baseEvents));
        }


        setLoading(false);
    }, []);

    const login = (inputEmail, inputPassword) => {
        const validPassword = 'password123';
        
        let matches = allUsers.filter(({email, password}) => inputEmail == email && inputPassword == password);
        if (matches.length == 0) {
            return { success: false, error: 'Invalid email or password.' }
        }

        let matchedUser = matches[0];

        setUser(matchedUser);

        localStorage.setItem('user', JSON.stringify(matchedUser));

        router.push('/dashboard');
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    function addToAllTasks(task) {
        setAllTasks(prev => {
            const maxId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) : 0;
            const newTask = {
                ...task,
                id: maxId + 1,
            };
            const updated = [...prev, newTask]
            localStorage.setItem('tasks', JSON.stringify(updated));
            return updated;
        });
    }

    function addToAllEvents(event) {
        setAllEvents(prev => {
            const maxId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) : 0;
            const newEvent = {
                ...event,
                id: maxId + 1,
            };
            const updated = [...prev, newEvent]
            localStorage.setItem('events', JSON.stringify(updated));
            return updated;
        });
    }

    function addToAllProjects(project) {
        setAllProjects(prev => {
            const maxId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) : 0;
            const newProject = {
                ...project,
                id: maxId + 1,
            };
            const updated = [...prev, newProject]
            localStorage.setItem('projects', JSON.stringify(updated));
            return updated;
        });
    }

    function editProjectMembers(projectId, members, leaderId) {
        setAllProjects(prev => {
            const updated = prev.map(project => {
                if (project.id === projectId) {
                    return { ...project, members, leaderId };
                }
                return project;
            });

            localStorage.setItem('projects', JSON.stringify(updated));
            return updated;
        });
    }

    function updateTodo(taskId, todoId) {
        setAllTasks(prev => {
            const updated = prev.map(task => {
                if (task.id === taskId) {
                    return {...task,
                        todos: task.todos.map(todo =>
                            todo.id === todoId? { ...todo, checked: !todo.checked }: todo
                        )
                    };
                }
                return task;
            })

            localStorage.setItem('tasks', JSON.stringify(updated));
            return updated;
        });
    }

    function addTodoToTask(taskId, newTodo) {
        setAllTasks(prev => {
            const updated = prev.map(task => {
                if (task.id == taskId) {
                    const maxId = task?.todos?.length > 0 ? Math.max(...task.todos.map(t => t.id)) : 0;

                    const todoToAdd = {
                        id: maxId + 1,
                        title: newTodo.title,
                        checked: newTodo.checked ?? false,
                    };

                    return { ...task, todos: [...task.todos, todoToAdd] };
                }
                return task;
            });

        localStorage.setItem("tasks", JSON.stringify(updated));
        return updated;
    });
}

    function userIsProjectLeader(projectId, userId) {
        const project = allProjects.find(p => p.projectId);
        if (!project) {
            return false
        }
        return project.leaderId == userId;
    }

    return (
        <AuthContext.Provider value={{ allUsers, user, allProjects, allTasks, allEvents, login, logout, loading, addToAllTasks, addToAllEvents, updateTodo, addToAllProjects, editProjectMembers, userIsProjectLeader, addTodoToTask}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}