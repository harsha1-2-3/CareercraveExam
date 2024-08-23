import React from "react";

const BookingsContext = React.createContext({
  onAddBooking: () => {},
  bookingsList: [],
});
export default BookingsContext;
