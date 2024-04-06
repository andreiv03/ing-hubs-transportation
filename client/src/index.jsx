import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { AuthContextProvider } from "./contexts/auth.context";

import App from "./pages/app.page";
import Login from "./pages/login.page";
import ProfileButton from "./components/profile-button.component";

import "./styles/globals.scss";

const RoutesComponent = () => {
	const location = useLocation();

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Routes>

			{location.pathname !== "/login" && <ProfileButton />}
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<BrowserRouter>
				<RoutesComponent />
			</BrowserRouter>
		</AuthContextProvider>
	</React.StrictMode>
);
