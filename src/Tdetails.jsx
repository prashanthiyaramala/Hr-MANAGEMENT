import React from "react";
import Homebar from "./groups/Homebar";
import Invitegroup from "./groups/Invitegroup";
import TaskDate from "./groups/TaskDate";
import Deadline from "./groups/Deadline";
import TaskTopic from "./groups/TaskTopic";
import TaskTopic2 from "./groups/TaskTopic2";
import ReleatedDocument from "./groups/ReleatedDocument";
import "./Styles/Taskdetails.css"
import Department from "./groups/Department";


function Tdetails() {
  return (
    <>
    <div className="A">
      <Homebar/>
      <div className="mc">
        <TaskTopic />
        <TaskTopic2 />
        <TaskDate />
        <Deadline />
        <Department/>
        <Invitegroup />
        <ReleatedDocument />
      </div>
    </div>
    </>
  );
}

export default Tdetails;
