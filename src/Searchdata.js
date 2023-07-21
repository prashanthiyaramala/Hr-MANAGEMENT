import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Searchdata.css';
import './Components/footer'
import Footer from './Components/footer';
const Searchdata = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const data = [
    { sn: 1, date: '12-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 2, date: '13-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 3, date: '16-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 4, date: '17-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 5, date: '14-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 6, date: '24-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 7, date: '20-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' },
    { sn: 8, date: '19-05-2023', status: 'P', starttime: '9:30:00', endtime: '4:30:23', overtime: '6min', work: 'Make a landing page and submit previous task' }
  ];

  const handleSearch = () => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(
        item.date.split('-').reverse().join('-')
      ); // Convert date string to JavaScript Date object

      return itemDate.getTime() >= startDate.getTime() && itemDate.getTime() <= endDate.getTime();
    });

    setFilteredData(filtered);
    setIsSearchClicked(true);
  };

  const handleExport = () => {
    alert('Export functionality will be implemented here.');
  };

  return (
    <div>
     <div class="conta">
  <div class="rowing">
    <span class="labeling">Start Date:</span>
    <div class="form-grouping">
      <DatePicker class="inputing"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd-MM-yyyy"
      />
    </div>
    <span class="labeling">End Date:</span>
    <div class="form-grouping">
      <DatePicker class="inputing"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="dd-MM-yyyy"
      />
    </div>
    <div class="form-grouping">
      <button id="searing" onClick={handleSearch} class="btn btn-primary09">
        Search
      </button>
    </div>
    <div class="form-group">
      <button id="exping" onClick={handleExport} class="btn btn-primary09">
        Export
      </button>
    </div>
  </div>
  <Footer/>
</div>


      {isSearchClicked && (
        <table className="table09">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Date</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Overtime</th>
              <th>Work</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.sn}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.starttime}</td>
                <td>{item.endtime}</td>
                <td>{item.overtime}</td>
                <td>{item.work}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      )}
      
    </div>
  );
};

export default Searchdata;