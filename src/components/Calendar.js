import React from "react";
import "../style/Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dc805217f06644fe297e8e3e67ecda287125d301703ff8908db77cee129514f8%40group.calendar.google.com&ctz=Europe%2FParis"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Calendar;
