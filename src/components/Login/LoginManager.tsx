import React, {createContext, ReactNode, useState} from "react";

export const LoginContext = createContext({
    authHeader: "",
    username: "",
    isLoggedIn: false,
    isAdmin: false,
    logIn: (authHeader: string, isAdmin: boolean, username: string) => {},
    logOut: () => {},
});

interface LoginManagerProps {
    children: ReactNode
}

export function LoginManager(props: LoginManagerProps): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authHeader, setAuthHeader] = useState("");
    const [username, setUsername] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    
    function logIn(newAuthHeader: string, isUserAdmin: boolean, username: string) {
        setLoggedIn(true);
        setAuthHeader(newAuthHeader);
        setIsAdmin(isUserAdmin);
        setUsername(username);
    }
    
    function logOut() {
        setLoggedIn(false);
        setAuthHeader("");
        setIsAdmin(false);
    }
    
    const context = {
        authHeader: authHeader,
        username: username,
        isLoggedIn: loggedIn,
        isAdmin: isAdmin,
        logIn: logIn,
        logOut: logOut,
    };
    
    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    );
}
