import React, { useContext, useEffect, useState } from "react";
import "./SightingList.scss";
import { WhaleSighting, rejectSighting, approveSighting } from "../../clients/apiClient";
import { LoginContext } from "../Login/LoginManager";

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
    const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleUnlike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleApprove = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(sighting.id, loginContext.authHeader);
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
        {isLoggedIn && !isLiked && !isAdminPage &&
            <button
                type="button"
                className="button-like"
                onClick={(event) => handleLike(event)}>
                {"\u2661"}
            </button>
        }
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
