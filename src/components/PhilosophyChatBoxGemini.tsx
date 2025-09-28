import { useState } from "react";

const suggestions = [
  "Triết học Hy Lạp cổ đại: Socrates, Plato, Aristotle",
  "Triết học Trung cổ: Thánh Augustine, Thomas Aquinas",
  "Triết học Hiện đại: Descartes, Kant, Hegel",
  "Triết học Đương đại: Sartre, Foucault, Habermas",
];

const PhilosophyChatBoxGemini = () => {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // 🔹 trạng thái mở/đóng

  const handleSend = async (customInput?: string) => {
    const question = customInput || input;
    if (!question.trim()) return;

    const userMsg = { role: "user" as const, text: question };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const history = updatedMessages.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }));

      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: history }),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(JSON.stringify(err));
      }

      const data = await resp.json();
      const aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ Không có phản hồi từ Gemini.";

      setMessages((prev) => [...prev, { role: "ai", text: aiReply }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Lỗi khi gọi Gemini API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    // 🔹 khi đóng thì chỉ hiện icon mở lại
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
      >
        💬 Mở Chat
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 w-96 bg-white shadow-2xl rounded-2xl border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-3 font-semibold flex items-center justify-between">
        <span>🤖 Chat Triết học (Gemini)</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-sm bg-red-500px-2 py-1 rounded"
        >
          ❌
        </button>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-3 overflow-y-auto max-h-96 space-y-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "ai" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white">
                🤖
              </div>
            )}
            <span
              className={`px-3 py-2 rounded-2xl max-w-[70%] text-sm whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-green-100 text-right"
                  : "bg-white border shadow-sm"
              }`}
            >
              {msg.role === "ai"
                ? msg.text
                    .split(/\n+/)
                    .map((line, idx) => (
                      <p key={idx} className="mb-1 leading-relaxed">
                        {line}
                      </p>
                    ))
                : msg.text}
            </span>
            {msg.role === "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300">
                👤
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-sm italic">AI đang suy nghĩ...</div>
        )}
      </div>

      {/* Suggestions */}
      <div className="p-2 border-t bg-gray-100 flex flex-wrap gap-2">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSend(s)}
            disabled={loading}
            className="text-xs bg-white border rounded-full px-3 py-1 hover:bg-green-50 transition disabled:opacity-50"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 flex border-t bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-l-lg p-2 text-sm focus:outline-none"
          placeholder="Hỏi về triết học..."
          disabled={loading}
        />
        <button
          onClick={() => handleSend()}
          disabled={loading}
          className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 disabled:bg-green-300"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default PhilosophyChatBoxGemini;
