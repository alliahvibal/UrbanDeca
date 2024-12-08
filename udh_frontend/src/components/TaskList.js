
import React from "react";
import TaskItem from "./TaskItem"; // Assuming TaskItem is a component in the same directory

const TaskList = React.memo(({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
});

export default TaskList;