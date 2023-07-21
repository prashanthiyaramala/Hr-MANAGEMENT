import React, { useState } from "react"
import "./Courses.css"
import ebooks from "../Ebooks"
import EbookCard from "./EbookCard"

const EbooksCard = ({ serchString = "" }) => {
  const ebookType = [ 
    "Music Courses Ebooks",
    "Graphic Design Courses Ebooks", 
    "UI/UX Design Courses Ebooks",
    "Marketing Courses Ebooks",
    "Development Courses Ebooks",
    "Personal Development Courses Ebooks",
    "Buisness Courses Ebooks",
  ] 
  const [noOfElement, setnoOfElement]=useState(4);
  const loadMore=()=>{
    setnoOfElement(noOfElement+noOfElement);
  }
  const slice=ebooks.slice(0,noOfElement);


  return (  
    <div>
      {ebookType.map((type, i) => (
        <section key={i}>
          <div className='yy-1'>
            <h1 className='yy-2'>{type}</h1>
            <div className='yy-3'>
              {slice
                .filter(
                  (ebook) => {
                   return ebook.type.toLowerCase() === '' ? type : ebook.title.toLowerCase().includes(serchString);
              })
                .map((ebook, i) => (
                  <EbookCard ebook={ebook} key={i} />
                ))}
            </div>
          </div>
          <button className='yy-4' onClick={()=>loadMore()}>View More Courses</button>
        </section>
      ))}
    </div>
  )
}

export default EbooksCard
