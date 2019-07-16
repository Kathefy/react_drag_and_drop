import React, { Component } from 'react';

export default class DragDrop extends Component {
  state = {
    tasks: this.props.tasks
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, category) => {
    let id = e.dataTransfer.getData('id');

    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = category;
      }
      return task;
    });

    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="header">DRAG and DROP</h2>
        <div className="dragContainer">
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, 'todo');
            }}
          >
            <h4 className="taskHeader">ToDo</h4>
            {this.state.tasks
              .filter(task => task.category === 'todo')
              .map(task => {
                return (
                  <div
                    key={task.name}
                    draggable
                    className="draggable"
                    onDragStart={e => this.onDragStart(e, task.name)}
                  >
                    {task.name}
                  </div>
                );
              })}
          </div>
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, 'doing')}
          >
            <h4 className="taskHeader">Doing</h4>
            {this.state.tasks
              .filter(task => task.category === 'doing')
              .map(task => {
                return (
                  <div
                    key={task.name}
                    draggable
                    className="draggable"
                    onDragStart={e => this.onDragStart(e, task.name)}
                  >
                    {task.name}
                  </div>
                );
              })}
          </div>
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, 'done')}
          >
            <h4 className="taskHeader">Done</h4>
            {this.state.tasks
              .filter(task => task.category === 'done')
              .map(task => {
                return (
                  <div
                    key={task.name}
                    draggable
                    className="draggable"
                    onDragStart={e => this.onDragStart(e, task.name)}
                  >
                    {task.name}
                  </div>
                );
              })}
          </div>
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, 'accepted')}
          >
            <h4 className="taskHeader">Accepted</h4>
            {this.state.tasks
              .filter(task => task.category === 'accepted')
              .map(task => {
                return (
                  <div
                    key={task.name}
                    draggable
                    className="draggable"
                    onDragStart={e => this.onDragStart(e, task.name)}
                  >
                    {task.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
