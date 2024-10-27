import "./App.css";
import LessonScheduleView from "../views/lessonScheduleView/LessonScheduleView";
import { useState } from "react";
import TimeView from "../views/timeView/TimeView";
import DailyRoutineView from "../views/dailyRoutineView/DailyRoutineView";

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

  const [dailyRoutine, setDailyRoutine] = useState([
    {
      name: "test",
      start_time: "12:00",
      end_time: "13:00",
    },
    {
      name: "test",
      start_time: "12:00",
      end_time: "13:00",
    },
    {
      name: "test",
      start_time: "12:00",
      end_time: "13:00",
    },
  ]);

  return (
    <div className="container">
      <div className="lessonScheduleContainer">
        <LessonScheduleView lessonSchedule={lessonSchedule} />
      </div>
      <div className="infoColumn">
        <TimeView />
        <DailyRoutineView dailyRoutine={dailyRoutine} />
      </div>
    </div>
  );
}

export default App;
