import { TripPlannerResponse } from "../../clients/apiClient";
import './SightingTable.scss';

interface SightingTableProps {
    listSightings: TripPlannerResponse[];
}

export function SightingsTable(props: SightingTableProps) {

    return (
        <main>
            <div className="container">
                {
                    props.listSightings.map(ls =>
                        <div className="card">
                            <p className="sightings-image">
                                <img src={ls.photoImageURL} />
                            </p>
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
