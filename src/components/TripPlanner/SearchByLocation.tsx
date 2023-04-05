import { useState } from "react";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import { FormEvent } from "react";
import './SearchByLocation.scss';

interface SearchByLocationProps {
    latLon: TripPlannerRequest;
    setLatLon: React.Dispatch<React.SetStateAction<TripPlannerRequest>>;
}

export function SearchByLocation(props: SearchByLocationProps): JSX.Element {
    const [location, setLocation] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getLatLonFromLocation(location)
            .then(response => props.setLatLon(response));
    }

    return (
        <form className="location-form" onSubmit={(e) => { handleSubmit(e) }} >
            <label className="form-label"> Enter location </label>
            <input className="input-field"
                type="text"
                name="location"
                id="location"
                required
                onChange={e => setLocation(e.target.value)}
            />
            <button className="btn-location-submit" type="submit">Search</button>
        </form>)
}
