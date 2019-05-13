import strapiApi from "../../services/strapiApi";

export const FETCH_SOCIAL_NETWORKS = 'FETCH_SOCIAL_NETWORKS';

export const fetchSocialNetworks = () => async dispatch => {
    const response = await strapiApi.get('/socialnetworks');
    dispatch({ type: 'FETCH_SOCIAL_NETWORKS', payload: response.json() });
};
