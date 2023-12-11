import React from "react";
import { Task } from "../Model/Model";
import SingeTask from "./SingeTask";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<Props> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDoTasks">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {tasks?.map((task, index) => (
              <SingeTask
                index={index}
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="CompletedTasks">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTasks?.map((task, index) => (
              <SingeTask
                index={index}
                key={task.id}
                task={task}
                tasks={completedTasks}
                setTasks={setCompletedTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
