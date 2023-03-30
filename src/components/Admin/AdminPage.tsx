import { useEffect, useState } from "react";
import { fetchAllApprovedSightings, WhaleSighting } from "../../clients/apiClient";
import "./AdminPage.scss"
import AdminSightingList from "./AdminSightingList";

export function AdminPage() {

	const [adminSightings, setAdminSightings] = useState<WhaleSighting[]>();

    useEffect(() => {
        fetchAllApprovedSightings()
			.then(data => data.filter(a => a.approvalStatus == 0))
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
