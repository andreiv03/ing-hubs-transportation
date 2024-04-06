import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/auth.context";

import App from "./pages/app.page";
import Login from "./pages/login.page";
import ProfileButton from "./components/profile-button.component";

import "./styles/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<BrowserRouter>
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
			</BrowserRouter>

			<ProfileButton />
		</AuthContextProvider>
	</React.StrictMode>
);
