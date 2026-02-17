
import React, { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const addTask = () => {
    if (task.trim() === '') return
    if (editIndex !== null) {
      const updated = [...tasks]
      updated[editIndex] = task
      setTasks(updated)
      setEditIndex(null)
    } else {
      setTasks([...tasks, task])
    }
    setTask('')
  }

  const editTask = (index) => {
    setTask(tasks[index])
    setEditIndex(index)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="input-area">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            <span>{t}</span>
            <div className="actions">
              <button onClick={() => editTask(i)}>Update</button>
              <button onClick={() => deleteTask(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
