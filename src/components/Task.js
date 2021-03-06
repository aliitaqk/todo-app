import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { RiArchiveDrawerFill } from 'react-icons/ri';
import './style/Task.css'

function Task(props) {
    return (
        <div className={`task ${props.task.done ? "done": ""}`}>
            <h3>
                { props.task.text }
                { !props.task.done ? 
                    <MdDone style={{ color:"green", cursor: "pointer"  }} onClick={ () => props.onDone(props.task.id) } /> :
                    props.task.archived ?
                    <FaTimes style={{ color:"red", cursor: "pointer"  }} onClick={ () => props.onDone(props.task.id) } /> :
                    <FaTimes style={{ cursor: "pointer"  }} onClick={ () => props.onDone(props.task.id) } />
                }
            </h3>
            <p>
                { props.task.day }
                <RiArchiveDrawerFill
                    className={`archive ${props.task.done ? "done" : ""}`}
                    onClick={ props.task.done ? () => props.onArchive(props.task.id) : undefined}
                />
            </p>
        </div>
    )
}

export default Task
