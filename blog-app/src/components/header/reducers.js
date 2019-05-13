import { UPDATE_ACTIVE_MENU_ITEM } from './actions';

export const updateActiveMenuItemReducer = (state = "", action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_MENU_ITEM:
            return action.payload;
        default:
            return state;
    }
};
