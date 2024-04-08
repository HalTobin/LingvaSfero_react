import { SourceType, SourceLevel, SourceTheme, types } from 'values/SourceProperties';
import './SourcesFilterBar.css'

import { toColor } from 'values/Color';
import Dropdown from '../components/dropdown/Dropdown';
import DropdownItem from '../components/dropdownitem/DropdownItem';

function SourcesFilterBar(filters, bgColor, isRegionAvailable, onFilterUpdate) {
    return <div
        className="filter-container"
        style={{ backgroundColor: toColor(bgColor) }}>
        <div className="filter-bar">
            {/*isRegionAvailable && <div className="dropdown"><span>Region</span></div>*/}
            <Dropdown
                buttonText="Type"
                content={
                    types.map((type, index) => (
                        <DropdownItem key={type.id}>{type.title}</DropdownItem>
                    ))
                } />
        </div>
    </div>
}

export default SourcesFilterBar;