import { createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
    passUserName: reducer
})

const configStore = createStore(rootReducer);

configStore.subscribe(() =>{
    console.log(configStore.getState());
})
export default configStore;

