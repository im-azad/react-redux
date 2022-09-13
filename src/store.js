import { createStore, applyMiddleware } from 'redux';
import todoReducer from './components/services/reducers/todoReducer';
import thunk from 'redux-thunk';
// import counterReducer from './components/services/reducers/counterReducer';
const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
