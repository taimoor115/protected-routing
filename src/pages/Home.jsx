import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Home = () => {
  const { user } = useAuth();
  return (
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>

        {!user && <NavLink to="login">Login</NavLink>}
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
