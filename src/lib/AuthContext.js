"use client";
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import baseUsers from "./base-data/users.js"
import baseProjects from "./base-data/projects.js"
import baseTasks from "./base-data/tasks.js"
import baseEvents from "./base-data/events.js"
import { forumPosts as baseForums } from "./base-data/forums.js"
import { requests as baseRequests } from "./base-data/requests.js"



const AuthContext = createContext();

// Session timeout constants (configurable)
const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes before warning
const WARNING_TIMEOUT = 5 * 60 * 1000;     // 5 minutes to respond to warning

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
    const [allForumPosts, setAllForumPosts] = useState(null);
    const [userRequests, setUserRequests] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const isAuthPage = ['/login', '/login/registration', '/login/forgot'].includes(pathname);

    // Session timeout state
    const [showInactivityWarning, setShowInactivityWarning] = useState(false);
    const inactivityTimerRef = useRef(null);
    const warningTimerRef = useRef(null);
    const userRef = useRef(user);

    useEffect(() => { userRef.current = user; }, [user]);

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

        const localForums = localStorage.getItem('forumPosts');
        if (localForums) {
            setAllForumPosts(JSON.parse(localForums));
        } else {
            const forumsWithVoteState = baseForums.map(post => ({
                ...post,
                userVote: null
            }));
            setAllForumPosts(forumsWithVoteState);
            localStorage.setItem('forumPosts', JSON.stringify(forumsWithVoteState));
        }

        const localRequests = localStorage.getItem('requests');
        if (localRequests) {
            setUserRequests(JSON.parse(localRequests));
        } else {
            setUserRequests(baseRequests);
            localStorage.setItem('requests', JSON.stringify(baseRequests));
        }

        setLoading(false);
    }, []);

    const resetInactivityTimer = () => {

        clearTimeout(inactivityTimerRef.current);
        clearTimeout(warningTimerRef.current);

        if (user) {

            inactivityTimerRef.current = setTimeout(() => {
                setShowInactivityWarning(true);


                warningTimerRef.current = setTimeout(() => {
                    logout();
                }, WARNING_TIMEOUT);
            }, INACTIVITY_TIMEOUT);
        }
    };


    const continueSession = useCallback(() => {
        setShowInactivityWarning(false);
        clearTimeout(warningTimerRef.current);
        resetInactivityTimer();
    }, []);

    useEffect(() => {
        if (!showInactivityWarning) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                continueSession();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [showInactivityWarning, continueSession]);

    useEffect(() => {
        if (!user) return;

        const handleActivity = () => {
            resetInactivityTimer();
            if (showInactivityWarning) setShowInactivityWarning(false);
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('click', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('touchstart', handleActivity);

        resetInactivityTimer();

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('click', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('touchstart', handleActivity);
            clearTimeout(inactivityTimerRef.current);
            clearTimeout(warningTimerRef.current);
        };
    }, [user]);


    const login = (inputEmail, inputPassword) => {
        const validPassword = 'password123';

        let matches = allUsers.filter(({ email, password }) => inputEmail == email && inputPassword == password);
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
        // Clear all timers
        clearTimeout(inactivityTimerRef.current);
        clearTimeout(warningTimerRef.current);
        setShowInactivityWarning(false);

        // Clear user data
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
                    return {
                        ...task,
                        todos: task.todos.map(todo =>
                            todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
                        )
                    };
                }
                return task;
            })

            localStorage.setItem('tasks', JSON.stringify(updated));
            return updated;
        });
    }

    function addForumPost(post) {
        setAllForumPosts(prev => {
            const maxId = prev.length > 0 ? Math.max(...prev.map(p => p.id)) : 0;
            const newPost = { ...post, id: maxId + 1 };
            const updated = [newPost, ...prev];
            localStorage.setItem('forumPosts', JSON.stringify(updated));
            return updated;
        });
    }

    function updateForumPost(postId, updates) {
        setAllForumPosts(prev => {
            const updated = prev.map(p => p.id === postId ? { ...p, ...updates } : p);
            localStorage.setItem('forumPosts', JSON.stringify(updated));
            return updated;
        });
    }

    function addRequest(request, userEmail) {
        setUserRequests(prev => {
            const updated = { ...prev };
            const userReqs = updated[userEmail] || [];
            const maxId = userReqs.length > 0 ? Math.max(...userReqs.map(r => r.id)) : 0;
            const newRequest = { ...request, id: maxId + 1 };
            updated[userEmail] = [newRequest, ...userReqs];
            localStorage.setItem('requests', JSON.stringify(updated));
            return updated;
        });
    }

    function updateRequest(requestId, updates, userEmail) {
        setUserRequests(prev => {
            const updated = { ...prev };
            updated[userEmail] = updated[userEmail].map(r =>
                r.id === requestId ? { ...r, ...updates } : r
            );
            localStorage.setItem('requests', JSON.stringify(updated));
            return updated;
        });
    }

    // If on login/register/forgot pages, skip timers + inactivity modal
    if (isAuthPage) {
        return (
            <AuthContext.Provider
                value={{
                    allUsers,
                    user,
                    allProjects,
                    allTasks,
                    allEvents,
                    allForumPosts,
                    userRequests,
                    login,
                    logout,
                    loading,
                    addToAllTasks,
                    addToAllEvents,
                    updateTodo,
                    addToAllProjects,
                    editProjectMembers,
                    addForumPost,
                    updateForumPost,
                    addRequest,
                    updateRequest,
                }}
            >
                {children}
            </AuthContext.Provider>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                allUsers,
                user,
                allProjects,
                allTasks,
                allEvents,
                allForumPosts,
                userRequests,
                login,
                logout,
                loading,
                addToAllTasks,
                addToAllEvents,
                updateTodo,
                addToAllProjects,
                editProjectMembers,
                addForumPost,
                updateForumPost,
                addRequest,
                updateRequest,
                showInactivityWarning,
                continueSession,
            }}
        >
            {children}

            {showInactivityWarning && (
                <div className="fixed inset-0 bg-[#0000007d] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-4 shadow-xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            Session Timeout Warning
                        </h2>
                        <p className="mb-6 text-gray-700 dark:text-gray-300">
                            You will be logged out soon due to inactivity. Click &apos;Continue&apos; to stay logged in.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={logout}
                                className="px-4 rounded-lg py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            >
                                Logout
                            </button>
                            <button
                                onClick={continueSession}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
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