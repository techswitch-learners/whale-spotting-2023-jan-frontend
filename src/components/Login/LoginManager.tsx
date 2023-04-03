import React, {createContext, ReactNode, useState} from "react";

export const LoginContext = createContext({
    authHeader: "",
    isLoggedIn: false,
    isAdmin: false,
    logIn: (authHeader: string, isAdmin: boolean) => {},
    logOut: () => {},
});

interface LoginManagerProps {
    children: ReactNode
}

export function LoginManager(props: LoginManagerProps): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authHeader, setAuthHeader] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    
    function logIn(newAuthHeader: string, isUserAdmin: boolean) {
        setLoggedIn(true);
        setAuthHeader(newAuthHeader);
        setIsAdmin(isUserAdmin);
    }
    
    function logOut() {
        setLoggedIn(false);
        setAuthHeader("");
        setIsAdmin(false);
    }
    
    const context = {
        authHeader: authHeader,
        isLoggedIn: loggedIn,
        isAdmin: loggedIn,
        logIn: logIn,
        logOut: logOut,
    };
    
    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    );
}
