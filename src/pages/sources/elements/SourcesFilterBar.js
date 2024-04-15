import { SourceType, SourceLevel, SourceTheme, types, levels, themes } from 'values/SourceProperties';
import './SourcesFilterBar.css'

import axios from 'axios';
import Dropdown from '../components/dropdown/Dropdown';
import DropdownItem from '../components/dropdownitem/DropdownItem';
import { useEffect, useState } from 'react';
import { BASE_URL_API, BASE_URL_LOCAL } from 'values/Const';

function SourcesFilterBar({ filters, bgColor, languageIso, onFilterUpdate }) {

    const [regions, setRegions] = useState([]);

    useEffect(() => {
        console.log(themes);
        fetchRegions(languageIso)
    }, []);

    const fetchRegions = (iso) => {
        axios.get(`${BASE_URL_LOCAL}/api/region/regions`, {
            params: { language_iso: iso }
        })
            .then(response => {
                var regions = response.data;
                if (regions.length > 0) {
                    setRegions(sortRegions(regions));
                }
            })
            .catch((error) => { console.log(error); });
    }

    function sortRegions(regions) {
        var result = regions.sort((a, b) => a.name.localeCompare(b.name));
        result.unshift({
            "iso": "WORLD",
            "languageIso": "WORLD",
            "name": "World",
            "flagUrl": "rsc/region/esp_mex.png"
        });
        return result;
    }

    return <div
        className="filter-container"
        style={{ backgroundColor: bgColor }}>
        <div className="filter-bar">
            {(regions.length > 0) &&
                <Dropdown
                    buttonText={(filters.region_iso != "WORLD") ? regions.find((region) => region.iso == filters.region_iso).name : "Region"}
                    content={
                        regions.map((region, index) => (
                            <DropdownItem
                                key={region.iso}
                                onClick={() => {
                                    const newFilter = { ...filters, region_iso: region.iso };
                                    onFilterUpdate(newFilter);
                                }}>
                                <div className="dropdown-item-img-container">
                                    <img src={`${BASE_URL_API}/region/image?iso=${region.iso}`} className="dropdown-flag" />
                                </div>
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
                buttonText={(filters.theme != -1) ? themes.find((theme) => theme.id == filters.theme).title : "Theme"}
                content={
                    themes.map((theme, index) => (
                        <DropdownItem
                            key={theme.id}
                            onClick={() => {
                                const newFilter = { ...filters, theme: theme.id };
                                onFilterUpdate(newFilter);
                            }}>
                            {theme.title}
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