import { Login } from "../Login/Login";
import "./WhaleSightingViewer.scss";
import { WhaleSightingFilters } from "./WhaleSightingFilters";
import { useState } from "react";

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

	function handleSearch(event: any) {
		event.preventDefault();
	}
  
	return <>
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
