import React, { useState, useEffect } from "react";
import './UserLeaderBoard.scss'

export const UserLeaderBoard: React.FC = () => {
    return <main className="user-leaderboard">
        <h1 className="leaderboard-header">Leaderboard</h1>
        <table className="leaderboard-table">
            <tr className="leaderboard-row">
                <th className="leaderboard-header">Username</th>
                <th className="leaderboard-header">Number of sightings</th>
                <th className="leaderboard-header">Likes given</th>
                <th className="leaderboard-header">Likes received</th>
                <th className="leaderboard-header">Badges</th>
            </tr>
        </table>
    </main>
}