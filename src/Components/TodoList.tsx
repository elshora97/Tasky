import React from "react";
import { Task } from "../Model/Model";
import SingeTask from "./SingeTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className="container">
      <div className="todos">
        {tasks.map((task) => (
          <SingeTask
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
