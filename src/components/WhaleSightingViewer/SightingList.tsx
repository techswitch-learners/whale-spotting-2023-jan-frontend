import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WhaleSighting, isLikedByUser } from "../../clients/apiClient";
import "./SightingList.scss";

interface sightingListProps {
    pageNum: number,
    sightings: WhaleSighting[];
}

export default function SightingList({
    pageNum,
    sightings
}: sightingListProps) {

    const username = "username"; //to check against, will eventually be taken from the authheader

    if (!sightings) return <p>Waiting for data...</p>

    const maxSightingOnPage = Math.min(sightings.length, ((pageNum-1) * 12 + 12));

    const sightingsList : JSX.Element[] = [];

    const handleLike = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
    }

    const handleUnlike = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
    }

    for (let i = (pageNum-1) * 12; i < maxSightingOnPage; i++) {
        const isLiked = sightings[i].listOfLikers.includes(username);
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
                        { (!isLiked) ?
                            <button type="button" onClick={(event) => handleLike(event, sightings[i].id)}>Like</button> :
                            <button type="button" onClick={(event) => handleUnlike(event, sightings[i].id)}>Unlike</button>
                        }
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
