import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/actions';
import PropTypes from 'prop-types';

const Task: FC<{ task: PropTypes.Shape<{ id: PropTypes.Number, description: PropTypes.String, isDone: PropTypes.Bool }> }> = ({ task }) => {
  const dispatch = useDispatch();

  Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }).isRequired,
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span onClick={() => dispatch(toggleTask(task.id))}>
        {task.description}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;