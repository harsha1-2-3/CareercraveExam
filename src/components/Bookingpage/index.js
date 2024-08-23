import { Component } from "react";
import { v4 } from "uuid";
import Header from "../Header";
import BookingsContext from "../../context/BookingsContext";
import "./index.css";
import { Link } from "react-router-dom";

const durationList = [
  {
    durationId: "30min",
    displayText: "30 MIN",
    price: 2000,
  },
  {
    durationId: "45min",
    displayText: "45 MIN",
    price: 3000,
  },
  {
    durationId: "60min",
    displayText: "60 MIN",
    price: 4000,
  },
];

const areasOfInterest = [
  {
    interestId: 1,
    displayText: "Select your interest",
  },
  {
    interestId: 2,
    displayText: "FMCG Sales",
  },
  {
    interestId: 3,
    displayText: "Equity Reaserch",
  },
  {
    interestId: 4,
    displayText: "Digital Marketing",
  },
  {
    interestId: 5,
    displayText: "Consulting",
  },
  {
    interestId: 6,
    displayText: "Investment Banking",
  },
  {
    interestId: 7,
    displayText: "Product Management",
  },
  {
    interestId: 8,
    displayText: "Business Analytics",
  },
  {
    interestId: 9,
    displayText: "Entrepreneurship",
  },
  {
    interestId: 10,
    displayText: "Supply Chain Management",
  },
  {
    interestId: 11,
    displayText: "Human Resources",
  },
];

const mentorsList = [
  {
    mentorId: 1,
    displayText: "Select your mentor",
    areaOfExpertise: "Nothing",
    availability: "Nothing",
    isPremium: false,
  },
  {
    mentorId: 2,
    displayText: "Henry",
    areaOfExpertise: "Equity Research",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 3,
    displayText: "Carvil",
    areaOfExpertise: "FMCG Sales",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 4,
    displayText: "Reddy",
    areaOfExpertise: "Digital Marketing",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 5,
    displayText: "Henry Carvil Reddy",
    areaOfExpertise: "Equity Research",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 6,
    displayText: "Alex",
    areaOfExpertise: "Supply Chain Management",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 7,
    displayText: "Olivia",
    areaOfExpertise: "Human Resources",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 8,
    displayText: "Ethan",
    areaOfExpertise: "Digital Marketing",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 9,
    displayText: "Sophia",
    areaOfExpertise: "Equity Research",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 10,
    displayText: "Noah",
    areaOfExpertise: "Consulting",
    availability: "60 MIN",
    isPremium: false,
  },

  {
    mentorId: 11,
    displayText: "Ava",
    areaOfExpertise: "Investment Banking",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 12,
    displayText: "Ben",
    areaOfExpertise: "Business Analytics",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 13,
    displayText: "Charlie",
    areaOfExpertise: "Entrepreneurship",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 14,
    displayText: "David",
    areaOfExpertise: "Supply Chain Management",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 15,
    displayText: "Emily",
    areaOfExpertise: "Human Resources",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 16,
    displayText: "Finn",
    areaOfExpertise: "Consulting",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 17,
    displayText: "Grace",
    areaOfExpertise: "Product Management",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 18,
    displayText: "Henry",
    areaOfExpertise: "Equity Research",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 19,
    displayText: "Ivy",
    areaOfExpertise: "FMCG Sales",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 20,
    displayText: "Jack",
    areaOfExpertise: "Digital Marketing",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 21,
    displayText: "Kate",
    areaOfExpertise: "Investment Banking",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 22,
    displayText: "Liam",
    areaOfExpertise: "Business Analytics",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 23,
    displayText: "Maya",
    areaOfExpertise: "Entrepreneurship",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 24,
    displayText: "Noah",
    areaOfExpertise: "Supply Chain Management",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 25,
    displayText: "Olivia",
    areaOfExpertise: "Human Resources",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 26,
    displayText: "Parker",
    areaOfExpertise: "Consulting",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 27,
    displayText: "Quinn",
    areaOfExpertise: "Product Management",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 28,
    displayText: "Riley",
    areaOfExpertise: "Equity Research",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 29,
    displayText: "Sophia",
    areaOfExpertise: "FMCG Sales",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 30,
    displayText: "Thomas",
    areaOfExpertise: "Digital Marketing",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 31,
    displayText: "Una",
    areaOfExpertise: "Investment Banking",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 32,
    displayText: "Victor",
    areaOfExpertise: "Business Analytics",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 33,
    displayText: "Willow",
    areaOfExpertise: "Entrepreneurship",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 34,
    displayText: "Xavier",
    areaOfExpertise: "Supply Chain Management",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 35,
    displayText: "Yara",
    areaOfExpertise: "Human Resources",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 36,
    displayText: "Zane",
    areaOfExpertise: "Consulting",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 37,
    displayText: "Abigail",
    areaOfExpertise: "Product Management",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 38,
    displayText: "Benjamin",
    areaOfExpertise: "Equity Research",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 39,
    displayText: "Chloe",
    areaOfExpertise: "FMCG Sales",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 40,
    displayText: "Daniel",
    areaOfExpertise: "Digital Marketing",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 41,
    displayText: "Eleanor",
    areaOfExpertise: "Investment Banking",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 42,
    displayText: "Finn",
    areaOfExpertise: "Business Analytics",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 43,
    displayText: "Grace",
    areaOfExpertise: "Entrepreneurship",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 44,
    displayText: "Henry",
    areaOfExpertise: "Supply Chain Management",
    availability: "30 MIN",
    isPremium: false,
  },
  {
    mentorId: 45,
    displayText: "Ivy",
    areaOfExpertise: "Human Resources",
    availability: "45 MIN",
    isPremium: true,
  },
  {
    mentorId: 46,
    displayText: "Jack",
    areaOfExpertise: "Consulting",
    availability: "60 MIN",
    isPremium: false,
  },
  {
    mentorId: 47,
    displayText: "Kate",
    areaOfExpertise: "Product Management",
    availability: "30 MIN",
    isPremium: true,
  },
  {
    mentorId: 48,
    displayText: "Liam",
    areaOfExpertise: "Equity Research",
    availability: "45 MIN",
    isPremium: false,
  },
  {
    mentorId: 49,
    displayText: "Maya",
    areaOfExpertise: "FMCG Sales",
    availability: "60 MIN",
    isPremium: true,
  },
  {
    mentorId: 50,
    displayText: "Noah",
    areaOfExpertise: "Digital Marketing",
    availability: "30 MIN",
    isPremium: false,
  },
];

