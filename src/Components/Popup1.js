import React, { useState } from "react";
import "../Styles/Popup1.css";
function Popup1(){
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`popup001 ${isVisible ? "" : "hidden"}`}>
      <b className="header02">Check Out</b><br></br><br></br>
      <div className="popup-content02">
        
        <b className="tidt02">Time & Date</b><br></br>
       <input type="text02" placeholder="Enter date and time of check out" className="in1"/>
       <br></br>
       <b className="tidt03">Work or Task</b><br></br>
       <input type="textarea02" placeholder="Enter work or task" class="in2"/>
       <div className="popup-footer001">
        <button className="popup-button001" onClick={handleButtonClick}>
          Submit
        </button>
      </div>
      </div>
    </div>
  );
}
export default Popup1;