import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
 

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> Sync
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <Link to="/Table">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/order">
            <BsListCheck className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/contact">
            <BsPeopleFill className="icon" /> About Us
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/contact">
            <IoMdContact className="icon" /> Contact Us
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <LiaSignOutAltSolid className="icon" /> SignOut
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
