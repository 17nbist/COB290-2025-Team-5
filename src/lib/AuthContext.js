"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import baseUsers from "./base-data/users.js"
import baseProjects from "./base-data/projects.js"
import baseEvents from "./base-data/events.js"
import baseprojects from "./base-data/projects.js"


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [allProjects, setAllProjects] = useState(null)
    const [allTasks, setAllTasks] = useState(null)
    const [allEvents, setAllEvents] = useState(null)
    const [users, setUsers] = useState(null);
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
            setUsers(JSON.parse(localUsers));
        } else {
            setUsers(baseUsers);
            localStorage.setItem('users', JSON.stringify(baseUsers));
        }


        const localProjects = localStorage.getItem('projects');
        if (localProjects) {
            setAllProjects(JSON.parse(localProjects).map(e => ({
                ...e, 
                members: new Set(e.members),
                creationDate: new Date(e.creationDate),
                dueDate: new Date(e.dueDate),
            })));
        } else {
            setAllProjects(baseProjects);
            localStorage.setItem('projects', JSON.stringify(
                baseProjects.map(p => ({
                ...p,
                members: [...p.members],
            }))));
        }

        const localTasks = localStorage.getItem('tasks');
        if (localTasks) {
            setAllTasks(JSON.parse(localTasks).map(e => ({
                ...e, 
                from: new Set(e.from),
                to: new Date(e.to),
            })));
        } else {
            setUsers(baseTasks);
        }

        const localEvents = localStorage.getItem('events');
        if (localEvents) {
            setAllEvents(JSON.parse(localEvents).map(e => ({
                ...e, 
                from: new Set(e.from),
                to: new Date(e.to),
            })));
        } else {
            setUsers(baseEvents);
        }


        setLoading(false);
    }, []);

    const login = (inputEmail, inputPassword) => {
        const validPassword = 'password123';
        
        let matches = users.filter(({email, password}) => inputEmail == email && inputPassword == password);
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

    return (
        <AuthContext.Provider value={{ users, user, allProjects, allTasks, allEvents, login, logout, loading }}>
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