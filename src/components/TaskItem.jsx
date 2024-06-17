import PropTypes from 'prop-types';

const TaskItem = ({ task, onDelete, onToggleCompletion }) => {
  const {title, description, completed } = task;

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <button onClick={onToggleCompletion}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
};

export default TaskItem;