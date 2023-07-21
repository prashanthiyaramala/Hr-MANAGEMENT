import React, {useState} from "react"
import "./Courses.css"
import courses from "../Courses"
import CourseCard from "./CourseCard"

const CoursesCard = ({ serchString = "" }) => {
  const courseType = [
    "Music Courses", 
    "Graphic Design Courses", 
    "UI/UX Design Courses", 
    "Marketing Courses",
    "Development Courses",
    "Personal Development Courses",
    "Buisness Courses",
  ]
  const [noOfElement, setnoOfElement]=useState(4);
  const loadMore=()=>{
    setnoOfElement(noOfElement+noOfElement);
  }
  const slice=courses.slice(0,noOfElement);

  return ( 
    <div>
      {courseType.map((type, i) => (
        <section className="courses__section" key={i}>
          <div className='yy-1'>
            <h1 className='yy-2'>{type}</h1>
            <div className='yy-3'>
              {slice
                .filter(
                  (course) => {
                   return course.type.toLowerCase() === '' ? type : course.title.toLowerCase().includes(serchString);
              })
                .map((course, i) => (
                  <CourseCard course={course} key={i} />
                ))}
            </div>
          </div>
          <button className='yy-4' onClick={()=>loadMore()}>View More Courses</button>
        </section>
      ))}
    </div>
  )
}

export default CoursesCard
