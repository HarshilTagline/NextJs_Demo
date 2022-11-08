import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [signUpState, setSignUpState] = useState({ email: "", password: "", confirmPassword: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpState({ ...signUpState, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch("/api/authentication/signup", {
      method: "POST",
      body: JSON.stringify(signUpState),
      "Content-type": "application/json",
    });
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email</label>
          <input name="email" type="email" value={signUpState?.email} onChange={handleOnChange} />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={signUpState?.password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={signUpState?.confirmPassword}
            onChange={handleOnChange}
          />
        </div>
        <button>Sign up</button>
      </form>
      <div>
        Already have an account - <Link href={"/"}>Login</Link>
      </div>
    </div>
  );
}
