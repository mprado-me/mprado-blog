import { combineReducers } from 'redux';

import { UPDATE_QUERY_PARAMS } from './actions';
import { UPDATE_ACTIVE_MENU_ITEM } from './actions';
import { FETCH_SOCIAL_NETWORKS } from './actions';

export const updateActiveMenuItemReducer = (state = "", action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_MENU_ITEM:
            return action.payload;
        default:
            return state;
    }
};

export const updateQueryParamsReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_QUERY_PARAMS:
            return action.queryParams;
        default:
            return state;
    }
};

export const fetchSocialNetworksReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SOCIAL_NETWORKS:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    activeMenuItem: updateActiveMenuItemReducer,
    socialNetworks: fetchSocialNetworksReducer,
    queryParams: updateQueryParamsReducer
});
