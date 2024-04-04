import './Sources.css';

import { useLocation } from 'react-router-dom';
import { toColor } from '../../values/Color';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL_LOCAL } from '../../values/Const';
import SourceItem from './SourceItem';

function Sources() {

    const location = useLocation();
    const language = location.state.language;

    const [sources, setSources] = useState([]);

    useEffect(() => {
        fetchSources(language.iso);
    }, []);

    const fetchSources = (iso) => {
        axios.get(`${BASE_URL_LOCAL}/api/source/sources`, {
            params: { language_iso: iso }
        })
            .then(response => {
                setSources(sortSources(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function sortSources(sources) {
        return sources.sort((a, b) => a.name.localeCompare(b.name))
    }

    return <div
        className="SourcesTab"
        style={{ backgroundColor: toColor(language.colorDark) }}
    >
        <p>{language.name}</p>
        {((sources.length > 0) && (<>
            <div>{sources
                .map((source, index) => (
                    <SourceItem
                        key={source.id}
                        source={source} />
                ))}</div>
        </>))}
    </div>
}

export default Sources;