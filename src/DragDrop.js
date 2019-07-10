import React, { Component } from 'react';

export default class DragDrop extends Component {
  state = {
    tasks: [
      { name: 'Task 1', category: 'todo' },
      { name: 'Task 2', category: 'doing' },
      { name: 'Task 3', category: 'done' },
      { name: 'Task 4', category: 'accepted' }
    ]
  };

  render() {
    var tasks = {
      todo: [],
      doing: [],
      done: [],
      accepted: []
    };
    this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <div key={task.name} draggable className="draggable">
          {task.name}
        </div>
      );
    });
    return <div className="dragContainer">DRAG container</div>;
  }
}
