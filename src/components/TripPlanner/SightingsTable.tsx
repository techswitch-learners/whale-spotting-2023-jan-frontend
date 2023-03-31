import { useEffect, useState } from "react";
import React from "react";
import { fetchAllApprovedSightings, TripPlannerResponse } from "../../clients/apiClient";
import { getLatLonFromLocation, TripPlannerRequest } from "../../clients/apiClient";
import { getSightingsListByLocation } from "../../clients/apiClient";

export interface SearchLocationProps {
    latLon: TripPlannerRequest;
    setLatLon: React.Dispatch<React.SetStateAction<TripPlannerRequest>>;
}

export function SightingsTable({ latLon, setLatLon }: SearchLocationProps) {
    const [listSightings, setListSightings] = useState<TripPlannerResponse[]>([]);

    useEffect(() => {
        getSightingsListByLocation(latLon)
            .then(response => { if (response) setListSightings(response) })
    }, [latLon]);

    // if (!listSightings) {
    //     return <section> No Sightings Found Nearby.</section>
    // }
    // else {

    //     listSightings.map(ls =>
    //         <tr>
    //             <td>ls.latitude</td>
    //             <td>ls.longitude</td>
    //             <td>ls.distance</td>
    //             <td>ls.dateSighted</td>
    //             <td>ls.species</td>
    //             <td>ls.image</td>

    //         </tr>)

    return (
        <main>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Sighting Latitude</th>
                        <th>Sighting Longitude</th>
                        <th>Distance</th>
                        <th>DateSighted</th>
                        <th>Species</th>
                        <th>Image</th>
                    </tr>
                    {
                        listSightings.map(ls =>
                            <tr>
                                <td>ls.latitude</td>
                                <td>ls.longitude</td>
                                <td>ls.distance</td>
                                <td>ls.dateSighted</td>
                                <td>ls.species</td>
                                <td>ls.image</td>

                            </tr>)
                    }
                </tbody>
            </table>

        </main>
    )

}

