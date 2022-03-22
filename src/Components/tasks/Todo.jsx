import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from './tasksSlice'

function TodoList() {
  const todos = useSelector(state => state.tasks)

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          id={todo.id}
          title={todo.name}
          completed={todo.status}
          key={todo.id}
        />
      ))}
    </ul>
  )
}
function TodoItem({ id, title }) {
  const dispatch = useDispatch()

  const removeTask = () => {
    dispatch(
      deleteTask({
        id,
      })
    )
  }

  return (
    <li>
      <div>{title}</div>
      <div>
        <button
          onClick={() => {
            removeTask()
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoList
