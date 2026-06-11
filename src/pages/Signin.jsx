
import { useState } from "react";
import "./sigin.css";
import { useNavigate } from "react-router-dom";

const FOOTER_LANGS = [
  "English (US)", "Español", "Français (France)", "中文(简体)", "العربية",
  "Português (Brasil)", "Italiano", "한국어", "Deutsch", "हिन्दी", "日本語",
];

const FOOTER_LINKS = [
  "Sign Up", "Log In", "Messenger", "Facebook Lite", "Video",
  "Meta Pay", "Meta Store", "Meta Quest", "Ray-Ban Meta", "Meta AI",
  "Instagram", "Threads", "Fundraisers", "Services",
  "Voting Information Center", "Privacy Policy", "Privacy Center",
  "Groups", "About", "Create Ad", "Create Page", "Developers",
  "Careers", "Cookies", "AdChoices", "Terms", "Help",
  "Contact Uploading & Non-Users",
];

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.trim() || !password) {
    setError("Please enter your email and password.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    setError("No account found. Please sign up first.");
    return;
  }

  if (
    storedUser.emailOrPhone === email &&
    storedUser.password === password
  ) {
    setError("");

    localStorage.setItem("loggedIn", "true");

    navigate("/home");
  } else {
    setError("Invalid email or password");
  }
};

    


  return (
    <div className="signin-page">
    <div className="container">

      <div className="wrapper">

        {/* LEFT */}
        <div className="left">
          <h1>facebook</h1>
          <p>Connect with friends and the world around you.</p>
        </div>

        {/* RIGHT */}
        <div className="card">

          <form onSubmit={handleSubmit}>

            <input
              className="input"
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="error">{error}</div>}

            <button className="btn-login" type="submit">
              Log In
            </button>

            <a href="#" className="link">
              Forgotten password?
            </a>

            <hr style={{ margin: "15px 0" }} />
            
            <button
              type="button"
              className="btn-create"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>

          </form>

        </div>

      </div>

    </div>
    

 
  <footer className="footer">

      <ul className="footer-lang">
        {FOOTER_LANGS.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <ul className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>

    </footer>
  </div>
  );
};

export default Signin;
