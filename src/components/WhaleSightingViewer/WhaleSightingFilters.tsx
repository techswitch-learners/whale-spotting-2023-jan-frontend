import React from "react";
import {
    ChangeEvent,
    useState,
    useEffect,
    FormEvent
} from "react";
import { fetchSpeciesQuery, TailType, Size, SpeciesSearch, WhaleSpecies } from "../../clients/apiClient";
import "./WhaleSightingFilters.scss";

interface WhaleSightingDropdownProps {
    selectedWhaleSpecies: string;
    setSelectedWhaleSpecies: React.Dispatch<React.SetStateAction<string>>;
    selectedColour: string;
    setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
    selectedTailType: string;
    setSelectedTailType: React.Dispatch<React.SetStateAction<string>>;
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    setMinLat: React.Dispatch<React.SetStateAction<string>>,
    setMaxLat: React.Dispatch<React.SetStateAction<string>>,
    setMinLog: React.Dispatch<React.SetStateAction<string>>,
    setMaxLog: React.Dispatch<React.SetStateAction<string>>,
    handleSearch: (event: FormEvent<HTMLFormElement>) => void,
}

export function WhaleSightingFilters(
    {
        selectedWhaleSpecies, setSelectedWhaleSpecies,
        selectedColour, setSelectedColour,
        selectedTailType, setSelectedTailType,
        selectedSize, setSelectedSize,
        setMinLat, setMaxLat,
        setMinLog, setMaxLog,
        handleSearch
    }: WhaleSightingDropdownProps) {


    const [listWhaleSpecies, setListWhaleSpecies] = useState<WhaleSpecies[]>([]);
    let search: SpeciesSearch =
    {
        tailType: null,
        size: null,
        colour: null
    };

    useEffect(() => {
        fetchSpeciesQuery(search)
            .then(response => setListWhaleSpecies(response));
    }, []);

    const handleChangeSpecies = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedWhaleSpecies(event.target.value);
    };

    const handleChangeColour = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedColour(event.target.value);
    };

    const handleChangeTailType = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTailType(event.target.value);
    };

    const handleChangeSize = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(event.target.value);
    };

    let colourList = [...new Set(listWhaleSpecies.map(ws => ws.colour))];

    return (
        <div className="filterCard">
            <form className="whalesightingfilterform" onSubmit={(event) => handleSearch(event)}>
                <div className="filter-grid">
                    <label htmlFor="whalespecies">
                        Whale Species
                        <br></br>
                        <select className="selectOption" value={selectedWhaleSpecies} onChange={handleChangeSpecies}>
                            <option value="">----</option>
                            {listWhaleSpecies.map(ws => (
                                <option key={ws.id} value={ws.name}>
                                    {ws.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Colour
                        <br></br>
                        <select className="selectOption" value={selectedColour} onChange={handleChangeColour}>
                            <option value="">----</option>
                            {colourList.map(ws => (
                                <option key={ws} value={ws}>
                                    {ws}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="tail-type">
                        Tail Type
                        <br></br>
                        <select className="selectOption" value={selectedTailType} onChange={handleChangeTailType}>
                            <option value="">----</option>
                            <option key={0} value={0}>Bifurcated</option>
                            <option key={1} value={1}>NonBifurcated</option>
                        </select>
                    </label>
                    <label htmlFor="size">
                        Size
                        <br></br>
                        <select className="selectOption" value={selectedSize} onChange={handleChangeSize}>
                            <option value="">----</option>
                            <option key={0} value={0}>Small0To5m</option>
                            <option key={1} value={1}>Medium5To10m</option>
                            <option key={2} value={2}>Large10To20m</option>
                            <option key={3} value={3}>VeryLargeOver20m</option>
                        </select>
                    </label>
                    <label htmlFor="min-lat">
                        Min Latitude
                        <br></br>
                        <input
                            type="text"
                            name="min-lat"
                            id="min-lat"
                            placeholder="e.g. -40.567"
                            onChange={e => setMinLat(e.target.value)}
                        >
                        </input>
                    </label>
                    <label htmlFor="max-lat">
                        Max Latitude
                        <br></br>
                        <input
                            type="text"
                            name="max-lat"
                            id="max-lat"
                            placeholder="e.g. 55.334"
                            onChange={e => setMaxLat(e.target.value)}
                        >
                        </input>
                    </label>
                    <label htmlFor="min-log">
                        Min Longitude
                        <br></br>
                        <input
                            type="text"
                            name="min-log"
                            id="min-log"
                            placeholder="e.g. -112.165"
                            onChange={e => setMinLog(e.target.value)}
                        >
                        </input>
                    </label>
                    <label htmlFor="max-log">
                        Max Longitude
                        <br></br>
                        <input
                            type="text"
                            name="max-log"
                            id="max-log"
                            placeholder="e.g. 98.945"
                            onChange={e => setMaxLog(e.target.value)}
                        >
                        </input>
                    </label>
                </div>
                <button className="btn-search-btn" title="search_button">Search</button>
            </form>
        </div>
    )
}
