import React,{useState} from "react"
import MyModal from "./Modal"

const EbookCard = ({ ebook }) => {
  const [showModal,setShowModal] = useState(false);

  const closeModal=()=>setShowModal(false);
 
  return ( 
    <div className='yy-9'>
      <div> 
        <div>
          <img className='yy-10' src={ebook.image} alt='image1' />
        </div> 
        <div>
          <h3 className='yy-11'>{ebook.title}</h3>
          <p className='yy-12'>{ebook.description}</p>
          <div className='skillzzz'>
            <span style={{ fontWeight: "700", fontSize: "11px" }}>
              Skill you learn :
            </span>
            <span style={{ marginLeft: "1px", fontSize: "12.5px" }}>
              Python, Machine learning, Data analytics
            </span>
          </div>
          <div className='bttt'>
            <button className='btn-111'>Machine Learning</button>
            <button className='btn-222'>Python</button>
            <button className='btn-333'>Data Science</button>
          </div>
          <button onClick={()=>setShowModal(true)} className='btnnn'>Enroll now</button>
          {showModal && <MyModal closeModal={closeModal}/>}
        </div>
      </div>
    </div>
  )
}

export default EbookCard
