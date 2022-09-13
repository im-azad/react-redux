import {
	todoFailed,
	todoRequest,
	todoSuccess,
} from '../constants/todoConstants';

const initialTodoState = {
	isLoading: false,
	todo: [],
	error: null,
};

const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case todoRequest:
			return {
				...state,
				isLoading: true,
			};
		case todoSuccess:
			return {
				isLoading: false,
				todo: action.payload,
				error: null,
			};
		case todoFailed:
			return {
				isLoading: false,
				todo: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default todoReducer;
