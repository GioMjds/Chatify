import { createContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";

const initState = {
    auth: JSON.parse(localStorage.getItem("chat_user")) || null,
    user: null,
}

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initState);

    useEffect(() => {
        localStorage.setItem("chat_user", JSON.stringify(state.auth));
    }, [state.auth]);

    return (
        <Context.Provider value={{
            auth: state.auth,
            user: state.user,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}