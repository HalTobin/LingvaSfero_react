import './DropdownContent.css';

import React from 'react';

function DropdownContent({ children, open }) {
    return <div className={`dropdown-content ${open ? "content-open" : null}`}>
        {children}
    </div>
}

export default DropdownContent;