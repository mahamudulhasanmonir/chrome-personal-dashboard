// 🌗 Theme toggle
const body = document.body;
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});

// 📝 Notes
const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");

saveNote.addEventListener("click", () => {
  localStorage.setItem("dashboardNote", noteInput.value);
  alert("Note saved!");
});

document.addEventListener("DOMContentLoaded", () => {
  noteInput.value = localStorage.getItem("dashboardNote") || "";
});

// 🌤 Weather
const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value;
  const apiKey = "78e75eb47dff8f72d2d49845a74b3c31"; // Replace with real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.main) {
    weatherResult.innerHTML = `🌡 ${data.main.temp}°C | ${data.weather[0].main}`;
  } else {
    weatherResult.innerHTML = "❌ City not found.";
  }
});

// ⏰ Reminder
const setReminderBtn = document.getElementById("setReminder");
const reminderText = document.getElementById("reminderText");
const reminderTime = document.getElementById("reminderTime");

setReminderBtn.addEventListener("click", () => {
  const text = reminderText.value;
  const time = parseInt(reminderTime.value, 10) * 1000;

  if (!text || isNaN(time)) return alert("Fill in all fields.");

  setTimeout(() => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon.png",
      title: "Reminder",
      message: text
    });
  }, time);

  alert("Reminder set!");
});
