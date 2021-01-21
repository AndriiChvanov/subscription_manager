export const UPDATE_SUBSCRIPTION = "UPDATE_SUBSCRIPTION";
export const ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION";
export const GET_SUBSCRIPTION = "GET_SUBSCRIPTION";
export const GET_ALL_SUBSCRIPTION = "GET_ALL_SUBSCRIPTION";
export const DELETE_SUBSCRIPTION = "DELETE_SUBSCRIPTION";
export const SUBSCRIPTION_ERROR = "SUBSCRIPTION_ERROR";
export const SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS";
export const LOAD_SUBSCRIPTION = "LOAD_SUBSCRIPTION";
export const LOAD_ALL_SUBSCRIPTION = "LOAD_ALL_SUBSCRIPTION";
export const LOAD_SUBSCRIPTION_TYPES = "LOAD_SUBSCRIPTION_TYPES";
export const GET_SUBSCRIPTION_TYPES = "GET_SUBSCRIPTION_TYPES";

export const errorSubscription = () => {
  return {
    type: SUBSCRIPTION_ERROR,
  };
};
export const successSubscription = () => {
  return {
    type: SUBSCRIPTION_SUCCESS,
  };
};
export const editSubscription = (value) => {
  return {
    type: UPDATE_SUBSCRIPTION,
    payload: value,
  };
};
export const getAllSubscriptions = (value) => {
  return {
    type: GET_ALL_SUBSCRIPTION,
    payload: value,
  };
};
export const getSubscription = (value) => {
  return {
    type: GET_SUBSCRIPTION,
    payload: value,
  };
};
export const addSubscription = (value) => {
  return {
    type: ADD_SUBSCRIPTION,
    payload: value,
  };
};
export const deleteSubscription = (id) => {
  return {
    type: DELETE_SUBSCRIPTION,
    payload: id,
  };
};
export const loadSubscription = (id) => {
  return {
    type: LOAD_SUBSCRIPTION,
    payload: id,
  };
};
export const loadAllSubscription = (id) => {
  return {
    type: LOAD_ALL_SUBSCRIPTION,
    payload: id,
  };
};
export const loadSubscriptionTypes = () => {
  return {
    type: LOAD_SUBSCRIPTION_TYPES,
  };
};
export const getSubscriptionTypes = (value) => {
  return {
    type: GET_SUBSCRIPTION_TYPES,
    payload: value,
  };
};
