import "./SightingDetail.scss"
import React, { useEffect, useState } from 'react';
import {fetchSightingById, WhaleSighting} from "../../clients/apiClient";
import "./SightingDetail.scss";

export function SightingDetail(props:{sightingId:number}): JSX.Element {
        const [sighting, setSighting] = useState<WhaleSighting|null>(null); 

        useEffect(() => {
            fetchSightingById(props.sightingId)
                .then(response => setSighting(response));
        }, [props.sightingId]);

        if (!sighting) {
            return <section>No Sightings found for the provided id</section>
        }
    
    return (
        <main>
            <p className="main-header">Sighting Details</p>
            <section className="sighting-detail-section">
                <article>
                    <img className="sighting-image" src={sighting.PhotoImageUrl} />
                    <div className="sighting-info">LocationLatitude : {sighting.LocationLatitude} </div>
                    <div className="sighting-info">LocationLongitude : {sighting.LocationLongitude} </div>
                    <div className="sighting-info">DateOfSighting : {sighting.DateOfSighting}</div>
                    <div className="sighting-info">NumberOfWhales : {sighting.NumberOfWhales}</div>
                    <div className="sighting-info">Description : {sighting.Description}</div>
                    <div className="sighting-info">WhaleSpecies : {sighting.WhaleSpecies.Name}</div>
                    <div className="sighting-info">User : {sighting.User.Username}</div>
                </article>
            </section>
        </main>
    );
}






// public int Id { get; set; }
//     public DateTime DateOfSighting { get; set; }
//     public float LocationLatitude { get; set; }
//     public float LocationLongitude { get; set; }
//     public string PhotoImageURL { get; set; }
//     public int NumberOfWhales { get; set; }
//     public ApprovalStatus ApprovalStatus {get;set;}
//     public string Description { get; set; }
//     public WhaleSpecies WhaleSpecies { get; set; }
//     public User User { get; set; }
//     public ICollection<Like> Likes { get; set; }
// }