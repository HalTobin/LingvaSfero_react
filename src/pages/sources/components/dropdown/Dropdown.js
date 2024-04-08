import DropdownButton from '../dropdownbutton/DropdownButton';
import DropdownContent from '../dropdowncontent/DropdownContent';
import './Dropdown.css';
import React, { useState, useEffect, useRef } from "react";

function Dropdown({ buttonText, content }) {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => {
        setOpen((open) => !open);
    }

    useEffect(() => {
        const handler = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        }
    }, [dropdownRef]);

    return <div
        className='dropdown'
        ref={dropdownRef}>
        <DropdownButton
            toggle={toggleDropdown}
            open={open}>
            {buttonText}
        </DropdownButton>
        <DropdownContent open={open}>{content}</DropdownContent>
    </div>
}

export default Dropdown;