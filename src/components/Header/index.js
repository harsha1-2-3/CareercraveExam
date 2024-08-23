import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <>
    <nav className="bgHeader">
      <Link className="link" to="/">
        <img
          className="headerLogo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyh-DGh3ZbJdBltQBjWlEwPwCPgT_srK5VDS6nnq7ifnxhzUAVRKUoVLX&s=10"
        />
      </Link>
      <div className="linksCont">
        <Link to="/" className="headerHead linked">
          Home
        </Link>
        <Link to="/bookings" className="headerHead linked">
          Booking Page
        </Link>
        <Link to="/bookings-list" className="headerHead linked">
          Bookings List
        </Link>
      </div>
    </nav>
  </>
);

export default Header;
