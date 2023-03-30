import React from "react";
import './UserLeaderBoard.scss'

export const UserLeaderBoard: React.FC = () => {
    return <main className="user-leaderboard">
        <h1 className="leaderboard-header">Leaderboard</h1>
        <table className="leaderboard-table">
            <tr className="leaderboard-header-row">
                <th className="leaderboard-table-header">Username</th>
                <th className="leaderboard-table-header">Number of sightings</th>
                <th className="leaderboard-table-header">Likes given</th>
                <th className="leaderboard-table-header">Likes received</th>
                <th className="leaderboard-table-header">Badges</th>
            </tr>
            <tr className="leaderboard-row">
                <td className="leaderboard-data">Data to be populated</td>
                <td className="leaderboard-data">Data to be populated</td>
                <td className="leaderboard-data">Data to be populated</td>
                <td className="leaderboard-data">Data to be populated</td>
                <td className="leaderboard-data">Data to be populated</td>
            </tr>
        </table>
    </main>
}
