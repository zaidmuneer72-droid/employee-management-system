import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

// Define interfaces to fix "implicitly has an any type" errors
interface Task {
  id: number;
  taskTitle: string;
  taskDate: string;
  category: string;
  taskDescription: string;
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
}

interface AcceptTaskProps {
  data: Task;
  employeeId: number;
  taskIndex: number;
}

interface Employee {
  id: number;
  firstName: string;
  tasks: Task[];
  taskCounts: {
    active: number;
    completed: number;
    failed: number;
    newTask: number;
  };
}

const getTaskCounts = (tasks: Task[]) => {
  return tasks.reduce(
    (acc, task) => {
      if (task.active) {
        acc.active += 1;
      } else if (task.newTask) {
        acc.newTask += 1;
      } else if (task.completed) {
        acc.completed += 1;
      } else if (task.failed) {
        acc.failed += 1;
      }
      return acc;
    },
    { active: 0, newTask: 0, completed: 0, failed: 0 }
  );
};

const AcceptTask = ({ data, employeeId, taskIndex }: AcceptTaskProps) => {
  const [userData, setuserData] = useContext(AuthContext)

  const updateTaskStatus = (status: 'completed' | 'failed') => {
    if (!userData) return

    // Create a deep-ish copy to avoid direct mutation mishaps
    const updatedData = userData.map((employee: Employee) => {
      if (employee.id !== employeeId) return employee

        const updatedTasks = employee.tasks.map((task, idx) => {
          if (idx !== taskIndex) return task;

          return {
            ...task,
            id: task.id ?? Date.now() + Math.random(),
            newTask: false,
            active: false,
            completed: status === 'completed',
            failed: status === 'failed'
          };
        });

        const updatedEmployee = {
          ...employee,
          tasks: updatedTasks,
          taskCounts: getTaskCounts(updatedTasks)
        };

        return updatedEmployee;
    })

    setuserData(updatedData)
    localStorage.setItem('Employees', JSON.stringify(updatedData))
  }

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button 
          onClick={() => updateTaskStatus('completed')} 
          className='bg-green-500 py-1 px-2 text-sm rounded'
        >
          Mark as Complete
        </button>
        <button 
          onClick={() => updateTaskStatus('failed')} 
          className='bg-red-500 py-1 px-2 text-sm rounded'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask