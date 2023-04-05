import "./WhaleSightingDetail.scss"
import { SightingDetail } from "../SightingDetail/SightingDetail";
import { useParams } from "react-router-dom";
import { MapChart } from "../TripPlanner/Map";
import { fetchSightingById, WhaleSighting } from "../../clients/apiClient";
import { useEffect, useState } from "react";

export const WhaleSightingDetail: React.FunctionComponent = () => {
    const { id } = useParams();
    const [sighting, setSighting] = useState<WhaleSighting>();

    if (id === undefined) {
        return <h1> No Whale Sighting id Provided </h1>
    }

    useEffect(() => {
        fetchSightingById(parseInt(id))
            .then(response => setSighting(response));
    }, [id]);

    if (!sighting) {
        return <section>No Sightings found for the provided id</section>
    }

    return <main>
        <section className="header-section">
            <h1 className="main-header">Whale Sighting Detail Page</h1>
        </section>
        <section className="float-container">
            <div className="float-child1">
                <SightingDetail whaleSighting={sighting} />
            </div>
            <div className="float-child2">
                <MapChart whaleSightings={[sighting]}/>
            </div>
        </section>
    </main>
};
