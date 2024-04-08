import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './DropdownButton.css';

import React from "react";

function DropdownButton({ children, open, toggle }) {
    return <div
        className={`dropdown-btn ${open ? "button-open" : null}`}
        onClick={toggle}>
        {children}
        <span className="dropdown-toggle-icon">
            {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
    </div>
}

export default DropdownButton;