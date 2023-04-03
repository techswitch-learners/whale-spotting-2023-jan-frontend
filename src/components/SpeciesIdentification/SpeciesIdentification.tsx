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

    return <main>
        <h1 className="main-header">Species Identification Page</h1>
        <h2 className="sub-header">Use the filters to get species Information</h2>
        <section className="filter-container">
            <div className="filter-item">Tail Type</div>
            <div className="filter-item">Size</div>
            <div className="filter-item">Colour</div>
        </section>
        <h2 className="info-table-header">Species Information </h2>
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
                        <td>{TailType[species.tailType]}</td>
                        <td>{TeethType[species.teethType]}</td>
                        <td>{Size[species.size]}</td>
                        <td>{species.location}</td>
                        <td>{species.diet}</td>
                        <td className="species-image-container">
                            <img className="species-image" src={species.imageUrl} alt="A lovely whale" />
                        </td>
                    </tr>))}
            </tbody>
        </table>
    </main>
};
