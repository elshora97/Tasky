import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Task } from "./Model/Model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), name: task, isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasky</span>
      <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
