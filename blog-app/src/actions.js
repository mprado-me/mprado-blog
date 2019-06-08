export const FETCH_SOCIAL_NETWORKS = 'FETCH_SOCIAL_NETWORKS';
export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';
export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';
export const FILTER_BOX_FETCH_TAGS_BEGIN = 'FILTER_BOX_FETCH_TAGS_BEGIN';
export const FILTER_BOX_FETCH_TAGS_END = 'FILTER_BOX_FETCH_TAGS_END';

export const updateActiveMenuItem = (activeMenuItem) => async dispatch => {
    dispatch({ type: UPDATE_ACTIVE_MENU_ITEM, payload: activeMenuItem });
};

export const updateQueryParams = (queryParams) => async dispatch => {
    dispatch({ type: UPDATE_QUERY_PARAMS, queryParams });
};
