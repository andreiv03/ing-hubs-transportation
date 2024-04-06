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

	useEffect(() => {
		const authenticated = localStorage.getItem("authenticated");
		if (!authenticated) return;

		const getAccessToken = async () => {
			try {
				const { data } = await authService.refreshToken();
				setAccessToken(data.accessToken);
				setTimeout(() => getAccessToken, 10 * 60 * 1000);
			} catch (error) {
				alert(error.response.data.message);
			}
		};

		getAccessToken();
	}, []);

	useEffect(() => {
		if (!accessToken) return;

		const getUser = async () => {
			try {
				const { data } = await routes.getUser();
				setUser(data);
			} catch (error) {
				alert(error.response.data.message);
			}
		};

		getUser();
	}, [accessToken]);

	const state = {
		// States
		// Methods
	};

	return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