class Bookingpage extends Component {
  state = {
    username: "Your Name",
    allBookingsList: [],
    activeForm: "Booking",
    activePrice: 0,
    activeDuration: "0 MIN",
    activeInterest: areasOfInterest[0].displayText,
    activeMentor: mentorsList[0].displayText,
    mentorsListState: mentorsList,
    isPremiumNeeded: false,
  };

  getMentors = (s = "30 MIN") => {
    const { activeInterest, mentorsListState } = this.state;
    const filteredMentors = mentorsListState.filter(
      (e) => e.areaOfExpertise === activeInterest || e.availability === s
    );
    this.setState({ mentorsListState: filteredMentors });
    console.log(filteredMentors);
  };

  onChangeName = (event) => {
    this.setState({ username: event.target.value });
  };

  onClickDuration = (durationId) => {
    const priceGot = durationList.find((e) => e.durationId === durationId);
    this.setState({ activeDuration: durationId, activePrice: priceGot.price });
    console.log(priceGot.displayText);
    this.getMentors(priceGot.displayText);
  };

  onChangeInterest = (event) => {
    this.setState({ activeInterest: event.target.value }, this.getMentors);
  };

  onChangeMentor = (event) => {
    const value = event.target.value;
    this.setState({
      activeMentor: value === "" ? "Select your mentor" : value,
    });
  };
  onChangePremium = () => {
    this.setState(
      (prevState) => ({
        isPremiumNeeded: !prevState.isPremiumNeeded,
      }),
      this.getMentors
    );
  };

  onSubmitBooking = (event) => {
    event.preventDefault();
    const { isPremiumNeeded } = this.state;
    this.setState((prevState) => ({
      activeForm: "Confirm",
      activePrice: isPremiumNeeded
        ? prevState.activePrice + 1000
        : prevState.activePrice,
    }));
  };

