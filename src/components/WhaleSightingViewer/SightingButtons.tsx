import React, { useEffect, useState, useContext} from "react";
import "./SightingList.scss";
import { NewLike } from "../../clients/apiClient";
import { LoginContext } from "../Login/LoginManager";
import { WhaleSighting, createLike, deleteLike } from "../../clients/apiClient";
import { WhaleSighting, rejectSighting, approveSighting } from "../../clients/apiClient";

interface SightingButtonProps {
    isLoggedIn: boolean,
    sighting: WhaleSighting,
    isLiked: boolean,
    isAdminPage: boolean;
    click: boolean;
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SightingButton({
    isLoggedIn,
    sighting,
    isLiked,
    isAdminPage,
    click,
    setClick
}: SightingButtonProps) {
    const loginContext = useContext(LoginContext);
    const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(isLiked);

    const loginContext = useContext(LoginContext);
    const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newLike: NewLike = {
            whaleSightingId: sighting.id,
        }
        createLike(newLike, loginContext.authHeader);
        setIsLikeButtonClicked(true);
    }

    const handleUnlike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newUnlike: NewLike = {
            whaleSightingId: sighting.id,
        }
        deleteLike(newUnlike, loginContext.authHeader);
        setIsLikeButtonClicked(false);
    }

    const handleApprove = (event: React.MouseEvent<HTMLButtonElement>) => {
        approveSighting(sighting.id, loginContext.authHeader);
        setClick(!click);
        event.preventDefault();
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        rejectSighting(sighting.id, loginContext.authHeader);
        setClick(!click);
        event.preventDefault();
    }

    return <>
        {isAdminPage && <>
            <button
                type="button"
                className="button-approve"
                onClick={(event) => handleApprove(event)}>
                Approve
            </button>
            <button
                type="button"
                className="button-delete"
                onClick={(event) => handleDelete(event)}>
                Delete
            </button>
        </>}
        {isLoggedIn && !isLikeButtonClicked &&
        {isLoggedIn && !isLiked && !isAdminPage &&
            <button
                type="button"
                className="button-like"
                onClick={(event) => handleLike(event)}>
                {"\u2661"}
            </button>
        }
        {isLoggedIn && isLikeButtonClicked &&
        {isLoggedIn && isLiked && !isAdminPage &&
            <button
                type="button"
                className="button-unlike"
                onClick={(event) => handleUnlike(event)}>
                {"\u2764"}
            </button>
        }
    </>
}
