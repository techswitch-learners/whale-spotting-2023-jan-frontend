import "./WhaleSightingDetail.scss"
import { SightingDetail } from "../SightingDetail/SightingDetail";
import { useParams } from "react-router-dom";

export const WhaleSightingDetail: React.FunctionComponent = () => {
    const { id } = useParams();
    if (id === undefined) {
        return <SightingDetail sightingId="0" />
    }
    return <main>
        <h1 className="main-header">Whale Sighting Detail Page</h1>
        <section className="float-container">
            <div className="float-child1">
                <SightingDetail sightingId={id} />
                </div>
                <div className="float-child2">
                MapDetail component
            </div>
        </section>
    </main>
};
