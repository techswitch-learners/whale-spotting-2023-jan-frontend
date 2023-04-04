import { useEffect, useState } from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { TripPlannerRequest, getTopFiveSightingsByLocation, TripPlannerResponse } from "../../clients/apiClient";
import './TripPlanner.scss'

export function TripPlanner() {

    const [latLon, setLatLon] = useState<TripPlannerRequest>({ latitude: 0, longitude: 0 });
    const [listSightings, setListSightings] = useState<TripPlannerResponse[]>([]);

    useEffect(() => {
        if (latLon) {
            getTopFiveSightingsByLocation(latLon)
                .then(response => { if (response) setListSightings(response); })
        }
    }, [latLon]);

    return <main className="tripplanner-main">
        <section className="tripplanner-container">
            <div className="tripplanner-search">
                <SearchByLocation latLon={latLon} setLatLon={setLatLon} />
            </div>
            <div className="tripplanner-map">
                <MapChart />
            </div>
            <div className="tripplanner-table">
                <SightingsTable listSightings={listSightings} />
            </div>
        </section>
    </main>
}
