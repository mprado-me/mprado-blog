import { combineReducers } from 'redux';
import { updateActiveMenuItemReducer } from './components/header/reducers';
import { fetchSocialNetworksReducer } from './components/footer/reducers';
import { updateQueryParamsReducer } from './layouts/base_layout/reducers'

export default combineReducers({
    activeMenuItem: updateActiveMenuItemReducer,
    socialNetworks: fetchSocialNetworksReducer,
    queryParams: updateQueryParamsReducer
});
