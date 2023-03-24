import "./WhaleSightingViewer.scss";

export function WhaleSightingViewer() {
	return 	<>
		<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
		<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filters">Filters to go here</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			<ul className="whale-sighting-posts">
				<li className="whale-sighting-post">
					Post1 goes here
					<button>Like</button>
				</li>
				<li className="whale-sighting-post">
					Post2 goes here
					<button>Like</button>
				</li>
				<li className="whale-sighting-post">
					Post3 goes here
					<button>Like</button>
				</li>
				<li className="whale-sighting-post">
					Post4 goes here
					<button>Like</button>
				</li>
			</ul>
		</div>	
	</>
}
