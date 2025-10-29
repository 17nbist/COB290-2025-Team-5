"use client";
import { userData } from '@/lib/AuthContext';
import ForumPost from '@/app/dashboard/forum/ForumPost';
const getPostById = (id) => {
    console.log(`------ [SERVER] getPostById FUNCTION ------`);
    console.log(`Searching for post with ID: "${id}"`);

    const managerPosts = userData['manager@gmail.com']?.forumPosts || [];
    const employeePosts = userData['employee@gmail.com']?.forumPosts || [];

    // --- DEBUGGING LOG #3 ---
    console.log(`Found ${managerPosts.length} posts for manager.`);
    console.log(`Found ${employeePosts.length} posts for employee.`);
    const allPosts = [
        ...(userData['manager@gmail.com']?.forumPosts || []),
        ...(userData['employee@gmail.com']?.forumPosts || []),
    ];
    return allPosts.find(post => post.id.toString() === id);
};

export default function TopicPage({ params }) {
    const { topicId } = params;
    const post = getPostById(topicId);

    if (!post) {
        return <div className="text-center text-gray-400 py-12">Post not found.</div>;
    }

    const fullContent = post.content || post.preview + " (Full content would be displayed here.)";

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-white">
            <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
            <div className="prose prose-invert prose-lg mb-8">
                <p>{fullContent}</p>
            </div>
            <hr className="border-gray-700 mb-8" />

            {/* Use interactive ForumPost component*/}
            <ForumPost post={post} />

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                <div className="p-6 bg-gray-800 rounded-lg text-center text-gray-500">
                    Comments are a work in progress.
                </div>
            </div>
        </div>
    );
}