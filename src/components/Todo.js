import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodo from './services/actions/todoActions';

const Todo = () => {
	const { todo, isLoading, error } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTodo());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<h2>Todo App</h2>
			<h3>Total todo data ={todo.length}</h3>
			{isLoading && <h3>Loading...</h3>}
			{error && <h3>{error.message}</h3>}
			<section>
				{todo &&
					todo.map((todo) => (
						<article key={todo.id}>
							<h4>{todo.id}</h4>
							<h4>{todo.title}</h4>
						</article>
					))}
			</section>
		</div>
	);
};

export default Todo;
