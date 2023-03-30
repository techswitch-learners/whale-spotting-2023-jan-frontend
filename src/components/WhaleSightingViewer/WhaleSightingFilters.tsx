import React from "react";
import { ChangeEvent } from "react";

interface WhaleSightingDropdownProps {
    selectedWhaleSpecies: string;
    setSelectedWhaleSpecies: React.Dispatch<React.SetStateAction<string>>;
    selectedColour: string;
    setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
    selectedTailType: string;
    setSelectedTailType: React.Dispatch<React.SetStateAction<string>>;
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

export function WhaleSightingFilters(
    {
        selectedWhaleSpecies, setSelectedWhaleSpecies,
        selectedColour, setSelectedColour,
        selectedTailType, setSelectedTailType,
        selectedSize, setSelectedSize
    }: WhaleSightingDropdownProps) {

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
    return (
        <div>
            <form className="whalesightingfilterform" onSubmit={(event) => props.handleSubmit(event)}>
                <label htmlFor="whalespecies">
                    Whale Species:
                    <select className="selectWhalespecies" value={selectedWhaleSpecies} onChange={handleChangeSpecies}>
                        <option value="">--PLEASE CHOOSE A WHALE SPECIES--</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <select className="selectColour" value={selectedColour} onChange={handleChangeColour}>
                        <option value="">--PLEASE CHOOSE A COLOUR--</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="tail-type">
                    Tail Type:
                    <select className="selectTailType" value={selectedTailType} onChange={handleChangeTailType}>
                        <option value="">--PLEASE CHOOSE A TAIL TYPE--</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="size">
                    Size:
                    <select className="selectSize" value={selectedSize} onChange={handleChangeSize}>
                        <option value="">--PLEASE CHOOSE A SIZE--</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="min-lat">
                    Min Latitude:
                    <input
                        type="text"
                        name="min-lat"
                        id="min-lat"
                        placeholder="e.g. -40.567"
                        onChange={e => props.setMinLat(e.target.value)}
                        required>
                    </input>
                </label>

                <label htmlFor="max-lat">
                    Max Latitude:
                    <input
                        type="text"
                        name="max-lat"
                        id="max-lat"
                        placeholder="e.g. 55.334"
                        onChange={e => props.setMaxLat(e.target.value)}
                        required>
                    </input>
                </label>

                <label htmlFor="min-log">
                    Min Longitude:
                    <input
                        type="text"
                        name="min-log"
                        id="min-log"
                        placeholder="e.g. -112.165"
                        onChange={e => props.setMinLog(e.target.value)}
                        required>
                    </input>
                </label>

                <label htmlFor="max-log">
                    Min Latitude:
                    <input
                        type="text"
                        name="max-log"
                        id="max-log"
                        placeholder="e.g. 98.945"
                        onChange={e => props.setMaxLog(e.target.value)}
                        required>
                    </input>
                </label>
                <button className="btn search-btn" title="serach_button">Search</button>
            </form>
        </div>



    )
}
