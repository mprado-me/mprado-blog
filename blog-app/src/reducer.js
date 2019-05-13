import { combineReducers } from 'redux';
import { updateActiveMenuItemReducer } from './components/header/reducers';
import { fetchSocialNetworksReducer } from './components/footer/reducers';

export default combineReducers({
    activeMenuItem: updateActiveMenuItemReducer,
    socialNetworks: fetchSocialNetworksReducer
});
