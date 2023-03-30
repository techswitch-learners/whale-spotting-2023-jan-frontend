import React, { useEffect, useState } from "react";
import { getLatLonFromLocation, LatLonLocation } from "../../clients/apiClient";
import { FormEvent } from "react";
import './SearchByLocation.scss';

export let LatLon: LatLonLocation;

export function SearchByLocation() {
    const [searchLoc, setSearchLoc] = useState<string>("");
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getLatLonFromLocation(searchLoc)
            .then(response => LatLon = response);
    }

    return (
        <form className="location-form" onSubmit={(e) => { handleSubmit(e) }} >
            <input className="input-field"
                type="text"
                name="location"
                id="location"
                required
                onChange={e => setSearchLoc(e.target.value)}
            />
            <button className="btn-location-submit" type="submit">Search</button>
        </form>)
}
