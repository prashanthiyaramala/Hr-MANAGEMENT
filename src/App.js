import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/login";
import FormPage from "./Components/FormPage";
import Reset from "./Components/Reset";
import Forget from "./Components/Forget";
import Meetdetails from "./Components/Meetdetails";
import Mymeetings from "./Components/Mymeetings";
import Profile from "./Components/Profile";
import MeetingInfo from "./Components/MeetingInfo";
import PolicyMaster from "./Components/PolicyMaster";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Dashboard from "./Components/Dashboard";
import MyTask from "./Components/MyTask";
import Tdetails from "./Tdetails";
import Badgepage from "./pages/Badgepage";
import Searchdata from "./Searchdata";
import BadgeTypes from "./Components/BadgeTypes";
import Ap from "./Ap";
import Popup1 from "./Components/Popup1";
import Popup from "./Components/Popup";
import AdminPage from "./Components/AdminPage";
import Cal from "./Cal";
import Learn from "./Learn";
import NotificationPage from "./NotificationPage";
import Dahead from "./Components/Dahead";
import Footer from "./Components/footer";
import EmployeeActivity from "./Components/EmployeeActivity";
import Usermanagement from './Components/Usermanagement';

const App = () => {
  const location = useLocation();
  const shouldHideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/reset" ||
    location.pathname === "/forget";

  const shouldHideFooter =
    location.pathname === "/profile" || location.pathname === "/learning";

  return (
    <div
      className="rootlayout"
      style={{
        // conditional padding based on shouldHideHeaderFooter
        paddingTop: shouldHideHeaderFooter ? 0 : "6.7rem",
        paddingBottom: shouldHideHeaderFooter ? 0 : "6.2rem",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<FormPage />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/mymeeting" element={<Mymeetings />} />
        <Route path="/details" element={<Meetdetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<MeetingInfo />} />
        <Route path="/policy" element={<PolicyMaster />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaveapply" element={<Apply />} />
        <Route path="/taskdetails" element={<Tdetails />} />
        <Route path="/task" element={<MyTask />} />
        <Route path="/check" element={<Searchdata />} />
        <Route path="/Popup1" element={<Popup1 />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/learning" element={<Learn />} />
        <Route path="/" element={<Dashboard />} />

        <Route path="/badges" element={<Badgepage />}>
          <Route path="/badges" element={<BadgeTypes />} />
          <Route path="/badges/:badgetype" element={<BadgeTypes />} />
        </Route>
        <Route path="/notify" element={<NotificationPage />} />
        <Route path="/assignform" element={<Ap />} />
        <Route path="/calendar" element={<Cal />} />
        <Route path="/user" element={<Usermanagement  />} />
        <Route path="/ActiveEmployees" element={<EmployeeActivity />} />
      </Routes>
      {!shouldHideHeaderFooter && <Dahead />}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
