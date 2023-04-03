import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FormEvent } from "react";
import { LoginContext } from "../Login/LoginManager";
import { createSighting, fetchSpeciesQuery, SpeciesSearch, WhaleSpecies } from "../../clients/apiClient";
import { NewSighting } from "../../clients/apiClient";
import './CreateSighting.scss';

export function CreateSighting(){
    const loginContext = useContext(LoginContext);
    const [date, setDate] = useState<Date>(new Date());
    const [photoUrl, setPhotoUrl] = useState<string>("");
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitutde] = useState<number>(0);
    const [selectedWhaleSpecies, setSelectedWhaleSpecies] = useState("");
    const [numberOfWhales, setNumberOfWhales] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [listWhaleSpecies, setListWhaleSpecies] = useState<WhaleSpecies[]>([]);

    const search: SpeciesSearch =
        {
            tailType: null,
            size: null,
            colour: null
        };

    useEffect(() => {
        fetchSpeciesQuery(search)
            .then(response => {
                setListWhaleSpecies(response);
                setSelectedWhaleSpecies(response[0].name);
            });
    }, []);
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(loginContext.authHeader);
        const newSighting: NewSighting = {
            dateOfSighting: date,
            locationLatitude: latitude,
            locationLongitude: longitude,
            photoImageURL: photoUrl,
            numberOfWhales: numberOfWhales,
            description: description,
            whaleSpecies: selectedWhaleSpecies
        }
    
        createSighting(newSighting, loginContext.authHeader)
            .then(() => { setStatus("Great! Your sighting has been submitted successfully.")
            })
            .catch((e) => setStatus(e.message))
    }

    return (
    <main className="create-sighting">
        <h1 className="sighting-form-title">Post your whale sighting!</h1>
        <p className="status-msg">{status}</p>
        <form className="create-sighting-form"
            onSubmit={(e) => { handleSubmit(e) }}>
            <div className="sighting-field">
                <label className="create-sighting-label" htmlFor="date">
                    Date of Sighting:
                </label>
                <input className="create-sighting-input"
                    type="date"
                    name="date"
                    id="date"
                    required
                    onChange={event => setDate(new Date(event.target.value))}
                />
            </div>

            <div className="sighting-field">
                <label className="create-sighting-label" htmlFor="photoUrl">
                    URL of photo:
                </label>
                <input className="create-sighting-input "
                    type="url"
                    name="photoUrl"
                    id="photoUrl"
                    onChange={event => setPhotoUrl(event.target.value)}
                />
            </div>

            <div className="sighting-field">
                <label className="create-sighting-label" htmlFor="latitude">
                    Latitude:
                </label>
                <input className="create-sighting-input"
                    type="number"
                    step="any"
                    name="latitude"
                    onChange={event => setLatitude(event.target.valueAsNumber)}
                />
            </div>

            <div className="sighting-field">
                <label className="create-sighting-label" htmlFor="longitude">
                    Longitude:
                </label>
                <input className="create-sighting-input"
                    type="number"
                    step="any"
                    id="longitude"
                    name="longitude"
                    onChange={event => setLongitutde(event.target.valueAsNumber)}
                />
            </div>

            <div className="sighting-field">
                <label className="create-sighting-label" htmlFor="number">
                    Number of Whales:
                </label>
                <input className="create-sighting-input"
                    type="number"
                    id="number"
                    name="number"
                    onChange={event => setNumberOfWhales(event.target.valueAsNumber)}
                />
            </div>

            <div className="sighting-field">
                <label htmlFor="species" className="create-sighting-label">
                    Species:
                </label>
                <select className="create-sighting-input" value={selectedWhaleSpecies} 
                        onChange={event => setSelectedWhaleSpecies(event.target.value)}>
                            {/* <option value="">----</option> */}
                            {listWhaleSpecies.map(ws => (
                                <option key={ws.id} value={ws.name}>
                                    {ws.name}
                                </option>
                            ))}
                </select>
            </div>

            <div className="sighting-field">
                <label htmlFor="description" className="create-sighting-label">
                    Description:
                </label>
                <textarea className="create-sighting-input"
                    id="description"
                    name="description"
                    onChange={event => setDescription(event.target.value)}
                />
            </div>

            <button id="create-sighting-submit" className="create-sighting-submit" type="submit">Submit</button>
        </form>
    </main>
    )
}
