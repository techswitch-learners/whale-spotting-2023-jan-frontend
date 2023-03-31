import React, { useEffect, useState } from "react";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import { FormEvent } from "react";
import './SearchByLocation.scss';

//export let LatLon: TripPlannerRequest;

// export interface SearchLocationProps {
//     latLon: TripPlannerRequest;
//     setLatLon: React.Dispatch<React.SetStateAction<TripPlannerRequest>>;
// }//{ latLon, setLatLon }: SearchLocationProps

export function SearchByLocation() {
    // const [searchLoc, setSearchLoc] = useState<string>("");
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getLatLonFromLocation("rm112hn")
            .then(response => { console.log(response); });
        //setLatLon(response);
    }

    return (
        <form className="location-form" onSubmit={(e) => { handleSubmit(e) }} >
            <input className="input-field"
                type="text"
                name="location"
                id="location"
                required
                onChange={e => (e.target.value)}//setSearchLoc
            />
            <button className="btn-location-submit" type="submit">Search</button>
        </form>)
}
