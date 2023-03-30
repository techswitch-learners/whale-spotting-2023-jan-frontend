import React,{useState} from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { getLatLonFromLocation, LatLonLocation } from "../../clients/apiClient";
import './TripPlanner.scss'

    
export function TripPlanner() {

    const [latLon, setLatLon] = useState<LatLonLocation|null>(null);
// console.log(respon)
    return <section className="tripplanner-container">
        <div className="tripplanner-header">
            Please enter your destination for whale spotting!
        </div>
        <div className="tripplanner-search"><SearchByLocation latLon={latLon} setLatLon={setLatLon}/>
        </div>
        <div className="tripplanner-map">
            <MapChart />
        </div>
        <div className="tripplanner-table">
            <SightingsTable />
        </div>
    </section>
}
