import { useState } from "react";
import "./Chatbot.css";
import botAvatar from "../../images/BotAvatar.png";
import { askHackathonBot } from "../services/openrouter";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I’m the official HackCraft 3.0 Assistant. Ask me about registration, timeline, venue, sponsors, or prizes."
    }
  ]);
  const [input, setInput] = useState("");

  

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      const botReply = await askHackathonBot(input);
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Unable to fetch information right now." }
      ]);
    }
  };

  // ✅ Render links, PDFs, and iframe safely
  const renderMessage = (text) => {
  const cleanedText = text.replace(/```/g, "").trim();

  if (
    cleanedText.includes("<iframe") ||
    cleanedText.includes("<div")
  ) {
    return (
      <div
        className="html-wrapper"
        dangerouslySetInnerHTML={{ __html: cleanedText }}
      />
    );
  }

  return <span>{cleanedText}</span>;
};

  return (
    <>
      <div className="chatbot-icon" onClick={() => setOpen(!open)}>
        {open ? "✖" : <img src={"/HACKCRAFT.png"} alt="Chatbot" style={{ width: "3rem", height: "3rem", borderRadius: "11px" }} />}
      </div>

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            HackCraft 3.0 Assistant
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.sender === "bot" && (
                  <img src={botAvatar} alt="bot" />
                )}
                <div className="message-text">
                  {renderMessage(msg.text)}
                </div>
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about HackCraft 3.0..."
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
