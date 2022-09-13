import axios from 'axios';

import {
	todoFailed,
	todoRequest,
	todoSuccess,
} from '../constants/todoConstants';
const getAllTodo = () => async (dispatch) => {
	dispatch({ type: todoRequest });
	try {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		dispatch({ type: todoSuccess, payload: res.data });
	} catch (error) {
		dispatch({ type: todoFailed, payload: error.messages });
	}
};

export default getAllTodo;
