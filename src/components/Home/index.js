import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="bgHome">
      <h1 className="homeHead">Book 1x1 Scheduler with</h1>
      <div className="logoCont">
        <img
          className="homeImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyh-DGh3ZbJdBltQBjWlEwPwCPgT_srK5VDS6nnq7ifnxhzUAVRKUoVLX&s=10"
          alt="logo"
        />
        <p className="homePara">Careercrave</p>
      </div>
      <Link to="/bookings" className="link">
        <button className="homeBtn">Book A Session</button>
      </Link>
    </div>
  </>
);
export default Home;
