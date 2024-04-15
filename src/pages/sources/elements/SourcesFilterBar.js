import { SourceType, SourceLevel, SourceTheme, types, levels } from 'values/SourceProperties';
import './SourcesFilterBar.css'

import axios from 'axios';
import Dropdown from '../components/dropdown/Dropdown';
import DropdownItem from '../components/dropdownitem/DropdownItem';
import { useEffect, useState } from 'react';
import { BASE_URL_API, BASE_URL_LOCAL } from 'values/Const';

function SourcesFilterBar({ filters, bgColor, languageIso, onFilterUpdate }) {

    const [regions, setRegions] = useState([]);

    useEffect(() => { fetchRegions(languageIso) }, []);

    const fetchRegions = (iso) => {
        axios.get(`${BASE_URL_LOCAL}/api/region/regions`, {
            params: { language_iso: iso }
        })
            .then(response => {
                setRegions(sortRegions(response.data));
            })
            .catch((error) => { console.log(error); });
    }

    function sortRegions(regions) {
        return regions.sort((a, b) => a.name.localeCompare(b.name));
    }

    return <div
        className="filter-container"
        style={{ backgroundColor: bgColor }}>
        <div className="filter-bar">
            {(regions.length > 0) &&
                <Dropdown
                    buttonText={(filters.regionIso != "WORLD") ? regions.find((region) => region.iso == filters.regionIso) : "Region"}
                    content={
                        regions.map((region, index) => (
                            <DropdownItem
                                key={region.iso}
                                onClick={() => {
                                    const newFilter = { ...filters, region: region.iso };
                                    onFilterUpdate(newFilter);
                                }}>
                                <img className="dropdown-item-img"
                                    src={`${BASE_URL_API}/region/image&iso=${languageIso}-${region.iso}`} />
                                {region.name}
                            </DropdownItem>
                        ))
                    } />}
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