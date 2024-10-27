import "./DailyRoutineView.css";

// View с распорядком дня
function DailyRoutineView({ dailyRoutine }) {
  return (
    <ul className="dailyRoutineList">
      {dailyRoutine.map((routine, index) => (
        <li className="routineCell" key={index}>
          <p className="routineName">{routine.name}</p>
          <p className="routineTime">{`${routine.start_time}-${routine.end_time}`}</p>
        </li>
      ))}
    </ul>
  );
}

export default DailyRoutineView;
