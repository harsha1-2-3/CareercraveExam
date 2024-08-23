import { Link } from "react-router-dom";
import Header from "../Header";
import BookingsContext from "../../context/BookingsContext";
import "./index.css";

const BookingsList = () => {
  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderEmptyView = () => (
    <h1 className="emptyHead">
      No Bookings <br />
      Please Book your Session!!!
    </h1>
  );

  return (
    <BookingsContext.Consumer>
      {(value) => {
        const { bookingsList } = value;
        return (
          <>
            <Header />
            <div className="bookingsListBg">
              <div className="bookingsHeadCont">
                <h1 className="bookingsListHead">All Your Bookings</h1>
                <Link className="link" to="/bookings">
                  <button className="bookingsListBtn">
                    Book A New Session
                  </button>
                </Link>
              </div>
              {bookingsList.length === 0 ? (
                renderEmptyView()
              ) : (
                <ul className="bookingsUl">
                  {bookingsList.map((ee) => (
                    <li key={ee.id} className="bookingLi">
                      <div className="confirmDetailsCont">
                        <p className="confirmPara">
                          Student Name:
                          <span className="confirmLiSpan">
                            {capitalizeString(ee.username)}
                          </span>
                        </p>
                        <p className="confirmPara">
                          Your Mentor:
                          <span className="confirmLiSpan">
                            {" "}
                            {ee.activeMentor}
                          </span>
                        </p>
                        <p className="confirmPara">
                          Area of Interest:
                          <span className="confirmLiSpan">
                            {" "}
                            {ee.activeInterest}
                          </span>
                        </p>
                      </div>
                      <p className="confirmParaTime">{ee.activeDuration}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        );
      }}
    </BookingsContext.Consumer>
  );
};

export default BookingsList;
