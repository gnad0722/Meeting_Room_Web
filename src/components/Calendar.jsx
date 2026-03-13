import React, { useState } from "react";
function Calendar() {
 const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();

  const changeMonth = (offset) => {
    setViewDate(new Date(year, month + offset, 1));
  };

  const handleDateClick = (day, isCurrentMonth) => {
    if (isCurrentMonth) {
      setSelectedDate(new Date(year, month, day));
    }
  };

  const generateDays = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    let firstDayWeekday = firstDayOfMonth.getDay(); 
    firstDayWeekday = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

    const days = [];
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, currentMonth: false });
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push({ day: i, currentMonth: true });
    }

    const totalSlots = 42; 
    const remainingSlots = totalSlots - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({ day: i, currentMonth: false });
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-btn" onClick={() => changeMonth(-1)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="calendar-title">
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(viewDate)} {year}
        </h2>
        
        <button className="nav-btn" onClick={() => changeMonth(1)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="weekday-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="weekday-label">{day}</div>
        ))}
      </div>

      <div className="days-grid">
        {generateDays().map((item, index) => {
          const isSelected = 
            item.currentMonth && 
            item.day === selectedDate.getDate() && 
            month === selectedDate.getMonth() && 
            year === selectedDate.getFullYear();

          return (
            <div
              key={index}
              onClick={() => handleDateClick(item.day, item.currentMonth)}
              className={`day-cell 
                ${item.currentMonth ? 'current-month' : 'other-month'} 
                ${isSelected ? 'selected' : ''}`}
            >
              {item.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Calendar;
