import { useState } from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { TripPlannerRequest, getSightingsListByLocation, TripPlannerResponse } from "../../clients/apiClient";
import './TripPlanner.scss'

export function TripPlanner() {

    const [latLon, setLatLon] = useState<TripPlannerRequest>({ latitude: 0, longitude: 0 });

    return <section className="tripplanner-container">
        <div className="tripplanner-search">
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
