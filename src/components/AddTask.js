import React from 'react'
import { useState } from 'react'
import './AddTask.css'

function AddTask(props) {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [done, setDone] = useState(false)
    const [archived] = useState(false)

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert("Please type a task text")
        }

        props.onAdd({ text, day, done, archived })

        setText("")
        setDay("")
        setDone(false)
    }

    return (
        <form className="add-form" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={ text } onChange={ e => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={ day } onChange={ e => setDay(e.target.value) } />
            </div>
            <div className="form-control form-control-check" >
                <label>Done :</label>
                <input checked={done} type="checkbox" value={ done } onChange={ e => setDone(e.currentTarget.checked) } />
            </div>

            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
