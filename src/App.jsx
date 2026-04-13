import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import NextTask from "./components/NextTask";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <div className="progress-boxes">
        <ProgressBar />
        <NextTask />
      </div>
      <TaskBoard />
    </>
  );
}

export default App;
