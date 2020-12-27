function setToken(res) {
	const token = localStorage.getItem("token");
	res.headers["Authorization"] = token;
	return res;
}

export default function (axios) {
	axios.interceptors.response.use(setToken);
}
