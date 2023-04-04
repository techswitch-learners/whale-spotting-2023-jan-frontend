import { useEffect, useState } from "react";
import { MapChart } from "./Map";
import { SearchByLocation } from "./SearchByLocation";
import { SightingsTable } from "./SightingsTable";
import { TripPlannerRequest, getTopFiveSightingsByLocation, TripPlannerResponse, WhaleSighting } from "../../clients/apiClient";
import './TripPlanner.scss'

export function TripPlanner() {

    const [latLon, setLatLon] = useState<TripPlannerRequest>({ latitude: 0, longitude: 0 });
    const [listSightings, setListSightings] = useState<TripPlannerResponse[]>([]);
    const [nearestFiveSightings, setNearestFiveSightings] = useState<WhaleSighting[]>([]);
    var listNearestFiveSightings: WhaleSighting[] = [];

    useEffect(() => {
        if (latLon) {
            getTopFiveSightingsByLocation(latLon)
                .then(response => { if (response) setListSightings(response); ConvertResponseToWhaleSightings(listSightings); })
        }
    }, [latLon]);

    function ConvertResponseToWhaleSightings(listSightings: TripPlannerResponse[]) {
        for (let i = 0; i < listSightings.length; i++) {
            const item = {} as WhaleSighting;
            item.id = listSightings[i].id;
            item.locationLatitude = listSightings[i].locationLatitude;
            item.locationLongitude = listSightings[i].locationLongitude;
            item.dateOfSighting = listSightings[i].dateOfSighting.toString();
            item.photoImageURL = listSightings[i].photoImageURL;
            item.numberOfWhales = listSightings[i].numberOfWhales;
            item.whaleSpecies = listSightings[i].whaleSpecies;
            listNearestFiveSightings.push(item);
        }
        setNearestFiveSightings(listNearestFiveSightings);
    }
    return <main className="tripplanner-main">
        <section className="tripplanner-container">
            <div className="tripplanner-search">
                <SearchByLocation latLon={latLon} setLatLon={setLatLon} />
            </div>
            <div className="tripplanner-map">
                <MapChart whaleSightings={nearestFiveSightings} />
            </div>
            <div className="tripplanner-table">
                <SightingsTable listSightings={listSightings} />
            </div>
        </section>
    </main>
}
