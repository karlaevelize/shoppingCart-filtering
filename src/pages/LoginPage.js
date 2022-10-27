import axios from "axios";
import { useState } from "react";

const LoginPage = ({ setUser }) => {
  //
  const login = async () => {
    const response = await axios.post("http://localhost:4000/auth/login", {
      email: "apple@apple.com",
      password: "apple",
    });
    // console.log("login response", response);
    setUser(response.data);
    console.log("token", response.data.token);
    //
    const authResponse = await axios.get("http://localhost:4000/user", {
      headers: {
        Authorization: `Bearer ${response.data.token}`,
      },
    });
    console.log("auth", authResponse);
  };
  //

  // console.log("user", user);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Test login</button>
    </div>
  );
};

export { LoginPage };
