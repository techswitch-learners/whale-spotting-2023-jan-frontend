import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import { NewUser } from "../../clients/apiClient";
import { createNewUser } from "../../clients/apiClient";
import { ChangeEvent } from "react";
import './CreateUser.scss';

export function CreateUser() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [profileImageUrl, setProfileImageUrl] = useState<string>("");
    const [userBio, setUserBio] = useState<string>("");
    const [userType, setUserType] = useState<string>("Member");
    const [status, setStatus] = useState<string>("");

    const userTypes = ["Member", "Admin"];

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newUser: NewUser = {
            username: username,
            password: password,
            userBio: userBio,
            profileImageUrl: profileImageUrl,
            userType: userType,
        }

        createNewUser(newUser)
            .then(() => {
                setStatus("Great! You have created a new user.")
            })
            .catch((e) => setStatus(e.message))
    }

    const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setUserType(event.target.value);
    };

    return <main className="create-user">
        <h1 className="createUser-Title">Create a New User</h1>
        <p className="create-user-status-msg">{status}</p>
        <form className="create-user-form"
            onSubmit={(e) => { handleSubmit(e) }}>
            <div className="user-input-div">
                <label className="user-input-label">Username: </label>
                <input className="input-field"
                    type="text"
                    name="username"
                    id="username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="user-input-div">
                <label className="user-input-label">Password: </label>
                <input className="input-field"
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="user-input-div">
                <label className="user-input-label" htmlFor="profileImageUrl">Profile Picture: </label>
                <input className="input-field"
                    type="url"
                    name="profileImageUrl"
                    id="profileImageUrl"
                    placeholder="Enter image url"
                    required
                    onChange={e => setProfileImageUrl(e.target.value)}
                />
            </div>
            <div className="user-input-div">
                <label className="user-input-label" htmlFor="userBio">User Bio: </label>
                <input className="input-field"
                    type="text"
                    name="userBio"
                    id="userBio"
                    required
                    onChange={e => setUserBio(e.target.value)}
                />
            </div>
            <br /><br />
            <div className="user-input-div">
                <label className="user-input-label" htmlFor="user-type">User Type: </label>
                <select className="input-field" name="user-type"
                    id="user-type"
                    value={userType}
                    onChange={handleTypeChange}
                >
                    {userTypes.map((ut) => (
                        <option key={ut} value={ut}>
                            {ut}
                        </option>
                    ))}
                </select>
            </div>
            <button className="create-user-submit" type="submit">Submit</button>
        </form>
    </main>
}
