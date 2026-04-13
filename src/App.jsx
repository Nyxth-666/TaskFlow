import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import NextTask from "./components/NextTask";
import TaskBoard from "./components/TaskBoard";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <main>
        <Header />
        <TaskForm />
        <div className="progress-boxes">
          <ProgressBar />
          <NextTask />
        </div>
        <TaskBoard />
      </main>
      <TaskCard />
    </>
  );
}

export default App;
