import { useState } from "react";
import "./TimeView.css";
import { useEffect } from "react";

// View с временем и датой
function TimeView() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
  }, []);

  return (
    <div className="timeContainer">
      <p className="time">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</p>
      <p className="date">{`
        ${currentTime.getDate()} 
        ${months[currentTime.getMonth()]}
      `}</p>
    </div>
  );
}

export default TimeView;

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
