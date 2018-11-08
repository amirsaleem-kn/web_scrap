import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    blank: function(state, action) { if (state == null) state = []; return state;}
});

export default rootReducers;