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
            <table className="table">
                <tbody>
                    <tr className="table-row">
                        <th>Sighting Latitude</th>
                        <th>Sighting Longitude</th>
                        <th>Distance</th>
                        <th>DateSighted</th>
                        <th>Species</th>
                        <th>Image</th>
                    </tr>
                    {
                        listSightings.map(ls =>
                            <tr className="table-row">
                                <td className="table-data">{ls.locationLatitude}</td>
                                <td className="table-data">{ls.locationLongitude}</td>
                                <td className="table-data">{ls.distance}</td>
                                <td className="table-data">{new Date(ls.dateOfSighting).toLocaleDateString()}</td>
                                <td className="table-data">{ls.whaleSpecies.name}</td>
                                <td className="table-data-image"><img src={ls.photoImageURL} /></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </main>
    )
}
