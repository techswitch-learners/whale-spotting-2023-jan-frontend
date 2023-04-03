import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WhaleSighting } from "../../clients/apiClient";
import "./SightingList.scss";

interface sightingListProps {
    pageNum: number,
    loggedIn: boolean,
    sightings: WhaleSighting[],
    isAdmin: boolean;
}

export default function SightingList({
    pageNum,
    loggedIn,
    sightings,
    isAdmin
}: sightingListProps) {

    const username = "username"; //to check against, will eventually be taken from the authheader

    if (!sightings) return <p>Waiting for data...</p>

    const maxSightingOnPage = Math.min(sightings.length, ((pageNum-1) * 12 + 12));

    const sightingsList : JSX.Element[] = [];

    for (let i = (pageNum-1) * 12; i < maxSightingOnPage; i++) {
        const isLiked = sightings[i].likedBy.includes(username);
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
                            {getButtons(loggedIn, sightings[i], isLiked, isAdmin)}
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

function getButtons(isLoggedIn: boolean, sighting: WhaleSighting, isLiked: boolean, isAdmin: boolean) {
    const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleUnlike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleApprove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    if (isAdmin) {
        return <>
            <button type="button" className="button-approve" onClick={(event) => handleApprove(event)}>Approve</button>
            <button type="button" className="button-delete" onClick={(event) => handleDelete(event)}>Delete</button>
        </>
    }
    else if (isLoggedIn && !isLiked) {
        return <button type="button" className = "button-like" onClick={(event) => handleLike(event)}>{"\u2661"}</button>;
    }
    else if(isLoggedIn && isLiked){
        <button type="button" className = "button-unlike" onClick={(event) => handleUnlike(event)}>{"\u2665"}</button>
    }
    else {
        <></>
    }
}
