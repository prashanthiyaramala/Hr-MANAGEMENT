import React, {useState} from 'react';
import ReactDom from 'react-dom';
import "./cancelModal.css";
import CrossModal1 from "./images/crossModal1.jpg";
import CancelModal2 from './CancelModal2';

export default function CancelModal({ open, children, onClose }) {
  const [isOpen2, setIsOpen2] = useState(false);
    if (!open) return null;

  return ReactDom.createPortal (
    <>
      <div className="modalOverlay1"></div>
      <div className="cancelOuter">
          <div>
            <img src={CrossModal1} onClick={onClose} alt="error" className="crossImg1" />
          </div>
          <div className="childModal1">
            {children}
          </div>
          <div className="modalOpt1Outer">
            <div onClick={() => {setIsOpen2(true)}} className="yesModal1">
              Yes
            </div>
            <CancelModal2 open2={isOpen2}>
              Meeting link Canceled successfully
            </CancelModal2>
            <div onClick={onClose} className="noModal1">
              No
            </div>
          </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
