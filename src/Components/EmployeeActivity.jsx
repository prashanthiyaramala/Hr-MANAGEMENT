import React, { useState } from "react";
import "../Styles/employeeActivity.css";
import Chart from "./Chart";
import Chance from "chance";

const generatefakedata = () => {
  const chance = new Chance(Math.random());
  const employeedata = [];

  for (let i = 0; i < 10; i++) {
    const employee = {
      name: chance.name(),
      averageTime: chance.integer({ min: 20, max: 40 }),
      email: chance.email(),
      ssn: chance.ssn({ ssnFour: true }),
      Position: chance.pickone(["Intern", "Manager", "Mentor", "Admin"]),
    };
    employeedata[i] = employee;
  }

  return employeedata;
};
const EmployeeActivity = () => {
  const [userdata, setUserdata] = useState(generatefakedata());
  // fetch
  // console.log(userdata);
  return (
    <section className="employee_activity_section">
      <h1 className="employee_activity_heading">Most Performing Employees</h1>
      <section className="employee_activity_info">
        <aside className="employee_activity_chart">
          <Chart data={userdata} />
        </aside>
        <h1 className="employee_activity_list_heading">Employee List</h1>
        <aside className="employee_activity_list">
          <section className="employee_activity_list_item">
            <span>SSN</span>
            <span>Name</span>
            <span>Email</span>
            <span>Position</span>
            <span>Average Time</span>
          </section>
          {userdata.map((user, idx) => (
            <section key={idx} className="employee_activity_list_item">
              <span>{user.ssn}</span>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.Position}</span>
              <span>{user.averageTime}</span>
            </section>
          ))}
        </aside>
      </section>
    </section>
  );
};

export default EmployeeActivity;
