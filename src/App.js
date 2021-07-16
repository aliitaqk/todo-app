import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';

function App() {

  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Meeting",
        day: "July, 16th Friday, 11:00am",
        done: false,
        archived: false,
    },
    {
        id: 2,
        text: "Push my application",
        day: "July, 16th Friday, 2:30pm",
        done: false,
        archived: false,
    },
    {
        id: 3,
        text: "Do my sport",
        day: "July, 16th Friday, 4:30pm",
        done: false,
        archived: false,
    },
    {
        id: 4,
        text: "Prepare the dinner",
        day: "July, 16th Friday, 7:00pm",
        done: false,
        archived: false,
    },

])

function toggleForm() {
  setShowForm(!showForm)
}

function addTask(task) {
  const id = Math.floor(Math.random() * 100) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

function doneTask(id) {
  setTasks(tasks.map(
    task => task.id === id ? {...task, done: !task.done} : task
  ))
}

function archiveTask(id) {
  setTasks(tasks.filter(
    task => task.id !== id
  ))
}

return (
  <div className="App">
    <Header toggleForm={ toggleForm } showAddForm={showForm} />
    { showForm && <AddTask onAdd={addTask} />}
    <Tasks tasks={ tasks } onDone={ doneTask } onArchive={ archiveTask } />
  </div>
);
}

export default App;
