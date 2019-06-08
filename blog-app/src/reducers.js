import { combineReducers } from 'redux';

import { UPDATE_QUERY_PARAMS } from './actions';
import { UPDATE_ACTIVE_MENU_ITEM } from './actions';

import { socialNetworksReducer } from './components/footer'
import { filterBoxTagsReducer } from './components/filter_box/tags';

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
            return {...state, ...action.queryParams};
        default:
            return state;
    }
};

export default combineReducers({
    activeMenuItem: updateActiveMenuItemReducer,
    footer: combineReducers({
        socialNetworks: socialNetworksReducer
    }),
    queryParams: updateQueryParamsReducer,
    filterBox: combineReducers({
        tags: filterBoxTagsReducer
    })
});
