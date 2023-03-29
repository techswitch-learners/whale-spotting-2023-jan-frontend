import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWhaleSightings, WhaleSighting, isLikedByUser } from "../../clients/apiClient";
import "./SightingList.scss";

interface sightingListProps {
    pageNum: number,
    sightings: WhaleSighting[];
}

export default function SightingList({
    pageNum,
    sightings
}: sightingListProps) {

    const username = "username";

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
        const isLiked = sightings[i].ListOfLikers.includes(username);
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
                        { (!isLiked) ?
                            <button type="button" onClick={(event) => handleLike(event, sightings[i].Id)}>Like</button> :
                            <button type="button" onClick={(event) => handleUnlike(event, sightings[i].Id)}>Unlike</button>
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
