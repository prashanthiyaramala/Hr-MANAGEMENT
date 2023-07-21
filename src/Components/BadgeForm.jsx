import React, { useState } from "react";
import Filter from "./Filter"
import "../Styles/BadgeForm.css"

const createbadge = {
  badgeName: "",
  badgeId: "",
  badgeDetails: "",
  employeeUsername: "",
  employeeEmail: "",
};

const Submitscreen = ({setopen}) => {
  return (
    <div className="success__container">
      <div className="success__screen">
        <img
          src="/applysuccess.png"
          alt="applied successfully"
          className="success__image"
        />
        <p className="success__message">Badge assign successfully</p>
        <button onClick={()=>{setopen(false)}}>OK</button>
      </div>
    </div>
  );
};

const BadgeForm = () => {
  const [badgedata, setBadgedata] = useState(createbadge);
  const [open, setopen] = useState(false);

  const handlechange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setBadgedata((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBadgedata(createbadge);

    if(open===false){
      setopen(true);
    }
    // Code to submit the form data to the server
  };

  // console.log(badgedata);

  return (
    <div className="badge__form__container">
      <h2>Create a Badge</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__fields">
          <label htmlFor="badgeName">Badge Name:</label>
          <input
            autoComplete="off"
            type="text"
            id="badgeName"
            value={badgedata.badgeName}
            onChange={handlechange}
            required
          />
        </div>

        <div className="form__fields">
          <label htmlFor="badgeId">Badge ID:</label>
          <input
            autoComplete="off"
            type="text"
            id="badgeId"
            value={badgedata.badgeId}
            onChange={handlechange}
            required
          />
        </div>

        <div className="form__fields">
          <label htmlFor="badgeDetails">Badge Details:</label>
          <select onChange={handlechange} id="badgeDetails">
            <option value="Select" hidden>
              Select
            </option>
            <option value="ongoing">Ongoing</option>
            <option value="earned">Earned</option>
          </select>
        </div>

        <Filter badgedata = {badgedata} setBadgedata = {setBadgedata}/>
        <button type="submit">Create Badge</button>
      </form>

      {open && <Submitscreen setopen={setopen} />}
    </div>
  );
};

export default BadgeForm;
