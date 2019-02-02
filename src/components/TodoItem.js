import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyles = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            textDecoration: this.props.todo.finished ? 'line-through' : 'none'
        }
    }

    

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyles()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
            {title}
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
