import React, { useState } from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import './TripPlanner.scss'

export const [location, setLocation] = useState<string>("");

export function TripPlanner() {
    // const defaultLatLon: TripPlannerRequest = { latitude: 51.509865, longitude: -0.118092 }
    // const [latLon, setLatLon] = useState<TripPlannerRequest>(defaultLatLon);

    return <section className="tripplanner-container">
        <div className="tripplanner-header">
            Please enter your location for whale spotting!
        </div>
        {/* //latLon={latLon} setLatLon={setLatLon} */}
        <div className="tripplanner-search"><SearchByLocation />
        </div>
        <div className="tripplanner-map">
            <MapChart />
        </div>
        <div className="tripplanner-table">
            {/* <SightingsTable latLon={latLon} setLatLon={setLatLon} /> */}
        </div>
    </section>
}
