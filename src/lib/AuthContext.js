"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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