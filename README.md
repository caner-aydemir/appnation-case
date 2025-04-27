# 🌦️ Weather Application

🔗 **Live Demo:** [https://appnation-case.vercel.app](https://appnation-case.vercel.app)

Welcome to the **Weather App**!  
A modern, responsive, dark/light mode supported weather dashboard built with **Next.js 15**, **React 19**, **TypeScript**, and more.

<div align="center">
  
| Dark Mode | Light Mode |
|:---------:|:----------:|
| ![Opera Anlık Görüntü_2025-04-28_020719_appnation-case vercel app](https://github.com/user-attachments/assets/20bb0684-921e-46ae-b1e7-88147c23870a) | ![Opera Anlık Görüntü_2025-04-28_020924_appnation-case vercel app](https://github.com/user-attachments/assets/ffb5692d-c626-405c-958f-39e4c8c30526) |

</div>

---
## 📋 Version Control & Git Workflow

Throughout the project development:

- Followed a **professional Git workflow** with clear and meaningful commit messages.
- Used **feature branches** (`chore/search-bar`, `feature/weather-dashboard`, etc.) for organized development.
- **Atomic commits** were made to ensure every commit has a single responsibility.
- Maintained a clean, readable, and chronological **commit history** to easily track changes.
- **Pull Requests** were used to simulate real-world team collaboration practices.
- Prioritized **code quality**, **maintainability**, and **readability** during all code reviews and merges.

> 🏆 This approach ensures a scalable, collaborative-ready project that aligns with industry standards for production-ready applications.

---

## 🚀 Features

- 🔎 **Real-time city search** with autocomplete (powered by GeoDB Cities API)
- 🧭 **Current weather information** (OpenWeatherMap)
- ⚡ **Optimized performance** (lazy loading, API caching with React Query)
- 📂 Clean code structure & modular components
- 🎨 **Light / Dark mode toggle**
- 📱 **Fully responsive** (desktop, tablet, mobile)
- 🕰️ **Hourly weather forecast** (next 6 hours)
- 📅 **5-Day weather forecast**
- 🌡️ **Temperature unit toggle** (°C/°F)
- 📚 **Search history** (last 5 searched cities saved in localStorage)
- 🌍 **SEO-friendly** meta tags


---

## 🛠️ Tech Stack

- **Next.js 15** (App Router, Server Actions)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Redux Toolkit** (state management for selected city and search history)
- **React Query** (API data caching, error/loading handling)
- **Framer Motion** (smooth animations)
- **Next-Themes** (dark/light mode management)
- **Axios** (API requests)
- **Lodash.debounce** (optimized input debounce)
- **React Toastify** (toast notifications)

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/appnation-weather-app.git
cd appnation-weather-app

# 2. Install dependencies
npm install

# 3. Create .env.local file
NEXT_PUBLIC_API_BASE_URL=https://your-vercel-app.vercel.app
WEATHER_API_KEY=your_openweathermap_api_key
NEXT_PUBLIC_GEODB_API_KEY=your_geodb_api_key

# 4. Run the project
npm run dev
```

---

## 📜 Environment Variables

You need to configure your `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-vercel-app.vercel.app
WEATHER_API_KEY=your_openweathermap_api_key
NEXT_PUBLIC_GEODB_API_KEY=your_geodb_api_key
```

- **OpenWeatherMap API Key:** [Sign Up Here](https://openweathermap.org/api)
- **GeoDB Cities API Key:** [Sign Up Here](https://rapidapi.com/wirefreethought/api/geodb-cities)

---

## 🖥️ Deployment

- Deployed live on **Vercel** 🚀
- Build command: `npm run build`
- Start command: `npm run start`

---

## 👨‍💻 Author

- [Caner Aydemir](https://github.com/caner-aydemir)

---

## ⭐ Feedback

If you like this project, leave a ⭐ star!  
Contributions are welcome too. 🚀
