import './LanguageItem.js'
import LanguageItem from './LanguageItem.js';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { BASE_URL_LOCAL } from '../../values/Const.js'

function Languages() {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = () => {
        axios.get(`${BASE_URL_LOCAL}/api/language/languages`)
            .then(response => {
                setLanguages(response.data);
            })
            .catch((error) => {
                //navigate('/login', { replace: true });
            });
    }

    return <div>
        {((languages.length > 0) && (
            <>
                <div>{languages.map((language, index) => (
                    <LanguageItem language={language} />
                ))}
                </div>
            </>
        ))}
    </div>
}

export default Languages;