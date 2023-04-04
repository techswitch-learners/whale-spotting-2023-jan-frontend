import { useEffect, useState } from "react";
import { fetchSpeciesQuery, SpeciesSearch, TeethType, TailType, Size, WhaleSpecies } from "../../clients/apiClient";

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

    return <main className="whale-species-table-section">
        <h1 className="info-table-header">Which species did you see?</h1>
        <h3 className="info-table-subheader">Use this table to help identify the whale you saw</h3>
        <table className="whale-species-table">
            <thead>
                <tr className="table-header-row">
                    <th className="table-header-item">Name</th>
                    <th className="table-header-item">Location</th>
                    <th className="table-header-item">Details</th>
                    <th className="table-header-item">Image</th>
                </tr>
            </thead>
            <tbody>
                {listWhaleSpecies?.map(species => (
                    <tr className="table-data-row" key={species.name}>
                        <td className="table-data species-name">{species.name}</td>
                        <td className="table-data">{species.location}</td>
                        <td className="table-data details"><p>Teeth: {TeethType[species.teethType]}</p>
                            <p>Tail: {TailType[species.tailType]}</p>
                            <p>Teeth: {TailType[species.tailType]}</p>
                            <p>Size: {Size[species.size]}</p>
                            <p>Diet: {species.diet}</p>
                        </td>
                        <td className="species-image-container">
                            <img className="species-image" src={species.imageUrl} alt="A lovely whale" />
                        </td>
                    </tr>))}
            </tbody>
        </table>
    </main>
};
