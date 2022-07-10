import {FETCH_ERROR, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE} from '../action-type/actionType';

const INIT_STATE = {
    
    error: "",
    loading: false,
    message: '',
   
}

export default (state=INIT_STATE,action)=>{
    switch (action.type) {
        case FETCH_SUCCESS: {
            return {...state, error: '', message: '', loading: false};
        }
        case SHOW_MESSAGE: {
            return {...state, error: '', message: action.payload, loading: false};
        }
        case FETCH_ERROR: {
            return {...state, loading: false, error: action.payload, message: ''};
        }
        case HIDE_MESSAGE: {
            return {...state, loading: false, error: '', message: ''};
        } 
        default:
            return state;
    }
}
