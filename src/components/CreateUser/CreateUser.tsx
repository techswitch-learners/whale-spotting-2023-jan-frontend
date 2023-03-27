import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import './CreateUser.scss';

export function CreateUser() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [profileImageUrl, setProfileImageUrl] = useState<string>("");
    const [userBio, setUserBio] = useState<string>("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return <main className="create-user">
        <h1 className="createUser-Title">Create User</h1>
        <form className="create-user-form"
            onSubmit={(e) => { handleSubmit(e) }}>
            <div className="user-input-div">
                <label className="user-input-label">Username</label>
                <input className="input-field"
                    type="text"
                    name="username"
                    id="username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <br /><br />
            <div className="user-input-div">
                <label className="user-input-label">Password</label>
                <input className="input-field"
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <br /><br />
            <div className="user-input-div">
                <label className="user-input-label" htmlFor="profileImageUrl">Profile Image Url</label>
                <input className="input-field"
                    type="url"
                    name="profileImageUrl"
                    id="profileImageUrl"
                    required
                    onChange={e => setProfileImageUrl(e.target.value)}
                />

            </div>
            <br /><br />
            <div className="user-input-div">
                <label className="user-input-label" htmlFor="userBio">User Bio</label>
                <input className="input-field"
                    type="text"
                    name="userBio"
                    id="userBio"
                    required
                    onChange={e => setUserBio(e.target.value)}
                />
            </div>
            <br /><br />
            <button className="create-user-submit" type="submit">Submit</button>
        </form>
    </main>
}
