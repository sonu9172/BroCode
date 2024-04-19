// App.js
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import "./Contact.css";
import Table3 from "./Itemview";
import Inventory from "./Order.jsx";
import AboutUs from "./About.jsx";
import "./About.css";
import Project from "./Project.jsx";
import LoginV from "./LoginVisual.jsx";
import UserProfile from "./UserProfile.jsx"; // Import the UserProfile component

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [username, setUsername] = useState(""); // State to store the username

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/view" element={<Table3 />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/item/update" element={<Inventory />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/LoginV" element={<LoginV onLogin={handleLogin} />} />
        <Route
          path="/profile"
          element={<UserProfile username={username} loggedIn={loggedIn} />}
        />
      </Routes>
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default App;
