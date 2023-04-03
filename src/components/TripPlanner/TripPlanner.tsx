import { useState,useEffect} from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { TripPlannerRequest,getSightingsListByLocation,TripPlannerResponse } from "../../clients/apiClient";
import './TripPlanner.scss'

export function TripPlanner() {

    const [latLon, setLatLon] = useState<any>();

    const [listSightings, setListSightings] = useState<TripPlannerResponse[]>([]);
    console.log(latLon?.latitude, latLon?.longitude);
   
    // useEffect(() => {
    //     if (latLon) {
    //         getSightingsListByLocation(latLon)
    //             .then(response => { if (response) { setListSightings(response); console.log(response); } })
    //     }
    // }, [latLon]);

    
    function handleSearch(latLon: TripPlannerRequest) {
        setLatLon(latLon);
    }

    return <section className="tripplanner-container">
        <div className="tripplanner-header">
            Please enter your location for whale spotting!
        </div>
        <div className="tripplanner-search">
            {/* <SearchByLocation onSearch={handleSearch} />   */}
            <SearchByLocation latLon={latLon} setLatLon={setLatLon} />    
        </div>
        <div className="tripplanner-map">
            <MapChart />
        </div>
        <div className="tripplanner-table">
            <SightingsTable latLon={latLon} />   
        </div>
    </section>
}

