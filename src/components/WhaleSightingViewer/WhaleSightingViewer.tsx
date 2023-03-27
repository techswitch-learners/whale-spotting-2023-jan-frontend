import { useEffect, useState } from "react";
import SightingList from "./SightingList";
import { getWhaleSightings, NewSighting } from "../../clients/apiClient";
import "./WhaleSightingViewer.scss";

export function WhaleSightingViewer() {

	const [page, setPage] = useState(1);

	const [sightingsList, setSightingsList] = useState<NewSighting[]>();

    useEffect(() => {
        getWhaleSightings()
            .then(data => setSightingsList(data));
      }, []);


	if (!sightingsList) return <p>Waiting for data...</p>

	return 	<>
		<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
		<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filters">Filters to go here</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			{<SightingList pageNum = {page} sightingsList = {sightingsList}/>}
			<div className="page-buttons">
				{page > 1 ? <button onClick={() => setPage(page - 1)}>Previous</button> :<></>}
            	{(sightingsList.length > page * 12) ? <button onClick={() => setPage(page + 1)}>Next</button> : <></>}
	  		</div>
		</div>
	</>
}
