import React from 'react'
import PropTypes from 'prop-types'
const TodoItems = (props) => {
    let todo = props.todoProps
    const markComplete= props.markCompletedFunc
    const deleteTodo = props.deleteTodoFunc

    const styleTodoItems = {
        background: '#f4f4f4f4',
        padding: "10px",
        borderBottom: '1px dotted #ccc',
        justifyContent:'space-between',
        display: 'flex',
    }
    const styleTodos = {
      marginRight: 'auto',
      marginTop: '4px',
      textDecoration: todo.completed ? 'line-through' : 'none',
    }
      const styleinput = {
        marginTop: '10px',
        marginRight: '14px',
      }
    return (
      <div style={styleTodoItems} className='container'>
        <input
          style={styleinput}
          type='checkbox'
          onChange={markComplete.bind(this, todo.id)}
          checked={todo.completed}
        />
        <div style={styleTodos}>{todo.title}</div>
        <button type='button' class='btn btn-danger' onClick={deleteTodo.bind(this, todo.id)}>
          Xóa
        </button>
      </div>
    )
}
//PropTypes
TodoItems.propTypes = {
  todoProps: PropTypes.object.isRequired, //phai co todoProps thi component moi hd bth
  markCompletedFunc: PropTypes.func.isRequired,
  deleteTodoFunc:PropTypes.func.isRequired
}

export default TodoItems