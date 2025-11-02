import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { forumPosts } from "@/lib/base-data/forums";

console.log("🔵 [ROUTE] Module loaded");

// Helper function to find relevant posts based on user query
function findRelevantPosts(query, posts, maxPosts = 10) {
  console.log("🔍 [FIND_POSTS] Starting search for query:", query);
  const queryLower = query.toLowerCase();
  const keywords = queryLower.split(/\s+/).filter(word => word.length > 2);
  console.log("🔍 [FIND_POSTS] Keywords extracted:", keywords);

  // Score each post based on keyword matches
  const scoredPosts = posts.map(post => {
    let score = 0;
    const searchText = `${post.title} ${post.content} ${post.tags.join(' ')}`.toLowerCase();

    keywords.forEach(keyword => {
      if (searchText.includes(keyword)) {
        score += 1;
      }
      // Boost score for title matches
      if (post.title.toLowerCase().includes(keyword)) {
        score += 2;
      }
    });

    return { post, score };
  });

  // Sort by score and return top matches
  const results = scoredPosts
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts)
    .map(item => item.post);

  console.log("🔍 [FIND_POSTS] Found", results.length, "relevant posts");
  return results;
}

export async function POST(request) {
  console.log("🟢 [ROUTE] POST request received");

  try {
    console.log("📥 [ROUTE] Parsing request body...");
    const { message } = await request.json();
    console.log("📥 [ROUTE] Message received:", message);

    if (!message) {
      console.log("❌ [ROUTE] No message provided");
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    console.log("🔑 [ROUTE] Checking API key...");
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("🔑 [ROUTE] API key exists:", !!apiKey);
    console.log("🔑 [ROUTE] API key length:", apiKey?.length);
    console.log("🔑 [ROUTE] API key first 10 chars:", apiKey?.substring(0, 10));

    if (!apiKey) {
      console.log("❌ [ROUTE] API key not configured");
      return NextResponse.json(
        { error: "Gemini API key not configured. Please add GEMINI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    // Initialize the Gemini API
    console.log("🤖 [ROUTE] Initializing Gemini API...");
    const genAI = new GoogleGenerativeAI(apiKey);
    console.log("🤖 [ROUTE] GoogleGenerativeAI instance created");

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log("🤖 [ROUTE] Model obtained: gemini-pro");

    // Find relevant posts instead of sending all posts
    console.log("📚 [ROUTE] Finding relevant posts...");
    const relevantPosts = findRelevantPosts(message, forumPosts, 15);
    console.log("📚 [ROUTE] Relevant posts count:", relevantPosts.length);

    // Prepare forum data for context - only relevant posts
    console.log("📦 [ROUTE] Preparing forum context...");
    const forumContext = relevantPosts.length > 0
      ? relevantPosts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        tags: post.tags,
        flair: post.flair,
        timeAgo: post.timeAgo,
        comments: post.comments.slice(0, 5).map(c => ({ author: c.author, text: c.text }))
      }))
      : forumPosts.slice(0, 10).map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        tags: post.tags,
        flair: post.flair,
        timeAgo: post.timeAgo,
        comments: post.comments.slice(0, 5).map(c => ({ author: c.author, text: c.text }))
      }));

    console.log("📦 [ROUTE] Forum context prepared with", forumContext.length, "posts");

    // Create a strict system context that only answers questions about forum data
    const systemContext = `You are a forum assistant AI for Make-It-All company forum.

IMPORTANT RULES:
1. You can ONLY answer questions based on the forum data provided below.
2. If a question is not related to the forum posts or their content, politely decline and explain you can only help with forum-related questions.
3. Do not make up information or answer questions about topics not covered in the forum posts.
4. Keep responses concise and friendly.
5. When referencing posts, mention the post title or relevant details.

RELEVANT FORUM POSTS (from ${forumPosts.length} total posts):
${JSON.stringify(forumContext, null, 2)}

User question: ${message}

Please provide a helpful response based ONLY on the forum data above. If the question cannot be answered from the forum data, politely explain that you can only answer questions about the Make-It-All forum content.`;

    console.log("📝 [ROUTE] System context created, length:", systemContext.length);

    // Generate response
    console.log("🚀 [ROUTE] Calling Gemini API...");
    const result = await model.generateContent(systemContext);
    console.log("✅ [ROUTE] Gemini API call successful");

    const response = await result.response;
    console.log("✅ [ROUTE] Response received");

    const text = response.text();
    console.log("✅ [ROUTE] Text extracted, length:", text.length);
    console.log("📤 [ROUTE] Response preview:", text.substring(0, 100));

    console.log("🎉 [ROUTE] Sending successful response");
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("❌❌❌ [ROUTE] ERROR CAUGHT ❌❌❌");
    console.error("❌ [ROUTE] Error type:", error.constructor.name);
    console.error("❌ [ROUTE] Error message:", error.message);
    console.error("❌ [ROUTE] Error stack:", error.stack);
    console.error("❌ [ROUTE] Full error object:", JSON.stringify(error, null, 2));

    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
