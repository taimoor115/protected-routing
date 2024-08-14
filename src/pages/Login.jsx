import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const location = useLocation();

  const redirectedPath = location.state?.path || "/";

  console.log(redirectedPath, "hadas");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(user);
    navigate(redirectedPath, { replace: true });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input required type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
