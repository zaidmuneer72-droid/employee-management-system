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

const CompleteTask = ({ data, employeeId, taskIndex }) => {
  const [userData, setuserData] = useContext(AuthContext)

  const handleDeleteTask = () => {
    if (!userData) return

    const updatedData = userData.map(employee => {
      if (employee.id !== employeeId) return employee

      const updatedTasks = employee.tasks.filter((_, idx) => idx !== taskIndex)
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
    <div className='flex-shrink-0 min-h-[260px] w-[85vw] sm:w-[320px] p-4 sm:p-5 bg-red-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-xs sm:text-sm'> {data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mt-4 sm:mt-5'>{data.taskTitle}</h2>
          <p className='text-sm mt-2'>{data.taskDescription}
            
          </p>
          <div className=' mt-4'>
          <button onClick={handleDeleteTask} className='w-full bg-green-500 py-1 px-2'>Complete</button>
          </div>
        </div>
  )
}

export default CompleteTask