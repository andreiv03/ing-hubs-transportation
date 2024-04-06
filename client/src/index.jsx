import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/app.page";
import Login from "./pages/login.page";

import "./styles/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
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
	</React.StrictMode>
);
