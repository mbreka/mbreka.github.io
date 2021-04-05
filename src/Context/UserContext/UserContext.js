import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        loggedIn: false,
        username: '',
        password: '',
        liked: [],
        cart: [],
    });
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider> 
    );
}