import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WhaleSighting } from "../../clients/apiClient";
import SightingButton from "./SightingButtons";
import "./SightingList.scss";
import { LoginContext } from "../Login/LoginManager";

interface sightingListProps {
    pageNum: number,
    loggedIn: boolean,
    sightings: WhaleSighting[],
    isAdminPage: boolean;
    click: boolean;
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SightingList({
    pageNum,
    loggedIn,
    sightings,
    isAdminPage,
    click,
    setClick
}: sightingListProps) {

    const loginContext = useContext(LoginContext);

    const username = loginContext.username.toLowerCase();

    if (sightings.length === 0) return <p>Waiting for data...</p>

    const maxSightingOnPage = Math.min(sightings.length, ((pageNum - 1) * 12 + 12));

    const sightingsList: JSX.Element[] = [];

    for (let i = (pageNum - 1) * 12; i < maxSightingOnPage; i++) {
        const isLiked = sightings[i].likedBy.includes(username);
        sightingsList.push(
            <li className="whale-sighting-post">
                <Link to={`/sightings/${sightings[i].id}`}>
                    <div className="post-container">
                        <img src={sightings[i].photoImageURL} alt="post image" />
                        <div className="sighting-info">
                            <div>
                                <p className="username">{sightings[i].user.username}</p>
                                <p className="date">{(new Date(sightings[i].dateOfSighting)).toLocaleDateString('en-GB')}</p>

                            </div>
                            {!isAdminPage && <p className="likes">{`${sightings[i].likedBy.length} likes`}</p>}
                            <SightingButton isLoggedIn={loggedIn} sighting={sightings[i]} isLiked={isLiked} isAdminPage={isAdminPage} click={click} setClick={setClick} />
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
