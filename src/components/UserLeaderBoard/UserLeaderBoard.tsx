import React, { useState, useEffect } from "react";
import './UserLeaderBoard.scss'

export const UserLeaderBoard: React.FC = () => {
    return <main className="user-leaderboard">
        <h1 className="leaderboard-header">LeaderBoard</h1>
        <ol className="leaderboard-list">
            <li className="leaderboard-item">Data to be populated</li>
        </ol>
    </main>
}