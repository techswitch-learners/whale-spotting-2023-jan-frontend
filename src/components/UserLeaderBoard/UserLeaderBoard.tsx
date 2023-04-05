import React, { useEffect, useState } from "react";
import { fetchLeaderboard, UserLeaderboardResponse } from "../../clients/apiClient";
import './UserLeaderBoard.scss'

export const UserLeaderBoard: React.FC = () => {

    const [listLeaderboard, setListLeaderboard] = useState<UserLeaderboardResponse[]>();

    useEffect(() => {
        fetchLeaderboard()
            .then(response => setListLeaderboard(response));
    }, []);

    if (!listLeaderboard) return <p>Waiting for data...</p>

    return <main className="user-leaderboard">
        <h1 className="leaderboard-header">Leaderboard</h1>
        <table className="leaderboard-table">
            <tr className="leaderboard-header-row">
                <th className="leaderboard-table-header">Username</th>
                <th className="leaderboard-table-header">Number Of Sightings</th>
                <th className="leaderboard-table-header">Likes Received</th>
                <th className="leaderboard-table-header">Badges</th>
            </tr>
            {listLeaderboard.map(lb =>
            <tr className="leaderboard-row">
                <>
                <td className="leaderboard-data"> {lb.userName}</td>
                <td className="leaderboard-data">{lb.numberOfWhaleSightings}</td>
                <td className="leaderboard-data">{lb.likesReceived}</td>
                <td className="leaderboard-badge">
                {(() => {
                        if (lb.numberOfWhaleSightings >= 5) {
                            return <img className="badges" src="../../../public/golden_badge.jpg" />;
                        }else if (lb.numberOfWhaleSightings >= 3){
                            return <img className="badges" src="../../../public/silver_badge.jpg" />;
                        }else{
                            return <img className="badges" src="../../../public/bronze_badge.jpg" />;
                        }
                    })()}
                </td>
                </>
             </tr>
             )}
        </table>
    </main>
}
