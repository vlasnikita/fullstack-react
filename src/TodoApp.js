import React, { Component } from 'react';
import './TodoApp.css';

const TODOS = [
  'Stand up',
  'Sit down',
  'Jump high',
  'Calm down'
];


class TodoApp extends Component {
  render() {
    return(
      <div>
        <TodoList
          title="MyTodo"
        />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: {value: '', isDone: false}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.newItem],
      newItem: {value: '', isDone: false}
    });
  }

  handleChange(e) {
    e.preventDefault();
    let newItem = this.state.newItem;
    newItem.value = e.target.value;
    this.setState({newItem});
  }

  handleDelete(e) {
    let newList = this.state.list.filter(item=>item.value !== e);
    this.setState({list: newList});
  }

  render() {
    return(
      <div className="todo-list large-font-size">
        <div className="todo-header">
          {this.props.title}
          <AddForm
            onChange={this.handleChange}
            onClick={this.handleSubmit}
            value={this.state.newItem.value}
          />
        </div>
        <div className="todo-body">
          <ul>
            {this.state.list.map((item, index)=>
              <li key={index}>
                <Item
                  name={item.value}
                  onDelete={()=>this.handleDelete(item.value)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

class AddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button
          type="submit"
          onClick={this.props.onClick}
        >
        <span class="glyphicon glyphicon-plus-sign"></span>
        </button>
      </form>
    )
  };
}

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row">
        <div>
          {this.props.name}
        </div>
        <div>
          <button>
            <span class="glyphicon glyphicon-ok-sign"></span>
          </button>
          <button onClick={this.props.onDelete}>
            <span class="glyphicon glyphicon-remove-sign"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default TodoApp;
