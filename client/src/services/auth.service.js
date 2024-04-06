import axios from "axios";

const RequestService = async (url, body, type) => {
	const token = localStorage.getItem('jwtToken');
	let res = null, ok = true;
	try {
		res = await axios({
			method: type,
			url: "http://localhost:5000/" + url,
			data: body,
			headers: {
				'Authorization': 'Bearer ' + token
			},
			withCredentials: true
		})
	} catch (err) {
		ok = false;
		res = err.response;
	}
	return {
		ok: ok,
		data: res?.data
	}
}

const login = (email, password) => {
	return RequestService("users/login", { email, password }, "post")
}

const getUser = () => {
	return RequestService("users/me", {}, "get")
}

const changePass = () => {
	return RequestService("users/changePass", {}, "get")
}

let routes = {
	login,
	getUser,
	changePass
}

export default routes