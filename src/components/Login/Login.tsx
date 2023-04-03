import "./Login.scss";
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginManager";
import { fetchLogin } from "../../clients/apiClient";

export function Login() {
	const loginContext = useContext(LoginContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string>();

	const [showPassword, setShowPassword] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const authHeader = btoa(`${username}:${password}`);
		try {
			await fetchLogin(authHeader);
		} catch (e) {
			setError((e as Error).message);
			return;
		}
		// const isAdministrator = await isAdmin(username);
		loginContext.logIn(authHeader, username);
		// alert to notify user they've successfully logged in
		console.log("You're logged in");
		setError(undefined);
	}

	return <div>
		<h1>Login</h1>
		<form className="login-form" onSubmit={handleSubmit}>
			{error &&
				<p>Login failed, please try again.</p>}
			<label className="input-field">
				Username
				<div>
					<input
						type="text"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
			</label>
			<label className="input-field">
				Password
				<div className="password-input">
					<input
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button
						className="password-toggle"
						type="button"
						onClick={() => setShowPassword(!showPassword)}>👁
					</button>
				</div>
			</label>
			<button className="login-button" type="submit">Login</button>
			<p>{!loginContext.isLoggedIn ? '' : 'Successfully logged in!'}</p>
		</form>
		<Link to="/user/create">Create account</Link>
	</div>
}
