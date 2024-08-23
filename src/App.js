import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/Bookingpage";
import BookingsList from "./components/BookingsList";
import BookingsContext from "./context/BookingsContext";

class App extends Component {
  state = {
    bookingsList: [],
  };

  onAddBooking = (bookingObj) => {
    this.setState((prevState) => ({
      bookingsList: [...prevState.bookingsList, bookingObj],
    }));
  };
  render() {
    const { bookingsList } = this.state;

    return (
      <BookingsContext.Provider
        value={{
          bookingsList,
          onAddBooking: this.onAddBooking,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookings" element={<BookingPage />} />
            <Route exact path="/bookings-list" element={<BookingsList />} />
          </Routes>
        </BrowserRouter>
      </BookingsContext.Provider>
    );
  }
}

export default App;
