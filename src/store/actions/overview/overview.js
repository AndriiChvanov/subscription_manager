export const GET_OVERVIEW = "GET_OVERVIEW";
export const SUCCESS_OVERVIEW = "SUCCESS_OVERVIEW";
export const ERROR_OVERVIEW = "ERROR_OVERVIEW";
export const LOAD_OVERVIEW = "LOAD_OVERVIEW";

export const errorOverview = () => {
  return {
    type: ERROR_OVERVIEW,
  };
};
export const successOverview = () => {
  return {
    type: SUCCESS_OVERVIEW,
  };
};
export const loadOverview = () => {
  return {
    type: LOAD_OVERVIEW,
  };
};
export const getOverview = (value) => {
  return {
    type: GET_OVERVIEW,
    payload: value,
  };
};
