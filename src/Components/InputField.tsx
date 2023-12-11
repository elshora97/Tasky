import React from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
  return (
    <form className="input" onSubmit={handleAddTask}>
      <input
        type="input"
        placeholder="Enter a Task.."
        className="input__box"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="input_submit">Add</button>
    </form>
  );
};

export default InputField;
