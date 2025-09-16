import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await fetch("https://jarvis-backend-s8n7.onrender.com/api/jarvis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("⚠️ Backend not responding");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Jarvis UI</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Jarvis something..."
        style={{ padding: "10px", width: "250px" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "10px 20px" }}>
        Send
      </button>
      <p style={{ marginTop: "20px" }}>{response}</p>
    </div>
  );
          }
          
