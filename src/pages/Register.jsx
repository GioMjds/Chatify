import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/register.css";
import { registerAsync } from "../services/authServices";

const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const clearInputs = () => {
    if (emailRef?.current) {
      emailRef.current.value = "";
    }
    if (nameRef?.current) {
      nameRef.current.value = "";
    }
    if (passRef?.current) {
      passRef.current.value = "";
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    const creds = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    };

    try {
      await registerAsync(creds);
      clearInputs();
      setLoading(false);
      navigate("/login");
      
    } catch (error) {
      const message = error.code;
      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className="register">
      <div className="wrapper">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <span className="error-msg">{error}</span>}
          <input required ref={nameRef} type="text" placeholder="Username" />
          <input required ref={emailRef} type="email" placeholder="Email" />
          <input required ref={passRef} type="password" placeholder="Password" />
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Register"}
          </button>
          <span className="link">
            <a href="/login">Do you have an account already? Login here</a>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register