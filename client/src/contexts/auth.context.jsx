import { createContext, useContext, useState, useEffect } from "react";
import routes from "../services/auth.service";

export const AuthContext = createContext({});

export const useAuthContext = () => {
	const authContext = useContext(AuthContext);
	if (!authContext)
		throw new Error("Something went wrong with the React Context API!");
	return authContext;
};

export const AuthContextProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState("");
	const [user, setUser] = useState({});

	const state = {
		// States
		// Methods
	};

	return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
