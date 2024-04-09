import { SourceType, SourceLevel, SourceTheme, types, levels } from 'values/SourceProperties';
import './SourcesFilterBar.css'

import Dropdown from '../components/dropdown/Dropdown';
import DropdownItem from '../components/dropdownitem/DropdownItem';

function SourcesFilterBar({ filters, bgColor, isRegionAvailable, onFilterUpdate }) {
    return <div
        className="filter-container"
        style={{ backgroundColor: bgColor }}>
        <div className="filter-bar">
            {/*isRegionAvailable && <div className="dropdown"><span>Region</span></div>*/}
            <Dropdown
                buttonText={(filters.type != -1) ? types.find((type) => type.id == filters.type).title : "Type"}
                content={
                    types.map((type, index) => (
                        <DropdownItem
                            key={type.id}
                            onClick={() => {
                                const newFilter = { ...filters, type: type.id };
                                onFilterUpdate(newFilter);
                            }}>
                            <img className="dropdown-item-img"
                                src={type.icon} />
                            {type.title}
                        </DropdownItem>
                    ))
                } />
            <Dropdown
                buttonText={(filters.level != -1) ? levels.find((level) => level.id == filters.level).title : "Level"}
                content={
                    levels.map((level, index) => (
                        <DropdownItem
                            key={level.id}
                            onClick={() => {
                                const newFilter = { ...filters, level: level.id };
                                onFilterUpdate(newFilter);
                            }}>
                            <b className="dropdown-item-img">{level.title}</b>
                            {level.text}
                        </DropdownItem>
                    ))
                } />
        </div>
    </div>
}

export default SourcesFilterBar;