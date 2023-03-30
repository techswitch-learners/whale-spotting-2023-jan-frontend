import React, { useEffect, useState } from "react";
import { getLatLonFromLocation, LatLonLocation } from "../../clients/apiClient";
import { FormEvent } from "react";
import './SearchByLocation.scss';

 export function SearchByLocation(props: {
    latLon:LatLonLocation ;
    setLatLon: React.Dispatch<React.SetStateAction<LatLonLocation>>
}) {
    const [searchLoc, setSearchLoc] = useState<string>("");
    // const [LatLon, setLatLon] = useState<LatLonLocation>();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getLatLonFromLocation(searchLoc)
            .then(response => props.setLatLon(response));
    }
    // const LatLonresponse = await getLatLonFromLocation(searchLoc);


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
