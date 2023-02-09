// component

import React from 'react';
// useSelector hook reads data from store
// useDispatch hook dispatches actions
import { useSelector, useDispatch } from 'react-redux';
// import reducer actions from slice
import { decrement, increment, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Increment Value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span className={styles.value}>{count}</span>
				<button
					className={styles.button}
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
