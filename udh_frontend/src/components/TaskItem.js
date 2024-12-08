
import React from "react";

const TaskItem = React.memo(({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
});

export default TaskItem;