import React, { useEffect, useState } from "react";
import "./SightingList.scss";
import { WhaleSighting } from "../../clients/apiClient";

interface SightingButtonProps {
    isLoggedIn: boolean,
    sighting: WhaleSighting,
    isLiked: boolean,
    isAdmin: boolean;
}

export default function SightingButton({
    isLoggedIn,
    sighting,
    isLiked,
    isAdmin
}: SightingButtonProps) {

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

    return <>
        {isAdmin && <>
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
        {isLoggedIn && !isLiked &&
            <button
                type="button"
                className="button-like"
                onClick={(event) => handleLike(event)}>
                {"\u2661"}
            </button>
        }
        {isLoggedIn && isLiked &&
            <button
                type="button"
                className="button-unlike"
                onClick={(event) => handleUnlike(event)}>
                {"\u2764"}
            </button>
        }
    </>
}
