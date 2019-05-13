export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';

export const updateActiveMenuItem = (activeMenuItem) => async dispatch => {
    dispatch({ type: UPDATE_ACTIVE_MENU_ITEM, payload: activeMenuItem });
};
