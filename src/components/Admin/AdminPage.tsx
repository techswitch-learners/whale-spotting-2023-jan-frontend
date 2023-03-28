import "./AdminPage.scss"

export function AdminPage() {

    const handleApprove = (event: React.MouseEvent<HTMLButtonElement>, whaleSightingId: number) => {
        event.preventDefault();
        console.log(`Approved whale sighting Id ${whaleSightingId}`)
    }

	return 	<>
		<h2 className="whale-sighting-approval-heading">Admin Approval Page</h2>
		<div className=".whale-sighting-approval-page">
        <ul className="whale-sighting-approval-posts">
				<li className="whale-sighting-approval-post">
					Post1 goes here
					<button type="button" onClick={(event) => handleApprove(event, 0)}>Approve</button>
				</li>
				<li className="whale-sighting-approval-post">
					Post2 goes here
					<button>Approve</button>
				</li>
				<li className="whale-sighting-approval-post">
					Post3 goes here
					<button>Approve</button>
				</li>
				<li className="whale-sighting-approval-post">
					Post4 goes here
					<button>Approve</button>
				</li>
			</ul>
		</div>	
	</>
}
