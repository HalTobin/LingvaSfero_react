import './DropdownContent.css';

import React from 'react';

function DropdownContent({ children, open, onClick }) {
    return <div
        onClick={onClick}
        className={`dropdown-content ${open ? "content-open" : null}`}>
        {children}
    </div>
}

export default DropdownContent;