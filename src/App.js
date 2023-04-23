import React from "react";

const App = () => {
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
            <div id="submit">➢</div>
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
