import { useEffect, useState } from "react";
import { fetchSpeciesQuery, SpeciesSearch, WhaleSpecies } from "../../clients/apiClient";

import "./SpeciesIdentification.scss"

export const SpeciesIdentification: React.FunctionComponent = () => {
    const [listWhaleSpecies, setListWhaleSpecies] = useState<WhaleSpecies[]>();

    let search: SpeciesSearch =
    {
        tailType: null,
        size: null,
        colour: null
    };

    useEffect(() => {
        fetchSpeciesQuery(search)
            .then(response => setListWhaleSpecies(response));
    }, []);

    return <main>
        <div>
            {listWhaleSpecies?.map(i => i.teethType)}
        </div>
        <h1 className="main-header">Species Identification Page</h1>
        <h2 className="sub-header">Use the filters to get species Information</h2>
        <section className="filter-container">
            <div className="filter-item">Tail Type</div>
            <div className="filter-item">Size</div>
            <div className="filter-item">Colour</div>
        </section>
        <div className="info-table-header">Species Information </div>
        <table className="whale-species-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Tail Type</th>
                    <th>Teeth Type</th>
                    <th>Size</th>
                    <th>Location</th>
                    <th>Diet</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {listWhaleSpecies?.map(species => (
                    <tr key={species.name}>
                        <td>{species.name}</td>
                        <td>{species.tailType}</td>
                        <td>{species.teethType}</td>
                        <td>{species.size}</td>
                        <td>{species.location}</td>
                        <td>{species.diet}</td>
                        <td>
                            <img className="info-image" src={species.imageUrl} alt="A lovely whale" />
                        </td>
                    </tr>))}
            </tbody>
        </table>
    </main>
};
