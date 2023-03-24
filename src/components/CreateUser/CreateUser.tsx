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
            <label className="user-input">Username  &nbsp;
                <input className="input-field"
                    type="text"
                    name="username"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
            <br /><br />
            <label className="user-input"> Password&nbsp;
                <input className="input-field"
                    type="password"
                    name="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <br /><br />
            <label className="user-input"> ProfileImageUrl&nbsp;
                <input className="input-field"
                    type="url"
                    name="profileImageUrl"
                    id="profileImageUrl"
                    onChange={e => setProfileImageUrl(e.target.value)}
                />
            </label>
            <br /><br />
            <label className="user-input"> UserBio&nbsp;
                <input className="input-field"
                    type="text"
                    name="userBio"
                    id="userBio"
                    onChange={e => setUserBio(e.target.value)}
                />
            </label>
            <br /><br />
            <button className="create-user-submit" type="submit">Submit</button>
        </form>
    </main>
}
