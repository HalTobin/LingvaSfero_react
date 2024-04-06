import './Sources.css';

import { useLocation } from 'react-router-dom';
import { toColor } from '../../values/Color';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL_LOCAL } from '../../values/Const';
import SourceItem from './elements/SourceItem';
import SourceModal from './elements/SourceModal';

function Sources() {

    const location = useLocation();
    const language = location.state.language;

    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState(null);

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
        <div className="SourcesCard">
            {((sources.length > 0) && (
                sources
                    .map((source, index) => (
                        <SourceItem
                            key={source.id}
                            onClick={() => setSelectedSource(source)}
                            source={source} />
                    ))
            ))}
        </div>
        <SourceModal
            source={selectedSource}
            languageColor={language.color}
            closeModal={() => setSelectedSource(null)} />
    </div>
}

export default Sources;