import {createContext } from 'react';

export const UserContext = createContext({
    user: null,
    setUser: () => {}
    // isLoggedIn: false,
    // user: null,
    // login: () => {},
    // logout: () => {}
});
