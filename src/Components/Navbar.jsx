import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  return (
    <div>
      <Link to="/admin">Admin</Link>
      <br />
      <br />
      <Link to="/user">User</Link>
      <br />
      <br />
      <Link to="/company">Company</Link>
    </div>
  );
};
