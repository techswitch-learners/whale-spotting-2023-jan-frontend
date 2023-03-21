import "./WhaleSightingViewer.scss";

export function WhaleSightingViewer() {
	return 	<div>
			<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
			<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filters">Filters to go here</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			<div className="whale-sighting-post">
				<div>
					<div>Post1 goes here</div>
					<button>Like</button>
				</div>
				<div>
					<div>Post2 goes here</div>
					<button>Like</button>
				</div>
				<div>
					<div>Post3 goes here</div>
					<button>Like</button>
				</div>
			</div>
		</div>	
	</div>
}
