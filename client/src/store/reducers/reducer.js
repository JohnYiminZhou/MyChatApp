import { PASS_USER_NAME} from '../actions/actionTypes';

const initialState = {
    userName: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case PASS_USER_NAME:
            return {
                ...state,
                userName: action.data
            }

    default:
        return state;
    }
};

export default reducer;
