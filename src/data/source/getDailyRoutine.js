import { API_BASE_URL } from "../../values/constants";

// Функция получения расписания дня
async function getDailyRoutine() {
  const response = await fetch(API_BASE_URL + "daily_routine");
  return response.json();
}
