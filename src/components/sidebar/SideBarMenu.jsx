// SidebarMenu.js
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardIcon from "@mui/icons-material/Dashboard"; // Remove this if using dynamic icons


const SidebarMenu = ({ menuItems }) => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-col space-y-5 px-5">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
            <span className="space-x-5 text-white">
                {React.createElement(item.icon, { color: 'primary', className: 'mr-4' })}
                {item.label}
              </span>
            </Link>
           
          </li>
        ))}
      </ul>
    </nav>
  );
};

SidebarMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

export default SidebarMenu;
