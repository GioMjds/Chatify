import { useRef, useState } from "react";
import "../assets/css/login.css";
import { loginAsync } from "../services/authServices";
import { getUserAsync } from "../services/chatServices";

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearInputs = () => {
    if (emailRef?.current) {
      emailRef.current.value = ""; 
    }
    if (passRef?.current) {
      passRef.current.value = "";
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const creds = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      const res = await loginAsync(creds);
      if (res?.user) {
        console.log("auth user: ", res.user);
        const currentUser = await getUserAsync(res.user.uid);
        console.log("firestore user: ", currentUser);
        clearInputs();
        setLoading(false);
      }
    } catch (error) {
      const message = error.code;
      setError(message);
      setLoading(false);
    }
  }
  return (
    <div className="login">
      <div className="wrapper">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <span className="error-msg">{error}</span>}
          <input 
            required
            ref={emailRef}
            type="email"
            placeholder="Email"
          />
          <input
            required
            ref={passRef}
            type="password"
            placeholder="Password"
          />
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </button>
          <span className="link">
            <a href="/register">No account? Register here</a>
          </span>
        </form>
      </div>
    </div>
  )
}
