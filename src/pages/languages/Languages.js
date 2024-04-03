import './LanguageItem.js'
import LanguageItem from './LanguageItem.js';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../values/Const.js'

var dummyLanguage = {
    name: "Español",
    img: `${BASE_URL}/res/images?iso=ESP&type=language`,
    color: 4294951936
}

function Languages() {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = () => {
        axios.get(`${BASE_URL}/language/languages`)
            .then(response => {
                setLanguages(response);
            })
            .catch((error) => {
                //navigate('/login', { replace: true });
            });
    }

    return <div>
        <div>{languages.map((language, index) => (
            <LanguageItem language={language} />
        ))}
        </div>
        <LanguageItem language={dummyLanguage} />
    </div>
}

export default Languages;