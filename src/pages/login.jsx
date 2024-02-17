import { useState } from "react";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target.name);
    const newValue = (initialValue) => ({
      ...initialValue,
      [e.target.name]: e.target.value,
    });

    setLoginForm(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    // API request
  };

  return (
    <div className="container">
      <form
      //   onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
