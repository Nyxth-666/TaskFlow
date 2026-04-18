# 📌 TaskFlow – Task Management App

## Group #1

**Leader:** Joshua Barotea  
**Members:**

- MAMAC, JOHN MICHAEL L.
- PRONTON, JONEL P.
- SAN AGUSTIN, JHONAS C.
- SECO, CIELO G.
- BAUTISTA, ALMA M.
- ORTE, JAMES MIRO R.
- METRAN, RAFAEL L.
- AGUILERA, JOHN KEVIN F.
- DALUMPIENES, GEOFFREY BEENE P.
- ESGUERRA, NATHANIEL L.
- BERMUDEZ, ROMMEL GIO C.
- ENDOZO, CHRISTIAN JAY C.

**GitHub:** [TaskFlow Repo](https://github.com/Nyxth-666/TaskFlow.git)  
**License:** [MIT License](LICENSE)

---

TaskFlow is a simple and intuitive task management web application built with React that helps users organize, track, and manage daily tasks efficiently.

---

## 🚀 Features

- ✅ Add tasks with title and description (auto timestamp)
- 📋 Task board with search and filters (All/Completed/Overdue >24h)
- 📊 Progress bar (circle + bar % complete)
- ⏰ Next pending task display
- ✔️ Toggle complete checkbox
- ✏️ Edit (prompt)
- 🗑️ Delete (confirm)
- 💾 localStorage persistence

---

## 🖥️ UI Components

| Component   | Description              |
| ----------- | ------------------------ |
| TaskForm    | Add new tasks            |
| ProgressBar | Completion %             |
| NextTask    | First pending task       |
| TaskBoard   | List with search/filters |

---

## 🛠️ Tech Stack

- **React** + Vite
- **CSS** (responsive)
- **Context API** + custom hook for state
- **localStorage** persistence

---

## 🚀 Quick Start

1. Clone & install:

```bash
git clone https://github.com/Nyxth-666/TaskFlow.git
cd TaskFlow
npm install
```

2. Run:

```bash
npm run dev
```

3. Open http://localhost:5173

**Test:** Add tasks, toggle/edit/delete, filter overdue, resize - responsive, persistent.

---

## 📁 Structure

```
src/
├── components/     # UI components
├── context/        # TaskContext
├── hook/           # useTask hook
├── utils/          # TimeUtils
└── styles/         # CSS
```

---

License: This project is for educational purposes only.
