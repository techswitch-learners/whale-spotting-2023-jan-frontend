import { Login } from "../Login/Login";
import "./WhaleSightingViewer.scss";
import { WhaleSightingFilters } from "./WhaleSightingFilters";
import { useState,useEffect } from "react";
import { MapChart } from "../TripPlanner/Map";
import { fetchAllApprovedSightings, WhaleSighting } from "../../clients/apiClient";


interface WhaleSightingViewerProps {
	loggedIn: boolean;
}

export function WhaleSightingViewer({ loggedIn }: WhaleSightingViewerProps) {
	const [selectedWhaleSpecies, setSelectedWhaleSpecies] = useState("");
	const [selectedColour, setSelectedColour] = useState("");
	const [selectedTailType, setSelectedTailType] = useState("");
	const [selectedSize, setSelectedSize] = useState("");
	const [minLat, setMinLat] = useState("");
	const [maxLat, setMaxLat] = useState("");
	const [minLog, setMinLog] = useState("");
	const [maxLog, setMaxLog] = useState("");
	const [mapView, setMapView] = useState(false);
	const [sightingsList,setSightingsList] = useState<WhaleSighting[]>([]); 

	//set State that togggles between list view and map view. 
	// When a view is set, the alternative return statement should not run OR can be changed to display: none

	function handleSearch(event: any) {
		event.preventDefault();
	}

	useEffect(() => {
        fetchAllApprovedSightings()
            .then(response => setSightingsList(response));
    }, []);

	if (mapView) {
		return <>
			<button onClick={() => setMapView(false)}>Switch to Posts View</button>
			<MapChart whaleSightings={sightingsList} />
		</>
	} else {
		return <>
			<h2 className="whale-sighting-heading">Whale Sighting Viewer</h2>
			<div className="whale-sighting-page">
				<div className="whale-sighting-map-view-button">
					<button onClick={() => setMapView(true)}>Switch to Map View</button>
				</div>
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
				<ul className="whale-sighting-posts">
					<li className="whale-sighting-post">
						Post1 goes here
						{loggedIn ? <button>Like</button> : <></>}
					</li>
					<li className="whale-sighting-post">
						Post2 goes here
						{loggedIn ? <button>Like</button> : <></>}
					</li>
					<li className="whale-sighting-post">
						Post3 goes here
						{loggedIn ? <button>Like</button> : <></>}
					</li>
					<li className="whale-sighting-post">
						Post4 goes here
						{loggedIn ? <button>Like</button> : <></>}
					</li>
				</ul>
				{!loggedIn
					? <><h3>Log in below to like posts:</h3>
						<Login /></>
					: <></>}
			</div>
		</>
	}
}

