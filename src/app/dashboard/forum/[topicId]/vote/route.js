import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
    const { postId } = params; // Get the post ID from the URL
    const { action } = await request.json(); // Get the action from request body

    if (!['upvote', 'downvote'].includes(action)) {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    try {

        console.log(`Action: ${action} on Post ID: ${postId}. (Simulating database update)`);

        // Return a success response
        return NextResponse.json({ success: true, message: `Post ${action}d successfully` });

    } catch (error) {
        console.error('Failed to update post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}