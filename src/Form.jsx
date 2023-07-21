import React from "react";
import { useState, useEffect } from "react";

const initialValues = {
  meetingWith: "",
  department: "", 
  agenda: "",
  meetingDate: "",
  startTime: "",
  endTime: "",
  meetLink: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSave, setIsSave] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    let error = validate(formValues);
    setFormErrors(error);
    console.log(error);
    if (!JSON.stringify(error)) setIsSave(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSave) {
      console.log(formValues);
    }
  }, [formErrors]);

  function isValidMeetingLink(link) {
    // Regular expression pattern to match common meeting link formats
    const linkPattern =
      /^(https?:\/\/)?(www\.)?(zoom|teams|meet)\.(us|google\.com)\/[a-z0-9-]+(\/[a-z0-9-]+)*\/?$/i;

    // Check if the link matches the pattern
    return linkPattern.test(link);
  }

  const validate = (values) => {
    const errors = {};

    if (!values.meetingWith) {
      errors.meetingWith = "Field is required!";
    }
    if (!values.department) {
      errors.department = "Field is required!";
    }
    if (!values.agenda) {
      errors.agenda = "Field is required!";
    }
    if (!values.meetingDate) {
      errors.meetingDate = "Field is required!";
    }
    if (!values.startTime) {
      errors.startTime = "Field is required!";
    }
    if (!values.endTime) {
      errors.endTime = "Field is required!";
    }
    if (!values.meetLink) {
      errors.meetLink = "Field is required!";
    } else if (!isValidMeetingLink(values.meetLink)) {
      errors.meetLink = "Not a Valid Link!";
    }
    return errors;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-meeting-form"
        style={{
          display: "flex",
          padding: "1rem",
          flexDirection: "column",
        }}
      >
        <h2 className="meeting-information">Meeting Information</h2>
        <div className="form-items">
          <h4>Meeting With</h4>
          <div style={{ width: "100%" }}>
            <input
              className="text-box-wi input"
              type="text"
              name="meetingWith"
              placeholder="Enter Meeting Person"
              value={formValues.meetingWith}
              onChange={handleChange}
            ></input>
            <div className="errorset">{formErrors.meetingWith}</div>
          </div>
        </div>

  <div className="form-items">
  <h4>Department</h4>
  <div style={{ width: "100%" }}>
    <input
      className="text-box-wi input"
      type="text"
      name="department"
      placeholder="Enter Department"
      value={formValues.department}
      onChange={handleChange}
    ></input>
    <div className="errorset">{formErrors.department}</div>
  </div>
</div>

  

        <div className="form-items agenda">
          <h4>Agenda</h4>
          <div style={{ width: "100%", marginRight: "1rem" }}>
            <input
              className="text-box-wi input"
              type="text"
              name="agenda"
              placeholder="Enter Agenda"
              value={formValues.agenda}
              onChange={handleChange}
            ></input>
            <div className="errorset">{formErrors.agenda}</div>
          </div>
        </div>



        <div className="form-items meet-link">
          <h4>Meeting Date</h4>
          <div style={{ width: "100%"}}>
            <input
              className="text-box-wi input"
              type="date"
              name="meetingDate"
              placeholder="Enter Meeting Date"
              value={formValues.meetingDate}
              onChange={handleChange}
            ></input>
            <div className="errorset">{formErrors.meetingDate}</div>
          </div>
        </div>

        <div className="form-items meet-time">
          <h4>Meeting Time</h4>
          <div
            className="start-end"
            style={{ width: "100%"}}
          >
            <input
              className="text-box-wi input"
              type="time"
              name="startTime"
              placeholder="Start Time"
              value={formValues.startTime}
              onChange={handleChange}
              // style={{ width: "100%" }}
            ></input>
            <div className="errorset">{formErrors.startTime}</div>
            <h4>To</h4>
            <input
              className="text-box-wi input"
              type="time"
              name="endTime"
              placeholder="End Time"
              value={formValues.endTime}
              onChange={handleChange}
            ></input>
            <div className="errorset">{formErrors.endTime}</div>
          </div>
        </div>
        <div className="form-items meet-link">
          <h4>Meet Link</h4>
          <div style={{ width: "100%"}}>
            <input
              className="text-box-wi input"
              type="link"
              name="meetLink"
              placeholder="Enter Meet link"
              value={formValues.meetLink}
              onChange={handleChange}
            ></input>
            <div className="errorset">{formErrors.meetLink}</div>
          </div>
        </div>
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
