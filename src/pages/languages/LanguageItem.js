import './LanguageItem.css'
import { toColor } from '../../values/Color';
import { BsChevronRight } from "react-icons/bs";

function LanguageItem({ language }) {
    return (
        <div className="Language-item">
            <div className="Language-container" style={{ backgroundColor: toColor(language.color) }}>
                <div className="Language-flag-container">
                    <img src={language.img} className="Language-flag" />
                </div>
                <b className="Language-name">{language.name.toUpperCase()}</b>
                <BsChevronRight className='Language-chevron' strokeWidth="1" />
            </div>
        </div>
    )
}

export default LanguageItem;