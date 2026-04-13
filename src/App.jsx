import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import NextTask from "./components/NextTask";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <div className="progress-boxes">
        <ProgressBar />
        <NextTask />
      </div>
    </>
  );
}

export default App;
