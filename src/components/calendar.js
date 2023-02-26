import { useState } from 'react';

const Calendar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleDateClick = (date) => {
    if (!checkInDate) {
      setCheckInDate(date);
    } else if (!checkOutDate && date > checkInDate) {
      setCheckOutDate(date);
    } else {
      setCheckInDate(date);
      setCheckOutDate(null);
    }
  };

  const getCalendarDays = (month) => {
    const daysInMonth = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0
    ).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), i));
    }

    return days;
  };

  const renderCalendarDays = (month) => {
    const days = getCalendarDays(month);

    return days.map((day) => {
      const isDisabled = day < new Date();
      const isCheckInDate = day.toDateString() === checkInDate?.toDateString();
      const isCheckOutDate =
        day.toDateString() === checkOutDate?.toDateString();
      const isInRange =
        checkInDate && checkOutDate && day > checkInDate && day < checkOutDate;

      return (
        <div
          key={day.toISOString()}
          className={`calendar-day ${isDisabled ? 'disabled' : ''} ${
            isCheckInDate ? 'check-in' : ''
          } ${isCheckOutDate ? 'check-out' : ''} ${
            isInRange ? 'in-range' : ''
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day.getDate()}
        </div>
      );
    });
  };

  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth());

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          Prev
        </button>
        <h3>
          {currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          Next
        </button>
      </div>
      <div className="calendar-body">
        <div className="calendar-row">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {renderCalendarDays(currentMonth)}
      </div>
    </div>
  );
};

export default Calendar;
