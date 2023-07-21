import React,{useState} from 'react'
import UploadFile from "../Components/UploadFile"

const Homebar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='homebarcontainer'>
      {openModal && <UploadFile closeModal={setOpenModal} />}
      <div className='leftgroup'>
        <button><img src="/assets/backarrow.svg" alt="back Home page"/></button>
        <p>Perform UX Research on Edfling Home page</p>
      </div>

      <div className='rightgroup'>
        <button>Completed</button>
        <button onClick={() => setOpenModal(!openModal)}>
          <img src="/assets/upload.svg" alt=""/>
          <p>Upload</p>
        </button>
      </div>
    </div>
  )
}

export default Homebar