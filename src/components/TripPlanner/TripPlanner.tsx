import React from "react";
import { MapChart } from "./Map";
import './TripPlanner.scss'

export function TripPlanner() {
    return <section className="tripplanner-container">
        <div className="tripplanner-header">
            Please enter your destination for whale spotting!
        </div>
        <div className="tripplanner-search">
            SEARCH
        </div>
        <div className="tripplanner-map">
            {<MapChart whaleSightings={[]} />}
        </div>
        <div className="tripplanner-table">
            TABLE
        </div>
    </section>
}
