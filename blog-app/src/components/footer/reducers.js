import { FETCH_SOCIAL_NETWORKS } from './actions';

export const fetchSocialNetworksReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SOCIAL_NETWORKS:
            return action.payload;
        default:
            return state;
    }
};
