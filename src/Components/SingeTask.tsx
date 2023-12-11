import React, { useEffect, useRef, useState } from "react";
import { Task } from "../Model/Model";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingeTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.name);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: editTask } : task))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="todos__single--text"
        />
      ) : task.isDone ? (
        <s className="todos__single--text">{task.name}</s>
      ) : (
        <span className="todos__single--text">
          <p>{task.name}</p>
        </span>
      )}

      <div>
        <span
          className={`icon ${task.isDone ? "disabled" : null}`}
          onClick={() => {
            if (!task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingeTask;
