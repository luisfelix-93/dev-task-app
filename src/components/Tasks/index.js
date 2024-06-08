import React from 'react'
import './index.css'
import TaskCard from '../Task-Card'
function Tasks(props) {
    const backgroundColor = {backgroundColor: props.backgroundColor}
    const labelColor = {labelColor : props.labelColor}
  return (
    <section className='tasks-todo' style={backgroundColor}>
        <h3 style={labelColor}>{props.status}</h3>
        <div className='task-card'>
          <TaskCard
          taskCode={'TEST-00001'}
          status={'Backlog'}
          dtFinish='01/01/2001'
          />
        </div>
    </section>
  )
}

export default Tasks