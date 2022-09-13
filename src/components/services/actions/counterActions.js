import { decrement, increment, reset } from '../constants/counterConstants';

const incrementCounter = () => {
	return {
		type: increment,
	};
};
const decrementCounter = () => {
	return {
		type: decrement,
	};
};
const resetCounter = () => {
	return {
		type: reset,
	};
};

export { incrementCounter, decrementCounter, resetCounter };
