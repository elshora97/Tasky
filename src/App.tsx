import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Task } from "./Model/Model";
import TodoList from "./Components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), name: task, isDone: false }]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (destination == null) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // let add;
    // let active = tasks;
    // let complete = completedTasks;
    // // Source Logic
    // if (source.droppableId === "ToDoTasks") {
    //   add = active[source.index];
    //   active.splice(source.index, 1);
    // } else {
    //   add = complete[source.index];
    //   complete.splice(source.index, 1);
    // }

    // // Destination Logic
    // if (destination.droppableId === "ToDoTasks") {
    //   active.splice(destination.index, 0, add);
    // } else {
    //   complete.splice(destination.index, 0, add);
    // }

    // setCompletedTasks(complete);
    // setTasks(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Tasky</span>
        <InputField
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
        />
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
