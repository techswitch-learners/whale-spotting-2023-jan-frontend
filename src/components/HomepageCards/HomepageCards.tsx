import { Link } from "react-router-dom";
import "./HomepageCards.scss";

export function HomepageCards() {
    return (
        <main>
            <div className="container">
                <div className="card">
                    <p className="sightings-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjRxIxW6wVt9BxcXd8NF0RLq3zs_SsvB5zA&usqp=CAU" />
                    </p>
                    <p className="image-link-text">
                        <Link to="/plan-trip">Plan a Whale Spotting Trip</Link>
                    </p>
                </div>
                <div className="card">
                    <p className="sightings-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbHzahnFPKTz-IYvpTiECRiNMI83Ye1Dhkw&usqp=CAU"/>
                    </p>
                    <p className="image-link-text">
                        <Link to="/whale/about">Everything About Whales</Link>
                    </p>
                </div>
                <div className="card">
                    <p className="sightings-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgry3ur6N2EkWP-T-kAvwvbC-GtYkz8LoQw&usqp=CAU" />
                    </p>
                    <p className="image-link-text">
                        <Link to="/sightings">Places for Whale Spotting</Link>
                    </p>
                </div>
                <div className="card">
                    <p className="sightings-image">
                        <img src="../../../../public/award.jpg "/>
                    </p>
                    <p className="image-link-text">
                        <Link to="/users/leaderboard">Check Out The Champions</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
