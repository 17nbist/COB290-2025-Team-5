import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
    // folder is [topicId] so params.topicId is the id
    const { topicId } = params;
    const { action } = await request.json();

    if (!['upvote', 'downvote'].includes(action)) {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    try {
        console.log(`Action: ${action} on Post ID: ${topicId}. (Simulating database update)`);

        return NextResponse.json({ success: true, message: `Post ${action}d successfully`, postId: topicId });
    } catch (error) {
        console.error('Failed to update post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}