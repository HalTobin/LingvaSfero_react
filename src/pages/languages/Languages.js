import './LanguageItem.js'
import LanguageItem from './LanguageItem.js';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { BASE_URL_LOCAL } from '../../values/Const.js'
import './Languages.css'
import { useNavigate } from 'react-router-dom';

function Languages() {

    const navigate = useNavigate();

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = () => {
        axios.get(`${BASE_URL_LOCAL}/api/language/languages`)
            .then(response => {
                const sortedLanguages = response.data
                    .sort((a, b) => a.name.localeCompare(b.name))
                setLanguages(sortedLanguages);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function navigateToSources(language) {
        console.log(`Clicked on: ${language.name}`);
        navigate('sources', {
            state: { language: language }
        });
        window.scrollTo(0, 0);
    }

    return <div className='LanguagesTab'>
        {((languages.length > 0) && (
            <>
                <h2 className='LanguageSection'>
                    FULLY SUPPORTED
                </h2>
                <div>{languages
                    .filter(language => language.fullSupport == true)
                    .map((language, index) => (
                        <LanguageItem
                            key={language.iso}
                            onClick={() => navigateToSources(language)}
                            language={language} />
                    ))}
                </div>
                <h2 className='LanguageSection'>
                    PARTIALLY SUPPORTED
                </h2>
                <div>{languages
                    .filter(language => language.fullSupport == false)
                    .map((language, index) => (
                        <LanguageItem
                            key={language.iso}
                            onClick={() => navigateToSources(language)}
                            language={language} />
                    ))}
                </div>
            </>
        ))}
    </div>
}

export default Languages;