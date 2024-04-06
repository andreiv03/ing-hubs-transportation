import axios from "utils/axios";

class AuthService {
	login(data) {
		return axios.post("/auth/login", data);
	}

	logout() {
		return axios.get("/auth/logout");
	}

	refreshToken() {
		return axios.get("/auth/refresh-token");
	}

	register(data) {
		return axios.post("/auth/register", data);
	}
}

export const authService = new AuthService();
