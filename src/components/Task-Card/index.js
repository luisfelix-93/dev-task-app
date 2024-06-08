import React from 'react'
import './index.css'

function TaskCard({taskCode, status, dtFinish}) {
  return (
    <div className='task-card'>
        <div className='header'>
            <label htmlFor="">{taskCode}</label>
        </div>
        <div className='body'>
            <h4>Status: {status}</h4>
            <h5>Entrega Prev.: {dtFinish}</h5>
        </div>
    </div>
  )
}

export default TaskCard