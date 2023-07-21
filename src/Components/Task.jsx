import React, { useState } from "react"
import "../Styles/MyTask.css"
import tasks from "../data/My task.json"
import TaskCard from "./TaskCard"

const Task = ({ taskType }) => {
  const [pageCount, setPageCount] = useState(1)
  const pageSize = 3
  const filterArray = tasks.filter((task) => task.type === taskType)
  const taskSlicedArray = filterArray.slice(0, pageSize * pageCount)

  const handleViewMore = () => {
    setPageCount(pageCount + 1)
  }

  return (
    <>
      <div className='my-task-frame'>
        {taskSlicedArray.map((task, i) => (
          <TaskCard task={task} key={i} />
        ))}
      </div>
      <div className='my-task-frame-4'>
        {taskSlicedArray.length !== filterArray.length && (
          <button className='Frame1000003785' onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
    </>
  )
}

export default Task
