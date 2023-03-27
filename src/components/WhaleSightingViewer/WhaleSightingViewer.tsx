import "./WhaleSightingViewer.scss";
import SightingList from "./SightingList";

export function WhaleSightingViewer() {
	return 	<>
		<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
		<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filters">Filters to go here</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			<SightingList />
		</div>
		</>
}

