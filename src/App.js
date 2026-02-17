import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <img
            className="amazon-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>

        <nav className="navbar-right">
          <ul className="nav-links">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <h2>Welcome to the Amazon Clone</h2>
        <p>Shop your favorite products with ease!</p>
      </main>
    </div>
  );
};

export default App;