  renderBookingForm = () => {
    const {
      username,
      activeDuration,
      activeInterest,
      activeMentor,
      isPremiumNeeded,
      mentorsListState,
    } = this.state;
    return (
      <div className="bookingBg">
        <div className="bookingCont">
          <h1 className="bookingHead">Session Booking Page</h1>
          <form onSubmit={this.onSubmitBooking} className="bookingForm">
            <div className="inputCont">
              <label className="inputLabel">Name</label>
              <input
                className="inputBox"
                placeholder="Enter Your Name"
                type="text"
                value={username}
                onChange={this.onChangeName}
              />
            </div>
            <div className="inputCont">
              <h1 className="inputLabel">Session Duration</h1>
              <ul className="checkboxCont">
                {durationList.map((each) => (
                  <li key={each.durationId} className="durationCont">
                    <button
                      onClick={() => this.onClickDuration(each.durationId)}
                      type="button"
                      className={`durationBtn ${
                        each.durationId === activeDuration
                          ? "activeDurationBtn"
                          : ""
                      }`}
                    >
                      {each.displayText}
                    </button>
                    <p className="durationPrice">{each.price}/-</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="inputCont">
              <h1 className="inputLabel">Areas of Interest</h1>
              <select
                value={activeInterest}
                onChange={this.onChangeInterest}
                className="inputBox"
              >
                {areasOfInterest.map((each) => (
                  <option
                    value={each.displayText}
                    key={each.interestId}
                    className="inputOption"
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputCont">
              <h1 className="inputLabel">Available Mentors</h1>
              <select
                value={
                  activeMentor === ""
                    ? mentorsListState[0].displayText
                    : activeMentor
                }
                onChange={this.onChangeMentor}
                className="inputBox"
              >
                {mentorsListState.map((each) => (
                  <option
                    value={each.displayText}
                    key={each.mentorId}
                    className="inputOption"
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="checkboxCont">
              <input
                value={isPremiumNeeded}
                onChange={this.onChangePremium}
                id="check"
                className="check"
                type="checkbox"
              />
              <label htmlFor="check" className="inputLabel">
                Need Premium Service (+Rs.1000/-)
              </label>
            </div>
            <button type="submit" className="bookingBtn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    );
  };

  capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  renderConfirmForm = () => {
    const { isPremiumNeeded, activePrice } = this.state;

    return (
      <BookingsContext.Consumer>
        {(value) => {
          const { onAddBooking } = value;

          const { username, activeDuration, activeMentor, activeInterest } =
            this.state;
          const bookingDetailsObj = {
            id: v4(),
            username,
            activeDuration,
            activeMentor,
            activeInterest,
          };
          const onClickConfirm = () => {
            onAddBooking(bookingDetailsObj);
          };
          return (
            <div className="confirmCont">
              <h1 className="confirmHead">Confirmation Page</h1>
              <ul className="confirmDetailsUl">
                <li className="confirmLi">
                  Name:{" "}
                  <span className="confirmLiSpan">
                    {this.capitalizeString(username)}
                  </span>
                </li>
                <li className="confirmLi">
                  Duration:{" "}
                  <span className="confirmLiSpan">{activeDuration}</span>
                </li>
                <li className="confirmLi">
                  Area of Interest:
                  <span className="confirmLiSpan">{activeInterest}</span>
                </li>
                <li className="confirmLi">
                  Mentor: <span className="confirmLiSpan">{activeMentor}</span>
                </li>
                <li className="confirmLi">
                  Is Premium:{" "}
                  <span className="confirmLiSpan">
                    {this.capitalizeString(isPremiumNeeded.toString())}
                  </span>
                </li>
                <li className="confirmLi">
                  Total: <span className="confirmLiSpan">{activePrice}/-</span>
                </li>
              </ul>
              <button onClick={onClickConfirm} className="confirmBtn">
                <Link to="/bookings-list" className="link">
                  Confirm
                </Link>
              </button>
            </div>
          );
        }}
      </BookingsContext.Consumer>
    );
  };
  renderAllForms = () => {
    const { activeForm } = this.state;

    switch (activeForm) {
      case "Booking":
        return this.renderBookingForm();
      case "Confirm":
        return this.renderConfirmForm();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        {this.renderAllForms()}
      </>
    );
  }
}

export default Bookingpage;
