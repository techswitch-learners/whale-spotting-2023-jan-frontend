import { useState } from "react";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import { FormEvent } from "react";
import './SearchByLocation.scss';


// interface SearchByLocationProps {
//     onSearch: (latLon: TripPlannerRequest) => void;
// }

interface SearchByLocationProps{
    latLon:TripPlannerRequest;
    setLatLon: React.Dispatch<React.SetStateAction<TripPlannerRequest>>;
}

// export function SearchByLocation(props: SearchByLocationProps): JSX.Element {
    export function SearchByLocation(props:SearchByLocationProps): JSX.Element {


    const [location, setLocation] = useState("");
    // const [latLon, setLatLon] = useState<TripPlannerRequest>();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getLatLonFromLocation(location)
            .then(response => { console.log(response); props.setLatLon(response) });
    //     .then(() => {
    //         if (props.latLon) {
    //             props.onSearch(latLon);
    //         }
    // });
}

return (
    <form className="location-form" onSubmit={(e) => { handleSubmit(e) }} >
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
