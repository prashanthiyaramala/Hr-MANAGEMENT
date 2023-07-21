import React, { useState } from 'react';
import '../Styles/AdminPage.css';
import Footer from './footer';



const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const employeeNames = ['Tejes', 'Employee 2', 'Employee 3'];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform input validations
    if (!validateTitle() || !validateDescription() || !validateDueDate() || !validateAssignedTo()) {
      // If any validation fails, return without submitting the form
      return;
    }

    // Create a new task object
    const newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      assignedTo: assignedTo,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);

    // Reset form inputs
    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignedTo('');

    // Show success message
    setShowSuccessMessage(true);

    // Reset success message after 2 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  const validateTitle = () => {
    if (!title) {
      alert('Please enter a title');
      return false;
    }
    return true;
  };

  const validateDescription = () => {
    if (!description) {
      alert('Please enter a description');
      return false;
    }
    return true;
  };

  const validateDueDate = () => {
    if (!dueDate) {
      alert('Please select a due date');
      return false;
    }
    return true;
  };

  const validateAssignedTo = () => {
    if (!assignedTo) {
      alert('Please select an employee');
      return false;
    }
    return true;
  };

  return (
    <div className="page009">
      <div className="admin-page009">
        <h1 className="dash009"> Admin Page</h1>

        <div className="button-container009">
          <button
            className={!showForm ? 'active009' : ''}
            onClick={() => setShowForm(false)}
          >
            Assigned Tasks
          </button>

          <button
            className={showForm ? 'active009' : ''}
            onClick={() => setShowForm(true)}
          >
            Assign Task
          </button>
        </div>

        {showForm ? (
          <form className="form009" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input className="input009"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea className="text009"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label>Due Date:</label>
            <input
              className="date009"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <label>Assign To:</label>
            <select className="select009"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Select Employee</option>
              {employeeNames.map((employee, index) => (
                <option key={index} value={employee}>
                  {employee}
                </option>
              ))}
            </select>

            <button className="submit009" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <table className="table009">
            <thead>
              <tr>
                <th>Title</th>
                <th>Assigned To</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.title}</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showSuccessMessage && (
          <div className="popup009">
            <div className="popup-content009">
              <p>Task assigned successfully</p>
              <button
                className="submit009"
                onClick={() => setShowSuccessMessage(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
      <Footer/>
    </div>
  );
};

export default AdminPage;

