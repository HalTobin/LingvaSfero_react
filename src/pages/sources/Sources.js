import './Sources.css';

import { useLocation } from 'react-router-dom';
import { toColor } from '../../values/Color';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL_LOCAL } from '../../values/Const';
import SourceItem from './elements/SourceItem';
import SourceModal from './elements/SourceModal';
import SourcesFilterBar from './elements/SourcesFilterBar';

function Sources() {

    const location = useLocation();
    const language = location.state.language;
    var bgColor = toColor(language.colorDark);

    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState(null);
    const [filter, setFilter] = useState({
        language_iso: language.iso,
        region_iso: "WORLD",
        type: -1,
        theme: -1,
        level: -1
    });

    useEffect(() => {
        fetchSources(language.iso);
    }, []);

    useEffect(() => {
        fetchSourcesWithFilter(language.iso, filter);
    }, [filter]);

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

    const fetchSourcesWithFilter = (iso, sourceFilter) => {
        axios.get(`${BASE_URL_LOCAL}/api/source/sources/filter`, {
            params: {
                language_iso: iso,
                region_iso: sourceFilter.region_iso,
                type: sourceFilter.type,
                theme: sourceFilter.theme,
                level: sourceFilter.level
            }
        }).then(response => {
            setSources(sortSources(response.data));
        })
            .catch((error) => { });
    }

    function sortSources(sources) {
        return sources.sort((a, b) => a.name.localeCompare(b.name))
    }

    return <div
        className="SourcesTab"
        style={{ backgroundColor: bgColor }}
    >
        <SourcesFilterBar
            filters={filter}
            languageIso={language.iso}
            bgColor={bgColor}
            onFilterUpdate={(newFilter) => setFilter(newFilter)} />
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