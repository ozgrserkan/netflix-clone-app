export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_LISTS_START",
});

export const createListSuccess = (list) => ({
  type: "CREATE_LISTS_SUCCESS",
  payload: list,
});

export const createListFailure = () => ({
  type: "CREATE_LISTS_FAILURE",
});

export const updateListStart = () => ({
  type: "UPDATE_LISTS_START",
});

export const updateListSuccess = (movie) => ({
  type: "UPDATE_LISTS_SUCCESS",
  payload: movie,
});

export const updateListFailure = () => ({
  type: "UPDATE_LISTS_FAILURE",
});

export const deleteListStart = () => ({
  type: "DELETE_LISTS_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LISTS_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LISTS_FAILURE",
});
