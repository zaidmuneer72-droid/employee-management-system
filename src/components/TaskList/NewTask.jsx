import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const getTaskCounts = (tasks = []) => {
  return tasks.reduce(
    (acc, task) => {
      if (task.active) {
        acc.active += 1
      } else if (task.newTask) {
        acc.newTask += 1
      } else if (task.completed) {
        acc.completed += 1
      } else if (task.failed) {
        acc.failed += 1
      }
      return acc
    },
    { active: 0, newTask: 0, completed: 0, failed: 0 }
  )
}

const NewTask = ({ data, employeeId, taskIndex }) => {
  const [userData, setuserData] = useContext(AuthContext)

  const handleAcceptTask = () => {
    if (!userData) return

    const updatedData = userData.map(employee => {
      if (employee.id !== employeeId) return employee

      const updatedTasks = employee.tasks.map((task, idx) => {
          if (idx !== taskIndex) return task

          return {
            ...task,
            id: task.id ?? Date.now() + Math.random(),
            newTask: false,
            active: true,
            completed: false,
            failed: false
          }
        })

      return {
        ...employee,
        tasks: updatedTasks,
        taskCounts: getTaskCounts(updatedTasks)
      }
    })

    setuserData(updatedData)
    localStorage.setItem('Employees', JSON.stringify(updatedData))
  }

  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> {data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
          <p className='text-sm mt-2'>{data.taskDescription}
            
          </p>
          <div className=' mt-4'>
          <button onClick={handleAcceptTask} className='w-full bg-green-500 py-1 px-2'>Accept Task</button>
          </div>
        </div>
  )
}

export default NewTask