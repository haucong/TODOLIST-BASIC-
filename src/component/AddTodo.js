import React, { useState } from 'react';
import PropsTypes from 'prop-types';
const AddTodo = (props) => {
    const addTodo = props.addTodoFunc

    const [title, setTile] = useState('');

    const changeTitle = e => {
        setTile(e.target.value);
    }
    const addSingleTodo = e => {
        e.preventDefault();
        if(title !== ''){
            addTodo(title)
            setTile('')
        }
    }

    
  const addTodoFormStyle = {
    display: 'flex',
    width: '300px',
    marginBottom: '10px',
    // marginRight: '10px'
  }

  const addTodoInputStyle = {
    padding: '5px',
  }

    return (
      <form
        style={addTodoFormStyle}
        className='container '
        onSubmit={addSingleTodo}
      >
        <input
          type='text'
          placeholder='Thêm công việc..'
          value={title}
          onChange={changeTitle}
        />
        <input
          style={addTodoInputStyle}
          type='submit'
          value='Thêm'
          className='btn btn-primary'
        />
      </form>
    )
}
AddTodo.propTypes = {
  addTodoFunc: PropsTypes.func.isRequired
}
export default AddTodo
