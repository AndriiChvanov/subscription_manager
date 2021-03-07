export const USER_LOAD = "USER_LOAD";
export const USER_ERROR = "USER_ERROR";

export const userError = () => {
  return {
    type: USER_ERROR,
  };
};

export const userLoad = (values) => {
  return {
    type: USER_LOAD,
    payload: values,
  };
};
