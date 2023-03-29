import "./SightingDetail.scss"
import React, { useEffect, useState } from 'react';
import { fetchSightingById, WhaleSighting} from "../../clients/apiClient";
import "./SightingDetail.scss";

interface SightingDetailProps {
    sightingId: number;
}
export function SightingDetail(props: SightingDetailProps): JSX.Element {
    const [sighting, setSighting] = useState<any>(null);

    useEffect(() => {
        fetchSightingById(props.sightingId)   
        .then(response => { setSighting(response); });
    }, [props.sightingId]);

    if (!sighting) {
        return <section>No Sightings found for the provided id</section>
    }
   
    return (
        <main className="sighting-detail">
            <p className="sighting-header">Sighting Details</p>
            <section className="sighting-detail-section">
                <article>
                    <img className="sighting-image" src={sighting.photoImageURL} />
                    <div className="sighting-info">Location Latitude : {sighting.locationLatitude} </div>
                    <div className="sighting-info">Location Longitude : {sighting.locationLongitude} </div>
                    <div className="sighting-info">Date Of Sighting : {sighting.dateOfSighting}</div>
                    <div className="sighting-info">Number Of Whales : {sighting.numberOfWhales}</div>
                    <div className="sighting-info">Description : {sighting.description}</div>
                    <div className="sighting-info">Whale Species : {sighting.whaleSpecies.name}</div>
                    <div className="sighting-info">User : {sighting.user.username}</div>
                </article>
            </section>
        </main>
    );
}
