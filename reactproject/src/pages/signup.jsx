import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const signupSchema = {
  validate: (form) => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.emailOrPhone.trim()) return "Email or mobile number is required";
    if (!form.password || form.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!form.gender) return "Please select your gender";
    return null;
  },
};

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function Signup() {
  const today = new Date();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    birthDay: String(today.getDate()),
    birthMonth: String(today.getMonth() + 1),
    birthYear: String(today.getFullYear()),
    gender: "",
  });

  const [error, setError] = useState("");

  const days = useMemo(
    () => Array.from({ length: 31 }, (_, i) => i + 1),
    []
  );

  const years = useMemo(() => {
    const y = today.getFullYear();
    return Array.from({ length: 120 }, (_, i) => y - i);
  }, []);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = signupSchema.validate(form);
    if (err) {
      setError(err);
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="brand">facebook</div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-header">
            <h1 className="title">Create a new account</h1>
            <p className="subtitle">It's quick and easy.</p>
          </div>

          <div className="row">
            <div className="field-group">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Surname"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field-group">
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              placeholder="Mobile number or email address"
              value={form.emailOrPhone}
              onChange={(e) => update("emailOrPhone", e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="New password"
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              required
            />
          </div>

          <div className="section">
            <label className="section-label" htmlFor="birthDay">
              Date of birth
              <span className="info-badge" aria-hidden="true">?</span>
            </label>
            <div className="dob">
              <div className="field-group">
                <select
                  id="birthDay"
                  name="birthDay"
                  value={form.birthDay}
                  onChange={(e) => update("birthDay", e.target.value)}
                >
                  {days.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <select
                  id="birthMonth"
                  name="birthMonth"
                  value={form.birthMonth}
                  onChange={(e) => update("birthMonth", e.target.value)}
                >
                  {months.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <select
                  id="birthYear"
                  name="birthYear"
                  value={form.birthYear}
                  onChange={(e) => update("birthYear", e.target.value)}
                >
                  {years.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="section">
            <span className="section-label">
              Gender
              <span className="info-badge" aria-hidden="true">?</span>
            </span>
            <div className="gender">
              <label htmlFor="female" className="gender-option">
                <span>Female</span>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={() => update("gender", "female")}
                />
              </label>

              <label htmlFor="male" className="gender-option">
                <span>Male</span>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={() => update("gender", "male")}
                />
              </label>

              <label htmlFor="custom" className="gender-option">
                <span>Custom</span>
                <input
                  type="radio"
                  id="custom"
                  name="gender"
                  value="custom"
                  checked={form.gender === "custom"}
                  onChange={() => update("gender", "custom")}
                />
              </label>
            </div>
          </div>

          <p className="legal-text">
            People who use our service may have uploaded your contact information to Facebook.
            Learn more.
          </p>

          <p className="legal-text">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
            You may receive SMS notifications from us and can opt out at any time.
          </p>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="btn">
            Sign Up
          </button>

          <Link to="/" className="link">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
