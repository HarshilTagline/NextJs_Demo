import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [loginState, setLoginState] = useState({ username: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const handleLogin = (e) => {
    // e.preventDefault();
    fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginState?.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginState?.password}
            onChange={handleOnChange}
          />
        </div>
        <button>Login</button>
      </form>
      {/* <div>
        Not have an account - <Link href={"/signup"}>Sign up</Link>
      </div> */}
    </div>
  );
}
