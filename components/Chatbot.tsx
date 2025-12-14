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
    "Tell me about free resources",
    "How do I find internships?",
    "Connect with a mentor",
    "Career guidance",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("resource") || lowerInput.includes("resume")) {
        botResponse =
          "SkillSphere offers free resume templates, interview prep guides, and skill-building resources. Check out our Resources section below!";
      } else if (
        lowerInput.includes("internship") ||
        lowerInput.includes("job")
      ) {
        botResponse =
          "We have a curated directory of internships and entry-level opportunities. Our platform connects you with real-world experience opportunities!";
      } else if (
        lowerInput.includes("mentor") ||
        lowerInput.includes("guidance")
      ) {
        botResponse =
          "Our mentorship network connects you with experienced professionals who can guide your career journey. Would you like to learn more?";
      } else if (lowerInput.includes("ai")) {
        botResponse =
          "We help you learn to use AI as a support tool rather than viewing it as a threat. Our resources teach you how to leverage AI in your career!";
      } else {
        botResponse =
          "Thanks for your question! SkillSphere provides free career resources, internship directories, mentorship networks, and career guidance. What specific area are you interested in?";
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 500);

    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
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
              Ask me about resources, internships, or mentorship!
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

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-primary-50 text-primary-600 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
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


