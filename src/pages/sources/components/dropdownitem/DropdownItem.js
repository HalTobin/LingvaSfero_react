import './DropdownItem.css';

import React from 'react';

function DropdownItem({ children, onClick }) {
    return <div
        className='dropdown-item'
        onClick={onClick}>
        {children}
    </div>
}

export default DropdownItem;