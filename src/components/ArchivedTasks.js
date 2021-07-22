import React from 'react'
import Task from './Task'

function ArchivedTasks(props) {

    return (
      <div>
        { props.tasks.filter(task => task.archived).map( task => (
          <Task key={ task.id } task={ task } onDone={ props.onDelete } onArchive={ task.done ? props.onArchive : undefined } />
        )) }
      </div>
    )
}

export default ArchivedTasks
