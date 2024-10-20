// event.js
import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css'; // Optional: for custom styling
import { FaCalendarAlt } from 'react-icons/fa'; // Importing the calendar icon

const Event = () => {
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // State to manage calendar visibility
  const calendarRef = useRef(null); // Reference for the calendar popup

  // Demo dates
  const demoDates = [
    
  ];

  const isDemoDate = (date) => {
    return demoDates.some(demoDate => 
      demoDate.toDateString() === date.toDateString()
    );
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible); // Toggle the visibility of the calendar
  };

  // Close calendar if clicked outside
  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsCalendarVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="event-container">
 
      {isCalendarVisible && ( // Show calendar only when isCalendarVisible is true
        <div className="calendar-popup" ref={calendarRef}>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date, view }) => {
              if (view === 'month' && isDemoDate(date)) {
                return 'demo-date'; // Add a custom class for demo dates
              }
              return null;
            }}
          />
          <div className="selected-date">
            <h3>Selected Date: {date.toDateString()}</h3>
          </div>
        </div>
      )}

      <button className="calendar-icon" onClick={toggleCalendar}>
        <FaCalendarAlt size={70} /> {/* Calendar icon */}
      </button>
    </div>
  );
};

export default Event;
