"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import baseUsers from "./base-data/users.js"
import baseProjects from "./base-data/projects.js"


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user and data from localStorage on mount
    useEffect(() => {
        console.log(baseUsers);
        const localUsers = localStorage.getItem('users');
        if (localUsers) {
            setUsers(localUsers);
        } else {
            setUsers(baseUsers);
            localStorage.setItem('users', baseUsers);
        }

        const localUser = localStorage.getItem('user')

        if (localUser) {
            setUser(localUser);
        }

        setLoading(false);
    }, []);

    const login = (inputEmail, inputPassword) => {
        const validPassword = 'password123';
        console.log(users);
        
        let matches = users.filter(({id: {email, password}}) => inputEmail == email && inputPassword == password);
        if (matches.length == 0) {
            return { success: false, error: 'Invalid email or password.' }
        }

        let matchedUser = matches[0];

        setUser(matchedUser);

        localStorage.setItem('user', matchedUser);

        router.push('/dashboard');
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        setData(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, data, login, logout, loading }}>
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