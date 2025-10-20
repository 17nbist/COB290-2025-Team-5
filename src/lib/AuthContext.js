"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

// user data. everyone in the team should add more data here for the demo as needed.
const userData = {
    'manager@gmail.com': {
        events: [
            { id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16) },
            { id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15) },
            { id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15) },
        ],
    },
    'employee@gmail.com': {
        events: [
            { id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16) },
            { id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15) },
            { id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15) },
        ],
    }
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user and data from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedData = localStorage.getItem('userData');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData);

            if (parsedData.events) {
                parsedData.events = parsedData.events.map(event => ({
                    ...event,
                    from: new Date(event.from),
                    to: new Date(event.to)
                }));
            }

            setData(parsedData);
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
            const userInfo = users[email];
            const userSpecificData = userData[email] || {};

            setUser(userInfo);
            setData(userSpecificData);

            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('userData', JSON.stringify(userSpecificData));

            router.push('/dashboard');
            return { success: true };
        } else {
            return { success: false, error: 'Invalid email or password.' };
        }
    };

    const logout = () => {
        setUser(null);
        setData(null);
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
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