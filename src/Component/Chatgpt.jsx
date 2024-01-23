import React, { useState } from "react";

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(HTTP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        console.log(prompt);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Ask questions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>
        
      </form>
      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light">{response && response.completion ? JSON.stringify(response.completion.content) : "Ask me anything..."}</p>

      </div>
    </div>
  );
}
