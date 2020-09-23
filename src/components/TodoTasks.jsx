import React from 'react';
/* import Button from './Button'; */
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import FlipMove from 'react-flip-move';

import './TodoTasks.css';

export default props => {
  let todo = props.list;

  if (props.todoToShow === "Completed") {
    todo = todo.filter((item) => item.complete);
  } else if (props.todoToShow === "Remaining") {
    todo = todo.filter((item) => !item.complete);
  }

  return (
    <div key="container" className="todo-tasks">
      <FlipMove enterAnimation='elevator' leaveAnimation="elevator" maintainContainerHeight='true' >
        {todo.map((todoItem) => (
          <div key={todoItem.id} className="todo-item-container">
            <div className="todo-item" >
              <span className={todoItem.complete && props.todoToShow !== "Completed" ? "complete" : ""} onClick={() => props.completeFunction(todoItem)}>{todoItem.text}</span>
            </div>
            <div>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => props.deleteFunction(todoItem)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </FlipMove>
    </div>
  );
}