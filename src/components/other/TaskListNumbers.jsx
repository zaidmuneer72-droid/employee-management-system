import React from 'react'

const TaskListNumbers = ({ data }) => {
    const counts = (data?.tasks || []).reduce(
        (acc, task) => {
            // Keep precedence aligned with TaskList rendering logic.
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
        { newTask: 0, completed: 0, active: 0, failed: 0 }
    )

    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-xl w-[25%] py-6 px-9 bg-blue-400'>
                <h2 className='text-3xl font-bold'>{counts.newTask}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[25%] py-6 px-9 bg-emerald-500'>
                <h2 className='text-3xl font-bold'>{counts.completed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
            </div>

            <div className='rounded-xl w-[25%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl font-bold text-white'>{counts.active}</h2>
                <h3 className='text-xl mt-0.5 font-medium text-white'>Accepted Task</h3>
            </div>

            <div className='rounded-xl w-[25%] py-6 px-9 bg-red-400'>
                <h2 className='text-3xl font-bold'>{counts.failed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers