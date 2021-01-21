import axios from "@plugins/axios";

export const addSubscriptionService = async ({
  name,
  startDate,
  period,
  price,
  dueDate,
  appType,
}) => {
  try {
    const res = {
      name: name,
      appType: appType,
      description: "2",
      startDate: startDate,
      period: period,
      userId: localStorage.getItem("uid"),
      price: price.slice(1),
      currency: "USD",
      dueDate: dueDate,
    };
    const data = await axios.post("/subscriptions", res);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateSubscriptionService = async ({
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
      startDate: startDate,
      period: period,
      userId: localStorage.getItem("uid"),
      price: price.slice(1),
      currency: "USD",
      dueDate: dueDate,
    };
    const data = await axios.patch(`/subscriptions/${id}`, res);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getAllSubscriptionsService = async () => {
  try {
    const data = await axios.get(`/subscriptions`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getSubscriptionService = async (id) => {
  try {
    const data = await axios.get(`/subscriptions/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getSubscriptionTypesService = async () => {
  try {
    const data = await axios.get(`/types/application-types`);
    return data;
  } catch (error) {
    throw error;
  }
};
