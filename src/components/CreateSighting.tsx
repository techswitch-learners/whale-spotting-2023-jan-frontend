import React from "react";  // import React (to provide access to TSX)
import { useState } from "react";
import { FormEvent } from "react";
import './CreateSighting.scss';

//import { useNavigate } from "react-router-dom";

export function CreateSighting() {
    const [date, setDate] = useState<string>("");
    const [photoUrl, setPhotoUrl] = useState<string>("");
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitutde] = useState<number>(0);
    const [numberOfWhales, setNumberOfWhales] = useState<number>(0);
    const [species, setSpecies] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    //const [error, setError] = useState<string>("");

    //const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // call the api function:
        // createSighting(date, photoUrl, latitude, longitude, numberOfWhales, species, description)
        //     .then(() => {
        //     })
        //     .catch((e) => setError(e.message))
    }

    return (
        <main className="create-sighting">
            <h1>Post your whale sighting!</h1>
            {/* <p>{error}</p> */}
            <form className="create-sighting-form" onSubmit={(e) => {
                handleSubmit(e)
            }
            }>
                <label htmlFor="date">
                    Date of Sighting:
                </label>
                <input className="create-sighting-input"
                    type="date"
                    name="date"
                    id="date"
                    required
                    onChange={event => setDate(event.target.value)}
                />

                <br />
                <p></p>
                <label htmlFor="photoUrl">
                    URL of photo:
                </label>
                <input className="create-sighting-input "
                    type="url"
                    name="photoUrl"
                    id="photoUrl"
                    onChange={event => setPhotoUrl(event.target.value)}
                />

                <br />
                <p></p>
                <label htmlFor="latitude">
                    Latitude
                </label>
                <input className="create-sighting-input "
                    type="number"
                    step="any"
                    name="latitude"
                    onChange={event => setLatitude(event.target.valueAsNumber)}
                />

                <br />
                <p></p>
                <label htmlFor="longitude">
                    Longitude:
                </label>
                <input className="create-sighting-input "
                    type="number"
                    step="any"
                    id="longitude"
                    name="longitude"
                    onChange={event => setLongitutde(event.target.valueAsNumber)}
                />

                <br />
                <p></p>
                <label htmlFor="number">
                    Number of Whales:
                </label>
                <input className="create-sighting-input "
                    type="number"
                    id="number"
                    name="number"
                    onChange={event => setNumberOfWhales(event.target.valueAsNumber)}
                />

                <br />
                <p></p>
                <label htmlFor="species">
                    Species:
                </label>
                <input className="create-sighting-input "
                    type="string"
                    id="species"
                    name="species"
                    onChange={event => setSpecies(event.target.value)}
                />
                
                <br />
                <p></p>
                <label htmlFor="description">
                    Description:
                </label>
                <input className="create-sighting-input "
                    type="string"
                    id="description"
                    name="description"
                    onChange={event => setDescription(event.target.value)}
                />
                <br />
                <p></p>
                <button className="create-sighting-submit" type="submit">Submit</button>
            </form>
        </main>
    )
}
