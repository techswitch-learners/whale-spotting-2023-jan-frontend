import { useEffect, useState } from "react";
import SightingList from "./SightingList";
import { fetchAllApprovedSightings, WhaleSighting, getPendingSightings } from "../../clients/apiClient";
import { Login } from "../Login/Login";
import "./WhaleSightingViewer.scss";
import { WhaleSightingFilters } from "./WhaleSightingFilters";
import { MapChart } from "../TripPlanner/Map";

interface WhaleSightingViewerProps {
	loggedIn: boolean,
	isAdminPage: boolean;
}

export function WhaleSightingViewer({ loggedIn, isAdminPage }: WhaleSightingViewerProps) {

	const [page, setPage] = useState(1);
	const [sightings, setSightings] = useState<WhaleSighting[]>();
	const [click, setClick] = useState<boolean>(true);
	const [sightings, setSightings] = useState<WhaleSighting[]>([]);
	const [mapView, setMapView] = useState<boolean>(false);

	useEffect(() => {
		if (!isAdminPage) {
			fetchAllApprovedSightings()
				.then(data => setSightings(data));
		}
		else {
			getPendingSightings()
				.then(data => setSightings(data));
		}
	}, [click])
	}, [])


	if (!sightings) return <p>Waiting for data...</p>
	if (mapView) {
		return <>
		<button className="whale-sighting-list-view-button" onClick={() => setMapView(false)}>Go to List View</button>
		<MapChart whaleSightings={sightings} /></>
	} else {

	return <>

		<h1 className="whale-sighting-heading">Whale Sighting Viewer</h1>
		<div className="whale-sighting-page">
			{!isAdminPage && <div className="whale-sighting-map-view-button">Switch to Map View</div>}
			<div className="whale-sighting-filter">
				<WhaleSightingFilters setSightings={setSightings} />
			</div>


			<div className="whale-sighting-sort">Sort to go here</div>
			<SightingList pageNum={page} sightings={sightings} loggedIn={loggedIn} isAdminPage={isAdminPage} click={click} setClick={setClick} />
			<SightingList pageNum={page} sightings={sightings} loggedIn={loggedIn} isAdmin={isAdminPage}/>

			<div className="whale-sighting-sort">Sort to go here</div>
				<SightingList 
				pageNum={page} 
				sightings={sightings} 
				loggedIn={loggedIn} 
				isAdmin={isAdminPage}/>
        
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
}
