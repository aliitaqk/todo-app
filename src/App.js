import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import ArchivedTasks from './components/ArchivedTasks';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import About from './components/About';

function App() {

  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


const fetchTasks = async () => {
  const res = await axios.get('http://localhost:5000/tasks')
  const data = await res.data
  return data
}

const fetchTask = async (id) => {
  const res = await axios.get(`http://localhost:5000/tasks/${id}`)
  const data = await res.data
  return data
}

function toggleForm() {
  setShowForm(!showForm)
}

const addTask = async (task) => {
  await axios.post("http://localhost:5000/tasks", JSON.stringify(task), {
    headers: {'Content-Type': 'application/json'}
  }).then(response => {
    console.log(response.data);
    setTasks([...tasks, response.data])
  })
}

const doneTask = async (id) => {
  const taskDone = await fetchTask(id)
  const updatedTask = { ...taskDone, done: !taskDone.done }

  axios.put(`http://localhost:5000/tasks/${id}`, JSON.stringify(updatedTask), {
    headers: {'Content-Type': 'application/json'}
  }).then(response => {
    setTasks(tasks.map(
      task => task.id === id ? {...task, done: response.data.done} : task
    ))
  })
}

const deleteTask = async (id) => {
  if (window.confirm('Are you sure you want to delete this todo item ?')) {
    axios.delete(`http://localhost:5000/tasks/${id}`)
    setTasks(tasks.filter(task => task.id !== id))
  }
}

const archiveTask = async (id) => {
  const taskArchived = await fetchTask(id)
  const updatedTask = { ...taskArchived, archived: !taskArchived.archived }

  axios.put(`http://localhost:5000/tasks/${id}`, JSON.stringify(updatedTask), {
    headers: {'Content-Type': 'application/json'}
  }).then(response => {
    setTasks(tasks.map(
      task => task.id === response.data.id ? {...task, archived: response.data.archived } : task ))
  })
}

return (
  <BrowserRouter>
    <div className="App">
      <Header toggleForm={ toggleForm } showAddForm={showForm} />
      <Route path="/" exact render = {(props) => (
        <>
          { showForm && <AddTask onAdd={addTask} />}
          <Tasks tasks={ tasks } onDone={ doneTask } onArchive={ archiveTask } />
        </>
      )} />
      <Route path="/archived" render = {(props) => (
        <>
          <ArchivedTasks tasks={ tasks } onDelete={ deleteTask } onArchive={ archiveTask } />
        </>
      )} />
      <Route path="/about" component = { About } />
      <Footer />
    </div>
  </BrowserRouter>
);
}

export default App;
