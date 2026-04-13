import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import NextTask from "./components/NextTask";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <TaskProvider>
      <main>
        <Header />
        <TaskForm />
        <div className="progress-boxes">
          <ProgressBar />
          <NextTask />
        </div>
        <TaskBoard />
      </main>
    </TaskProvider>
  );
}

export default App;
