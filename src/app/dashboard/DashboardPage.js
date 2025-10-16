"use client";
import { useEffect } from 'react';


export default function DashboardPage() {
    useEffect(() => {
      document.title = 'Dashboard | Make-It-All';
    }, []);
    return (
        <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <p>This is where you can see an overview of your activities.</p>
        <p>More features coming soon...</p>
        </div>
    );
}
