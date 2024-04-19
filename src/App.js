import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter, Route, Routes,withRouter } from "react-router-dom";
import Contact from "./Contact";
import "./Contact.css";
import Table3 from "./Itemview";
import Inventory from "./Order.jsx";
import AboutUs from "./About.jsx";
import "./About.css";
import Project from "./Project.jsx";
import LoginV from "./LoginVisual.jsx";


function App() {
  const [openSidebarToggle,setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<LoginV/>} />
        <Route path="/homeheader" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/view" element={<Table3/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/item/update" element={<Inventory/>} />
        <Route path="/Project" element={<Project/>} />

        
        
      </Routes>
    </div>
  );
}

export default App;
