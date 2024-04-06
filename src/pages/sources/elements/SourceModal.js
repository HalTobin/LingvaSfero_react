import './SourceModal.css'

import { useEffect, useRef } from "react";
import { MdClose, MdLink } from 'react-icons/md';
import { isColorBright, toColor } from '../../../values/Color';

function SourceModal({ source, languageColor, closeModal }) {
    const ref = useRef();

    useEffect(() => {
        if (source != null) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [source]);

    return (
        <dialog
            ref={ref}
            className='source-dialog'
            onCancel={closeModal}
        >
            {source != null && <div className='source-container'>
                <a
                    style={{ cursor: 'pointer' }}>
                    <MdClose
                        className='dialog-close'
                        onClick={closeModal} />
                </a>
                <div className="dialog-thumbnail-container">
                    {source.thumbnail && <img src={source.thumbnail} alt="Thumbnail" className="dialog-thumbnail" />}
                </div>
                <div className="dialog-info-container">
                    <h3 className="dialog-title">{source.name}</h3>
                    <p className="dialog-description">{source.description}</p>
                </div>
                <div className='dialog-button-container'>
                    <a
                        className='dialog-link-button'
                        href={source.website}
                        target='_blank'
                        style={{
                            backgroundColor: toColor(languageColor),
                            color: isColorBright(languageColor) ? "#000" : "#FFF"
                        }}>
                        <p className='dialog-link-text'>OPEN</p>
                        <MdLink className='dialog-link-icon' />
                    </a>
                </div>
            </div>}
        </dialog>
    );
}

export default SourceModal;