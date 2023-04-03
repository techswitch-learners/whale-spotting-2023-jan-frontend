import "./SightingDetail.scss"
import { WhaleSighting } from "../../clients/apiClient";
import "./SightingDetail.scss";

interface SightingDetailProps {
    whaleSighting: WhaleSighting;
}
export function SightingDetail({ whaleSighting }: SightingDetailProps): JSX.Element {
    return (
        <main className="sighting-detail">
            <p className="sighting-header">Sighting Details</p>
            <section className="sighting-detail-section">
                <img className="sighting-image" src={whaleSighting.photoImageURL} />
                <div className="sighting-info">Location Latitude : {whaleSighting.locationLatitude} </div>
                <div className="sighting-info">Location Longitude : {whaleSighting.locationLongitude} </div>
                <div className="sighting-info">Date Of Sighting : {new Date(whaleSighting.dateOfSighting).toLocaleDateString('en-GB')}</div>
                <div className="sighting-info">Number Of Whales : {whaleSighting.numberOfWhales}</div>
                <div className="sighting-info">Description : {whaleSighting.description}</div>
                <div className="sighting-info">Whale Species : {whaleSighting.whaleSpecies.name}</div>
                <div className="sighting-info">User : {whaleSighting.user.username}</div>
            </section>
        </main>
    );
}
