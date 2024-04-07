import { SourceType, SourceLevel, SourceTheme, types } from 'values/SourceProperties';
import './SourcesFilterBar.css'

import { toColor } from 'values/Color';

function SourcesFilterBar(filters, isRegionAvailable, onFilterUpdate) {
    return <div
        className="filter-container">
        <div className="filter-bar">
            {/*isRegionAvailable && <div className="dropdown"><span>Region</span></div>*/}
            <div className="dropdown">
                <span>{(filters.type == -1) ? SourceType[filters.type].title : 'Type'}</span>
            </div>
            <select
                className="dropdown"
                name={(filters.type == -1) ? SourceType[filters.type].title : 'Type'}
                value=""
                onChange={event => {
                    //filters.type = event.target.value
                }}>
                <option id={-1}>All</option>
                {types.map((type, index) => (
                    <option id={index}>{type.title}</option>
                ))}
            </select>
            <div className="dropdown"><span>{(filters.theme == -1) ? SourceTheme[filters.theme] : 'Theme'}</span></div>
            <div className="dropdown"><span>{(filters.Level == -1) ? SourceLevel[filters.Level] : 'Level'}</span></div>
        </div>
    </div>
}

export default SourcesFilterBar;