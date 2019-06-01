import strapiApi from "./services/strapiApi";

export const FETCH_SOCIAL_NETWORKS = 'FETCH_SOCIAL_NETWORKS';
export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';
export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';

export const fetchSocialNetworks = () => async dispatch => {
    const response = await strapiApi.get('/socialnetworks');
    console.log(response);
    dispatch({ type: FETCH_SOCIAL_NETWORKS, payload: response.data });
};

export const updateActiveMenuItem = (activeMenuItem) => async dispatch => {
    dispatch({ type: UPDATE_ACTIVE_MENU_ITEM, payload: activeMenuItem });
};

export const updateQueryParams = (queryParams) => async dispatch => {
    dispatch({ type: UPDATE_QUERY_PARAMS, queryParams });
};
