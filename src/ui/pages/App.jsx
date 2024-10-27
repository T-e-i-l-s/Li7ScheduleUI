import "./App.css";
import LessonScheduleView from "../views/lessonScheduleView/LessonScheduleView";
import { useState } from "react";

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
      {
        lessons: [
          {
            name: "тест",
            classroom: "202",
          },
        ],
        class: "12Я",
      },
      {
        lessons: [
          {
            name: "тест",
            classroom: "202",
          },
        ],
        class: "12Я",
      },
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

  return <>{<LessonScheduleView lessonSchedule={lessonSchedule} />}</>;
}

export default App;
