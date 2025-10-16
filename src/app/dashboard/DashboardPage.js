"use client";
import ProfileOverview from "./ProfileOverview";
export default function DashboardPage() {
    return (
        <div>
        <ProfileOverview name={"John Doe"} position={"CEO"} taskAllocated={"12"} ProjectAllocated={"18"}/>
        </div>
    );
}
