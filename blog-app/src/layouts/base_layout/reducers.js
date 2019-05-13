import { UPDATE_QUERY_PARAMS } from './actions';

export const updateQueryParamsReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_QUERY_PARAMS:
            return action.queryParams;
        default:
            return state;
    }
};
