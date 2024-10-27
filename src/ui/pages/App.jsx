import "./App.css";
import LessonScheduleView from "../views/lessonScheduleView/LessonScheduleView";
import { useState } from "react";
import TimeView from "../views/timeView/TimeView";

function App() {
  const [lessonSchedule, setLessonSchedule] = useState({
    weekday: 1,
    lessons: [
      {
        lessons: [
          {
            name: "тест",
            classroom: "202",
          },
        ],
        class: "12Я",
      },
    ],
  });

  return (
    <div className="container">
      <div className="lessonScheduleContainer">
        <LessonScheduleView lessonSchedule={lessonSchedule} />
      </div>
      <div className="infoColumn">
        <TimeView />
      </div>
    </div>
  );
}

export default App;
