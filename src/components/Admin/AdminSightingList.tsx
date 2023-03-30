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
                <Link to={`/sightings/${sightings[i].id}`}>
                <div className="post-container">
                    <img src={sightings[i].photoImageURL} alt="post image"/>
                    <div className="sighting-info">
                        <div>
                            <p className="username">{sightings[i].user.username}</p>
                            <p className="date">{sightings[i].dateOfSighting}</p>
                        </div>
                            <button type="button" onClick={(event) => handleApprove(event, sightings[i].id)}>Approve</button>
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
