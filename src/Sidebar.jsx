import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck}
 from 'react-icons/bs'
 import { LiaSignOutAltSolid} from "react-icons/lia";
 import { Link, useNavigate} from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate=useNavigate();

    
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    
                    <BsGrid1X2Fill className='icon'/> Dashboard
                   
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/order">
                
                    <BsFillArchiveFill className='icon'/> Products
                    
                </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="">
                    <LiaSignOutAltSolid className='icon'/> SignOut
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar