import { combineReducers } from 'redux';
import ContagemReducer from './ContagemReducer';

export default combineReducers({
    contagem: ContagemReducer,
    
});