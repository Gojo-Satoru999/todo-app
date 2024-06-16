import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || taskDescription.trim() === '') {
      alert('Please fill in both task name and description.');
      return;
    }
    // Add new task to list of tasks
    // Update tasks state
    // Clear form fields
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;