export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';

export const updateQueryParams = (queryParams) => async dispatch => {
    dispatch({ type: UPDATE_QUERY_PARAMS, queryParams });
};
