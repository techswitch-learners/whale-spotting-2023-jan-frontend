import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WhaleSighting } from "../../clients/apiClient";
import "./AdminSightingList.scss";

interface adminSightingListProps {
    sightings: WhaleSighting[];
}

export default function AdminSightingList({
    sightings,
}: adminSightingListProps) {
    
    const sightingsList : JSX.Element[] = [];

    const handleApprove = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
    }

    for (let i = 0; i < sightings.length; i++) {
        sightingsList.push(
            <li className="whale-sighting-post">
                <Link to={`/sightings/${sightings[i].Id}`}>
                <div className="post-container">
                    <img src={sightings[i].PhotoImageUrl} alt="post image"/>
                    <div className="sighting-info">
                        <div>
                            <p className="username">{sightings[i].User.Username}</p>
                            <p className="date">{sightings[i].DateOfSighting}</p>
                        </div>
                            <button type="button" onClick={(event) => handleApprove(event, sightings[i].Id)}>Approve</button>
                    </div>
                </div>
                </Link>
            </li>);
    }

    return <>
        <ul className="whale-sighting-posts">
			{sightingsList}
		</ul>
    </>
}
