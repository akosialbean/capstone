import { Button, Form, Container, Card } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Login = () => {
  // SHOW/HIDE PASSWORD FUNCTIONALITY
  const [showPassword, setShowPassword] = useState(false);

  // FUNCTION TO TOGGLE PASSWORD VISIBILITY
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <FaSignInAlt /> Sign In
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              onChange={onChange}
              required
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="form-control"
              onChange={onChange}
              required
            />
          </div>
        </form>
        <Form.Check
          type="checkbox"
          label="Show Password"
          onChange={togglePasswordVisibility}
        />
        <button type="submit" className="btn btn-block">
          Login
        </button>
      </section>
    </>
  );
};

export default Login;
