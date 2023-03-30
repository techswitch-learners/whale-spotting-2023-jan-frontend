import { useEffect, useState } from "react";
import SightingList from "./SightingList";
import { fetchAllApprovedSightings, WhaleSighting } from "../../clients/apiClient";
import "./WhaleSightingViewer.scss";

export function WhaleSightingViewer() {

	const [page, setPage] = useState(1);
	
	const [sightings, setSightings] = useState<WhaleSighting[]>();

    useEffect(() => {
        fetchAllApprovedSightings()
			.then(data => data.filter(a => a.approvalStatus == 1))
            .then(data => setSightings(data));
      }, []);

	if (!sightings) return <p>Waiting for data...</p>

	return 	<>
		<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
		<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filters">Filters to go here</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			<SightingList pageNum = {page} sightings = {sightings}/>
			<div className="page-buttons">
				{page > 1 ? <p className="prevlink" onClick={() => setPage(page - 1)}>Previous</p> :<></>}
            	{(sightings.length > page * 12) ? <p className="nextlink" onClick={() => setPage(page + 1)}>Next</p> : <></>}
	  		</div>
		</div>
	</>
}
