import { API_BASE_URL } from "../../values/constants";

// Функция получения полного списка списка уроков
export async function getFullLessonSchedule() {
  const response = await fetch(API_BASE_URL + "full_lesson_schedule");
  return await response.json();
}

// Функция получения списка уроков по дню недели
export async function getLessonSchedule(weekday) {
  const response = await fetch(
    API_BASE_URL + "lesson_schedule?weekday=" + weekday
  );
  return response.json();
}
