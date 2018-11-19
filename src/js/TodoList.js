import React from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value
  }

  render() {
    const { todos, filter, filteredTodos } = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li>{todo}</li>
    ))
    return <div>
      <h1>Todos</h1>
      <div>{filter}</div>
      <input
      className='filter'
      value={filter}
      onChange={this.filter.bind(this)}/>
      <ul>{todoLis}</ul>
    </div>
  }
}
