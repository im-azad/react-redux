import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './components/services/reducers/todoReducer';
// import counterReducer from './components/services/reducers/counterReducer';
const store = createStore(todoReducer, applyMiddleware(thunk));
export default store;
