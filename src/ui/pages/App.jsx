import "./App.css";
import LessonScheduleView from "../views/lessonScheduleView/LessonScheduleView";
import { useState } from "react";
import TimeView from "../views/timeView/TimeView";
import DailyRoutineView from "../views/dailyRoutineView/DailyRoutineView";
import NotificationsView from "../views/notificationsView/NotificationsView";

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

  const [notifications, setNotifications] = useState([
    {
      id: 0,
      title: "Моралька",
      description: "Приходите в хол к 17.30!",
    },
    {
      id: 0,
      title: "Линейка",
      description: "Ждем всех в 8.20!",
    },
    {
      id: 0,
      title: "Расписание",
      description: "Доска была обновлена при поддержке команды Алексея Леухина",
    },
  ]);

  return (
    <div className="container">
      <div className="lessonScheduleContainer">
        <LessonScheduleView lessonSchedule={lessonSchedule} />
      </div>
      <div className="infoColumn">
        <TimeView />
        <NotificationsView notifications={notifications} />
        <DailyRoutineView dailyRoutine={dailyRoutine} />
      </div>
    </div>
  );
}

export default App;
