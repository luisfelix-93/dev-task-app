import React from 'react'
import Layout from '../../components/Layout'
import MenuInicial from '../../components/Menu'
import Tasks from '../../components/Tasks'

function Inicio() {
  const tasks = [
    {
      status : 'Backlog',
      backgroundColor: '#d9f7e9',
      labelColor: '#57c278'
    },
    {
      status : 'Review',
      backgroundColor: '#fde7e8',
      labelColor: '#e06b69'
    },
    {
      status : 'On Deployment',
      backgroundColor: '#e8f8ff',
      labelColor: '#82cffa'
    },
  ]
  return (
    <div>
        <Layout/>
        <MenuInicial/>
        {tasks.map(task => <Tasks
        key={task.status}
        status={task.status}
        backgroundColor={task.backgroundColor}
        labelColor={task.labelColor}
        />)}
    </div>
  )
}

export default Inicio