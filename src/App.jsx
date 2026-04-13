import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <div className="progress-boxes">
        <ProgressBar />
      </div>
    </>
  );
}

export default App;
