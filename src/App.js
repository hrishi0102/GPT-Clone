import React from "react";

const App = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "hello how are you?",
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>Made by Hrishikesh</p>
        </nav>
      </section>

      <section className="main">
        <h1> GPT-3.5 Clone</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce
            inaccurate information about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
