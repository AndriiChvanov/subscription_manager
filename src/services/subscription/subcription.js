import axios from "@plugins/axios";

export const addSubcription = async ({
	name,
	startDate,
	period,
	price,
	dueDate,
	appType
}) => {
	try {
		const res = {
			name: name,
			appType: appType,
			description: "2",
			startDate: Date.parse(startDate),
			period: period,
			userId: localStorage.getItem("uid"),
			price: price.slice(1),
			currency: "USD",
			dueDate: Date.parse(dueDate),
		};
		const data = await axios.post("/subscriptions", res);
		return data;
	} catch (error) {
		throw error;
	}
};
export const updateSubscription = async ({
	name,
	startDate,
	period,
	price,
	dueDate,
	appType,
	id,
}) => {
	try {
		const res = {
			appType: appType,
			name: name,
			description: "update",
			startDate: Date.parse(startDate),
			period: period,
			userId: localStorage.getItem("uid"),
			price: price.slice(1),
			currency: "USD",
			dueDate: Date.parse(dueDate),
		};
		const data = await axios.patch(`/subscriptions/${id}`, res);
		return data;
	} catch (error) {
		throw error;
	}
};
export const getAllSubscription = async () => {
	try {
		const data = await axios.get(`/subscriptions`);
		return data;
	} catch (error) {
		throw error;
	}
};
export const getSubscription = async (id) => {
	try {
		const data = await axios.get(`/subscriptions/${id}`);
		return data;
	} catch (error) {
		throw error;
	}
};
export const getTypesSubscription = async () => {
	try {
		const data = await axios.get(`/types/application-types`);
		return data;
	} catch (error) {
		throw error;
	}
};
