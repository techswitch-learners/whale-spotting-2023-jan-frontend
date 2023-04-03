import { useEffect, useState } from "react";
import SightingList from "./SightingList";
import { fetchAllApprovedSightings, WhaleSighting } from "../../clients/apiClient";
import { Login } from "../Login/Login";
import "./WhaleSightingViewer.scss";
import { WhaleSightingFilters } from "./WhaleSightingFilters";
import { useState } from "react";

export function WhaleSightingViewer() {

	const [page, setPage] = useState(1);

	const [sightings, setSightings] = useState<WhaleSighting[]>();

	useEffect(() => {
		fetchAllApprovedSightings()
			.then(data => setSightings(data));
	}, []);

	if (!sightings) return <p>Waiting for data...</p>

	return <>
interface WhaleSightingViewerProps {
	loggedIn: boolean;
}
		<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
		<div className="whale-sighting-page">
			<div className="whale-sighting-map-view-button">Switch to Map View</div>
			<div className="whale-sighting-filter">
				<WhaleSightingFilters
				selectedWhaleSpecies={selectedWhaleSpecies} setSelectedWhaleSpecies={setSelectedWhaleSpecies}
				selectedColour={selectedColour} setSelectedColour={setSelectedColour}
				selectedTailType={selectedTailType} setSelectedTailType={setSelectedTailType}
				selectedSize={selectedSize} setSelectedSize={setSelectedSize}
				setMinLat={setMinLat} setMaxLat={setMaxLat} setMinLog={setMinLog} setMaxLog={setMaxLog} 
				handleSearch={handleSearch} />
			</div>
			<div className="whale-sighting-sort">Sort to go here</div>
			<SightingList pageNum={page} sightings={sightings} />
			<div className="page-buttons">
				{page > 1
					?
					<p className="prevlink" onClick={() => setPage(page - 1)}>
						Previous
					</p>
					: <></>}
				{(sightings.length > page * 12)
					?
					<p className="nextlink" onClick={() => setPage(page + 1)}>
						Next
					</p>
					: <></>}
			</div>
		</div>
			{!loggedIn 
			    ? <><h3>Log in below to like posts:</h3>
			        <Login /></>
			    : <></>}
	</>
}
