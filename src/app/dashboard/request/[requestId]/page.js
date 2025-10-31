"use client";
import { FaArrowLeft, FaFlag } from "react-icons/fa";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function RequestDetailPage({ params }) {
    const { requestId } = params;
    const { user, userRequests, updateRequest } = useAuth();
    const router = useRouter();

    const userReqs = userRequests?.[user?.email] || [];
    const request = userReqs.find((r) => String(r.id) === String(requestId));

    if (!request) return <div className="p-6">Request not found</div>;

    const handleTogglePriority = () => {
        if (request.type === "Incoming") {
            updateRequest(request.id, { highPriority: !request.highPriority }, user?.email);
        }
    };

    return (
        <>
            <div className="p-6">
                <button
                    onClick={() => router.push('/dashboard#requests')}
                    className="mb-4 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <FaArrowLeft size={14} />
                    <span>Back to Requests</span>
                </button>
                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-semibold">{request.title}</h2>
                        {request.type === "Incoming" && (
                            <button
                                onClick={handleTogglePriority}
                                className={`${request.highPriority ? "text-red-500" : "text-gray-400 hover:text-red-400"} transition-colors`}
                            >
                                <FaFlag size={20} />
                            </button>
                        )}
                    </div>

                    <p className="text-gray-800 dark:text-gray-100 text-base mb-4 whitespace-pre-wrap">
                        {request.content}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                        <span>requested {request.timeAgo}</span>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-[#334155] text-gray-700 dark:text-gray-400 rounded-md">
                            {request.type}
                        </span>
                    </div>
                </Card>
            </div>
        </>
    );
}
