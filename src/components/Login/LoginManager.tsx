import React, {createContext, ReactNode, useState} from "react";

export const LoginContext = createContext({
    authHeader: "",
    isLoggedIn: false,
    isAdmin: false,
    setUserAdmin: (boolean:boolean)=>{},
    logIn: (value: string) => {},
    logOut: () => {},
});

interface LoginManagerProps {
    children: ReactNode
}

export function LoginManager(props: LoginManagerProps): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authHeader, setAuthHeader] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    
    function logIn(newAuthHeader: string) {
        setLoggedIn(true);
        setAuthHeader(newAuthHeader);
    }
    
    function setUserAdmin(boolean: boolean) {
        setIsAdmin(boolean);
    }

    function logOut() {
        setLoggedIn(false);
        setAuthHeader("");
    }
    
    const context = {
        authHeader: authHeader,
        isLoggedIn: loggedIn,
        isAdmin: loggedIn,
        setUserAdmin: setUserAdmin,
        logIn: logIn,
        logOut: logOut,
    };
    
    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    );
}