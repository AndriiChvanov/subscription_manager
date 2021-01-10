import axios from "axios";
import interceptors from "./interceptors";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

interceptors(instance);

export default instance;
