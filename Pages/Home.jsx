import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/home.css";
import logo from "/src/assets/examlogo.png";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="home">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Exam Hub Logo" className="logo" />
          <span className="logo-text">EXAM HUB</span>
        </div>
        <nav>
          <ul>
            <li><a href="#" onClick={() => navigate("/")}>Home</a></li>
            <li><a href="#" onClick={() => navigate("/Student")}>Student Login</a></li>
            <li><a href="#">Teacher Login</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>WELCOME TO EXAM HUB</h1>
        <p className="tagline">Take your exams online, anywhere, anytime</p>
        <p className="subtext">SIGN UP NOW TO START YOUR FIRST ONLINE EXAMINATION</p>
        <button className="signup-button" onClick={() => navigate("/Student")}>
          Sign Up as Student
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
        <p className="footer-right">&copy; 2025 Exam Hub. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
