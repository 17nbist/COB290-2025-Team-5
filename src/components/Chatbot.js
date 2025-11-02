"use client";
import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

console.log("🔵 [CHATBOT] Component loaded");

export default function Chatbot() {
  console.log("🟢 [CHATBOT] Component rendering");

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your forum assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("📜 [CHATBOT] Messages updated, count:", messages.length);
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    console.log("🚀 [CHATBOT] handleSend called");
    console.log("🚀 [CHATBOT] Input value:", input);
    console.log("🚀 [CHATBOT] isLoading:", isLoading);

    if (!input.trim() || isLoading) {
      console.log("⚠️ [CHATBOT] Skipping send - empty input or already loading");
      return;
    }

    const userMessage = input.trim();
    console.log("📤 [CHATBOT] Sending message:", userMessage);

    setInput("");
    console.log("🧹 [CHATBOT] Input cleared");

    setMessages(prev => {
      const newMessages = [...prev, { role: "user", content: userMessage }];
      console.log("📝 [CHATBOT] User message added to state");
      return newMessages;
    });

    setIsLoading(true);
    console.log("⏳ [CHATBOT] Loading state set to true");

    try {
      console.log("🌐 [CHATBOT] Starting fetch to /api/chat");
      const fetchPayload = { message: userMessage };
      console.log("📦 [CHATBOT] Fetch payload:", JSON.stringify(fetchPayload));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchPayload),
      });

      console.log("📡 [CHATBOT] Response received");
      console.log("📡 [CHATBOT] Response status:", response.status);
      console.log("📡 [CHATBOT] Response statusText:", response.statusText);
      console.log("📡 [CHATBOT] Response ok:", response.ok);
      console.log("📡 [CHATBOT] Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        console.error("❌ [CHATBOT] Response not OK");
        const errorText = await response.text();
        console.error("❌ [CHATBOT] Error response body:", errorText);
        throw new Error(`Failed to get response: ${response.status} ${response.statusText}`);
      }

      console.log("📥 [CHATBOT] Parsing JSON response...");
      const data = await response.json();
      console.log("📥 [CHATBOT] Response data:", data);
      console.log("📥 [CHATBOT] Response message length:", data.message?.length);

      setMessages(prev => {
        const newMessages = [...prev, { role: "assistant", content: data.message }];
        console.log("✅ [CHATBOT] Assistant message added to state");
        return newMessages;
      });

      console.log("🎉 [CHATBOT] Message successfully processed");
    } catch (error) {
      console.error("❌❌❌ [CHATBOT] ERROR CAUGHT ❌❌❌");
      console.error("❌ [CHATBOT] Error type:", error.constructor.name);
      console.error("❌ [CHATBOT] Error message:", error.message);
      console.error("❌ [CHATBOT] Error stack:", error.stack);

      setMessages(prev => {
        const errorMessage = { role: "assistant", content: "Sorry, I encountered an error. Please try again." };
        console.log("⚠️ [CHATBOT] Error message added to state");
        return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
      console.log("✅ [CHATBOT] Loading state set to false");
    }
  };

  const handleKeyPress = (e) => {
    console.log("⌨️ [CHATBOT] Key pressed:", e.key, "shiftKey:", e.shiftKey);
    if (e.key === "Enter" && !e.shiftKey) {
      console.log("⌨️ [CHATBOT] Enter key detected, calling handleSend");
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 flex items-center gap-2"
          aria-label="Open chat"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot size={20} />
              <h3 className="font-semibold">Forum Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 rounded p-1 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
