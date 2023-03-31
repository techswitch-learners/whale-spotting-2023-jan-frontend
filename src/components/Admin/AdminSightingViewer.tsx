import { useEffect, useState } from "react";
import { getPendingSightings, WhaleSighting } from "../../clients/apiClient";
import "./AdminPage.scss"
import AdminSightingList from "./AdminSightingList";

export function AdminSightingViewer() {

	const [adminSightings, setAdminSightings] = useState<WhaleSighting[]>();

    useEffect(() => {
        getPendingSightings()
            .then(data => setAdminSightings(data));
      }, []);

	if (!adminSightings) return <p>Waiting for data...</p>

	return 	<>
		<h2 className="whale-sighting-approval-heading">Admin Approval Page</h2>
		<div className=".whale-sighting-approval-page">
			<AdminSightingList sightings = {adminSightings} />
		</div>	
	</>
}
