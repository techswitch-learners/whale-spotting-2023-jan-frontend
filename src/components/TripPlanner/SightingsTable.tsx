import { useEffect, useState } from "react";
import { TripPlannerRequest, TripPlannerResponse } from "../../clients/apiClient";
import { getSightingsListByLocation } from "../../clients/apiClient";
import './SightingTable.scss';

interface SightingTableProps {
    latLon?: TripPlannerRequest;
}

export function SightingsTable({ latLon }: SightingTableProps) {

    const [listSightings, setListSightings] = useState<TripPlannerResponse[]>([]);
    console.log(latLon?.latitude, latLon?.longitude);

    useEffect(() => {
        if (latLon) {
            getSightingsListByLocation(latLon)
                .then(response => { if (response) { setListSightings(response); console.log(response); } })
        }
    }, [latLon]);

    return (
        <main>
            <div className="container">
                {
                    listSightings.map(ls =>
                        <div className="card">
                            <p className="sightings-image"><img src={ls.photoImageURL} /></p>
                            <div>
                                <p>Lat: {ls.locationLatitude} </p>
                                <p>Long: {ls.locationLongitude}</p>
                                <p>Distance: {ls.distance}</p>
                                <p>{new Date(ls.dateOfSighting).toLocaleDateString()}</p>
                                <p>{ls.whaleSpecies.name}</p>
                            </div>
                        </div>)
                }
            </div>
        </main>
    )
}
