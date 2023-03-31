import React, { useState } from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import './TripPlanner.scss'

export function TripPlanner() {

    const [latLon, setLatLon] = useState<TripPlannerRequest>();

    function handleSearch(latLon: TripPlannerRequest) {
        setLatLon(latLon);
    }
    return <section className="tripplanner-container">
        <div className="tripplanner-header">
            Please enter your location for whale spotting!
        </div>
        <div className="tripplanner-search">
            <SearchByLocation onSearch={handleSearch} />
        </div>
        <div className="tripplanner-map">
            <MapChart />
        </div>
        <div className="tripplanner-table">
            <SightingsTable latLon={latLon} />
        </div>
    </section>
}
