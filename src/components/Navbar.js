import { NavLink } from "react-router-dom";

export const Navbar = ({ user }) => {
  // console.log("user navbar", user);
  return (
    <div>
      {user ? (
        <p>
          Welcome, {user.user.name}, {user.token}
        </p>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
      {/* <NavLink to="/shopping">Login</NavLink> */}
    </div>
  );
};
