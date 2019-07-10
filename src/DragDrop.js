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
        <div
          key={task.name}
          draggable
          className="draggable"
          onDragStart={e => this.onDragStart(e, task.name)}
        >
          {task.name}
        </div>
      );
    });
    return (
      <div className="dragContainer">
        <h2 className="header">DRAG and DROP</h2>
        <div
          className="todo"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, 'todo');
          }}
        >
          <span className="task-header">TODO</span>
          {tasks.todo}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'doing')}
        >
          <span className="task-header">Doing</span>
          {tasks.doing}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'done')}
        >
          <span className="task-header">Done</span>
          {tasks.done}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'accepted')}
        >
          <span className="task-header">Accepted</span>
          {tasks.accepted}
        </div>
      </div>
    );
  }
}
