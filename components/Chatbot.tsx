"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm the SkillSphere assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Who is SkillSphere designed for?",
    "Why does SkillSphere only feature three career paths?",
    "How does SkillSphere help me prepare for my future career?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();

      if (
        lowerInput.includes("who") ||
        lowerInput.includes("designed for") ||
        lowerInput.includes("target") ||
        lowerInput.includes("audience")
      ) {
        botResponse =
          "SkillSphere is designed for high school students, college students, and early-career individuals who are exploring career options or preparing for the workforce. Our platform is especially helpful for people who feel uncertain about career paths or are concerned about how AI and automation are changing job opportunities.";
      } else if (
        lowerInput.includes("why") ||
        lowerInput.includes("three") ||
        lowerInput.includes("career path") ||
        lowerInput.includes("finance") ||
        lowerInput.includes("healthcare") ||
        lowerInput.includes("tech")
      ) {
        botResponse =
          "We chose Finance, Healthcare, and Technology because they represent three major, fast-growing industries that are significantly impacted by AI. These fields also showcase a wide range of skill types such as analytical, interpersonal, and technical which helps users understand how different strengths align with different careers. As SkillSphere grows, we plan to expand and include more industries and career paths.";
      } else if (
        lowerInput.includes("how") ||
        lowerInput.includes("help") ||
        lowerInput.includes("prepare") ||
        lowerInput.includes("future career")
      ) {
        botResponse =
          "SkillSphere provides free and accessible resources such as career insights, skill-building guidance, and real-world examples like \"day in the life\" posts. Our goal is to help users identify their strengths, understand workplace expectations, and develop relevant skills so they feel more confident and prepared for future careers—especially in an AI-driven job market.";
      } else {
        botResponse =
          "I can help answer questions about who SkillSphere is designed for, why we feature specific career paths, or how we help prepare you for your future career. Feel free to ask one of these questions or use the quick questions below!";
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 500);

    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    // Auto-send the quick reply as a message
    const userMessage = { type: "user" as const, text: reply };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = reply.toLowerCase();

      if (
        lowerInput.includes("who") ||
        lowerInput.includes("designed for") ||
        lowerInput.includes("target") ||
        lowerInput.includes("audience")
      ) {
        botResponse =
          "SkillSphere is designed for high school students, college students, and early-career individuals who are exploring career options or preparing for the workforce. Our platform is especially helpful for people who feel uncertain about career paths or are concerned about how AI and automation are changing job opportunities.";
      } else if (
        lowerInput.includes("why") ||
        lowerInput.includes("three") ||
        lowerInput.includes("career path") ||
        lowerInput.includes("finance") ||
        lowerInput.includes("healthcare") ||
        lowerInput.includes("tech")
      ) {
        botResponse =
          "We chose Finance, Healthcare, and Technology because they represent three major, fast-growing industries that are significantly impacted by AI. These fields also showcase a wide range of skill types such as analytical, interpersonal, and technical which helps users understand how different strengths align with different careers. As SkillSphere grows, we plan to expand and include more industries and career paths.";
      } else if (
        lowerInput.includes("how") ||
        lowerInput.includes("help") ||
        lowerInput.includes("prepare") ||
        lowerInput.includes("future career")
      ) {
        botResponse =
          "SkillSphere provides free and accessible resources such as career insights, skill-building guidance, and real-world examples like \"day in the life\" posts. Our goal is to help users identify their strengths, understand workplace expectations, and develop relevant skills so they feel more confident and prepared for future careers—especially in an AI-driven job market.";
      } else {
        botResponse =
          "I can help answer questions about who SkillSphere is designed for, why we feature specific career paths, or how we help prepare you for your future career. Feel free to ask one of these questions or use the quick questions below!";
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-primary-700 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4">
            <h3 className="font-bold text-lg">SkillSphere Assistant</h3>
            <p className="text-sm text-primary-100">
              Ask me about SkillSphere and how we can help you!
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies - Show after bot messages */}
          {messages.length > 0 && messages[messages.length - 1].type === "bot" && (
            <div className="px-4 pb-2 animate-fade-in-up">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-primary-50 text-primary-600 px-3 py-1.5 rounded-full hover:bg-primary-100 hover:scale-105 transition-all font-medium"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary-600"
              />
              <button
                onClick={handleSend}
                className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


