import React from "react";
import { Link } from "react-router-dom";
import { WhaleSighting } from "../../clients/apiClient";
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
    if (sightings.length === 0) return <p>Waiting for data...</p>

    const maxSightingOnPage = Math.min(sightings.length, ((pageNum-1) * 12 + 12));

    const sightingsList : JSX.Element[] = [];

    const handleLike = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
    }

    const handleUnlike = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
    }

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
                        { (!isLiked) ?
                            <button type="button" className = "button-like" onClick={(event) => handleLike(event, sightings[i].id)}>{"\u2661"}</button> :
                            <button type="button" className = "button-unlike" onClick={(event) => handleUnlike(event, sightings[i].id)}>{"\u2665"}</button>
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
