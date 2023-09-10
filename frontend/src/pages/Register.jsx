import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      {/* NAME */}
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your name"
              className="form-control"
              onChange={onChange}
            />
          </div>
      {/* EMAIL */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="example@email.com"
              className="form-control"
              onChange={onChange}
            />
          </div>
      {/* PASSWORD */}
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="form-control"
              onChange={onChange}
            />
          </div>
      {/* CONFIRM PASSWORD */}
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Confirm password"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
