import "./LessonScheduleView.css";

// View с расписанием уроков
function LessonScheduleView({ lessonSchedule }) {
  // Максимальное количество уроков у всех классов
  const maxLessons = Math.max(
    ...lessonSchedule.lessons.map((cls) => cls.lessons.length)
  );

  return (
    <table className="lessonScheduleTable">
      <thead>
        <tr>
          <th>
            <p className="sectionTitleCell"></p>
          </th>
          {lessonSchedule.lessons.map((cls) => (
            <th key={cls.class}>
              <p className="sectionTitleCell">{cls.class}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxLessons }).map((_, index) => (
          <tr
            key={index}
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "var(--secondary-background-color)"
                  : "transparent",
            }}
          >
            <td>
              <p className="sectionTitleCell">{index + 1}</p>
            </td>
            {lessonSchedule.lessons.map((cls) => (
              <td key={cls.class + index}>
                {cls.lessons[index] ? (
                  <div className="lessonCell">
                    <p className="lessonTitle">{cls.lessons[index].name}</p>
                    <p className="classroom">{cls.lessons[index].classroom}</p>
                  </div>
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LessonScheduleView;
