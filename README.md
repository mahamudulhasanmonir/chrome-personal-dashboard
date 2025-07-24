# 🧠 My Smart Dashboard — Chrome Extension

A personal Chrome extension that brings together your most-used tools into a beautiful, private, and interactive dashboard.

![Banner](https://raw.githubusercontent.com/yourusername/my-dashboard-extension/main/preview.png) <!-- Replace with actual image if available -->

---

## 🚀 Features

- 📝 **Notes** — Save quick thoughts using local storage  
- 🌤 **Weather** — View current weather by city name (via OpenWeather API)  
- ⏰ **Reminders** — Set custom reminders with Chrome notifications  
- 🌗 **Dark/Light Mode** — Toggle between themes instantly  
- 🔒 **Private** — All data is stored locally on your device

---

## 📸 Preview

| Dashboard | Light Mode | Reminder Notification |
|----------|-------------|------------------------|
| ![](https://raw.githubusercontent.com/yourusername/my-dashboard-extension/main/screens/dashboard.png) | ![](https://raw.githubusercontent.com/yourusername/my-dashboard-extension/main/screens/light-mode.png) | ![](https://raw.githubusercontent.com/yourusername/my-dashboard-extension/main/screens/reminder.png) |

> 🖼️ You can customize these images or remove if not needed.

---

## 🛠️ Installation (For Local Development)

1. Clone this repository  
   ```bash
   git clone https://github.com/mahamudulhasanmonir/my-dashboard-extension.git
   ```
2. Go to chrome://extensions/ in your browser

3. Enable Developer Mode

4. Click Load Unpacked and select the cloned folder

5. Done! You should see the extension in your toolbar


🌐 Setup Weather API
This extension uses OpenWeather for real-time weather updates.

1. Create a free account at https://openweathermap.org/api

2. Get your API key

3. Open popup.js and replace:
   
```
const apiKey = "YOUR_OPENWEATHER_API_KEY";
```

📁 Folder Structure

```
my-dashboard-extension/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── icons/
│   └── icon.png
└── assets/
    └── [Optional images or SVGs]
```
🔒 Permissions

1. notifications — for local reminder popups

2. host_permissions — to fetch weather data securely from OpenWeather

📌 Tech Used
- HTML5 + CSS3

- JavaScript (Vanilla)

- Chrome Extension API (Manifest v3)

- OpenWeather API

🙌 Author
Mahamudul Hasan
📫 LinkedIn • GitHub

🧩 License
MIT License — free for personal or educational use.

- ❤️ Inspired by simplicity, built for productivity.
