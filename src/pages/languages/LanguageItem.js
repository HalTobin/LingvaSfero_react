import './LanguageItem.css';
import { toColor, isColorBright } from '../../values/Color';
import { BsChevronRight } from "react-icons/bs";
import { BASE_URL_API } from '../../values/Const';
import { useState, useEffect } from 'react';

function LanguageItem({ language }) {

    const [brightColor, setBrightColor] = useState(false);

    useEffect(() => {
        const bright = isColorBright(language.color);
        setBrightColor(bright);
    }, [language.color]);

    return (
        <div className="Language-item">
            <div className="Language-container" style={{ backgroundColor: toColor(language.color) }}>
                <div className="Language-flag-container">
                    <img src={`${BASE_URL_API}/res/images?iso=${language.iso}&type=language`} className="Language-flag" />
                </div>
                <b
                    className="Language-name"
                    style={{ color: brightColor ? "#000" : "#FFF" }}>
                    {language.name.toUpperCase()}
                </b>
                <BsChevronRight
                    className='Language-chevron'
                    color={brightColor ? "#000" : "#FFF"}
                    strokeWidth="1" />
            </div>
        </div>
    )
}

export default LanguageItem;