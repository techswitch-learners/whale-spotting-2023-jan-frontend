import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWhaleSightings, NewSighting } from "../../clients/apiClient";
import "./SightingList.scss";

export default function SightingList(props: {
    pageNum: number,
    sightingsList: NewSighting[],
}) { 



    if (!props.sightingsList) return <p>Waiting for data...</p>

    const sightingsToShow = Math.min(props.sightingsList.length, ((props.pageNum-1) * 12 + 12));

    const sightings : JSX.Element[] = [];
    
    for (let i = (props.pageNum-1) * 12; i < sightingsToShow; i++) {
        sightings.push(
            <li className="whale-sighting-post">
                <Link to={`/sightings/${props.sightingsList[i].Id}`}>
                <div className="post-container">
                    <img src={props.sightingsList[i].photoImageURL} alt="post image"/>
                    <div className="sighting-info">
                        <div>
                            <p className="username">{props.sightingsList[i].username}</p>
                            <p className="date">{props.sightingsList[i].dateOfSighting.toLocaleDateString('en-GB')}</p>
                        </div>
                        <button>Like</button>
                    </div>
                </div>
                </Link>
            </li>);
    }

    return <>
        <ul className="whale-sighting-posts">
				{sightings}
		</ul>
    </>
}
