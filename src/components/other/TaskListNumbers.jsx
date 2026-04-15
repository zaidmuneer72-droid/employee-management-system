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
        <div className='mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5'>
            <div className='rounded-xl py-5 sm:py-6 px-6 sm:px-9 bg-blue-400'>
                <h2 className='text-2xl sm:text-3xl font-bold'>{counts.newTask}</h2>
                <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl py-5 sm:py-6 px-6 sm:px-9 bg-emerald-500'>
                <h2 className='text-2xl sm:text-3xl font-bold'>{counts.completed}</h2>
                <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>Completed Task</h3>
            </div>

            <div className='rounded-xl py-5 sm:py-6 px-6 sm:px-9 bg-yellow-400'>
                <h2 className='text-2xl sm:text-3xl font-bold text-white'>{counts.active}</h2>
                <h3 className='text-lg sm:text-xl mt-0.5 font-medium text-white'>Accepted Task</h3>
            </div>

            <div className='rounded-xl py-5 sm:py-6 px-6 sm:px-9 bg-red-400'>
                <h2 className='text-2xl sm:text-3xl font-bold'>{counts.failed}</h2>
                <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers