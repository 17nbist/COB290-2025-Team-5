"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Hardcoded credentials
        const users = {
            'manager@gmail.com': {
                email: 'manager@gmail.com',
                name: 'Mike Oxlarge',
                role: 'manager',
                position: 'CEO',
                taskAllocated: 12,
                projectAllocated: 18
            },
            'employee@gmail.com': {
                email: 'employee@gmail.com',
                name: 'John Doe',
                role: 'employee',
                position: 'Developer',
                taskAllocated: 8,
                projectAllocated: 5
            }
        };

        const validPassword = 'password123';

        if (users[email] && password === validPassword) {
            const userData = users[email];
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            router.push('/dashboard');
            return { success: true };
        } else {
            return { success: false, error: 'Invalid email or password.' };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
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