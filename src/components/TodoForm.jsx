import React, { Component } from 'react';
/* import Button from './Button'; */

import Button from '@material-ui/core/Button';

import './TodoForm.css';


export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleInputChange = (e) => {
    const input = e.target.value;
    this.setState({ input });
  };

  handleAdd = () => {
    const input = this.state.input;

    if (!input) {
      return;
    }

    this.props.addFunction(input);
    this.setState({ input: "" });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.handleAdd();
    }
  };

  render() {
    return (
      <div className="todo-form">
        <input placeholder="New task" onChange={this.handleInputChange} value={this.state.input} type="text" onKeyUp={this.handleKeyUp} />
        <Button onClick={this.handleAdd} variant="contained" color="primary">Add</Button >
      </div>
    );
  }

}