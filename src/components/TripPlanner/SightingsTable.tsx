import React from "react";
import { LatLon } from "./SearchByLocation";
import { fetchAllApprovedSightings } from "../../clients/apiClient";

export function SightingsTable() {

// make an api call to sightings table 
    
    fetchAllApprovedSightings();

    return (
        <main>
            <div className="table">
                <div> Sighting &nbsp;&nbsp; Latitude&nbsp;&nbsp; Sighting&nbsp;&nbsp; LongitudeDistanceDate&nbsp;&nbsp; SightedSpecies&nbsp;&nbsp; Image</div>
            </div>
            <div className="data">
                results1
            </div>

        </main>
    )

}

