import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap mt-10'>
      {data?.tasks?.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={task.id ?? `${task.taskTitle}-${task.taskDate}-${idx}`} data={task} employeeId={data.id} taskIndex={idx} />
        }
        if (task.newTask) {
          return <NewTask key={task.id ?? `${task.taskTitle}-${task.taskDate}-${idx}`} data={task} employeeId={data.id} taskIndex={idx} />
        }
        if (task.completed) {
          return <CompleteTask key={task.id ?? `${task.taskTitle}-${task.taskDate}-${idx}`} data={task} employeeId={data.id} taskIndex={idx} />
        }
        if (task.failed) {
          return <FailedTask key={task.id ?? `${task.taskTitle}-${task.taskDate}-${idx}`} data={task} employeeId={data.id} taskIndex={idx} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList