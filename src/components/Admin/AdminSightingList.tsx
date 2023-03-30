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

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
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
                            <p className="date">{(new Date(sightings[i].dateOfSighting)).toLocaleDateString('en-GB')}</p>
                        </div>
                            <button type="button" className="button-approve" onClick={(event) => handleApprove(event, sightings[i].id)}>Approve</button>
                            <button type="button" className="button-delete" onClick={(event) => handleDelete(event, sightings[i].id)}>Delete</button>
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
