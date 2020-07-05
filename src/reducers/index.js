import categoryReducer from './categoryReducer';
import newsListReducer from './newsListReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    categoryR : categoryReducer,
    newsListR : newsListReducer,
    showHamburger: false
});

export default allReducers