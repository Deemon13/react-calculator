import { useState } from 'react';

import styles from './App.module.css';

const NUMS = [
	{ id: '000', item: '0', group: 'numbers' },
	{ id: '001', item: '1', group: 'numbers' },
	{ id: '002', item: '2', group: 'numbers' },
	{ id: '003', item: '3', group: 'numbers' },
	{ id: '004', item: '4', group: 'numbers' },
	{ id: '005', item: '5', group: 'numbers' },
	{ id: '006', item: '6', group: 'numbers' },
	{ id: '007', item: '7', group: 'numbers' },
	{ id: '008', item: '8', group: 'numbers' },
	{ id: '009', item: '9', group: 'numbers' },
	{ id: '010', item: '+', group: 'operators' },
	{ id: '012', item: '-', group: 'operators' },
	{ id: '013', item: '*', group: 'operators' },
	{ id: '014', item: '/', group: 'operators' },
	{ id: '015', item: '=', group: 'operators' },
	{ id: '016', item: 'C', group: 'special' },
];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState(0);

	const clickForUpdateOperand = event => {
		const firstOperand = event.target.innerHTML;
		// console.log(firstOperand);
		setOperand1(operand1 + firstOperand);
	};

	const clearing = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
	};

	return (
		<div className={styles.container}>
			<div>
				<h1>Output</h1>
				<span>{operand1 ? operand1 : '0'}</span>
			</div>
			<div>
				<h1>Special</h1>
				<ul>
					{NUMS.map(el => {
						return el.group === 'special' ? (
							<li key={el.id}>
								<button type="button" onClick={clearing}>
									{el.item}
								</button>
							</li>
						) : (
							''
						);
					})}
				</ul>
			</div>
			<div>
				<h1>Numbers</h1>
				<ul>
					{NUMS.map(el => {
						return el.group === 'numbers' ? (
							<li key={el.id}>
								<button
									type="button"
									onClick={event => clickForUpdateOperand(event)}
								>
									{el.item}
								</button>
							</li>
						) : (
							''
						);
					}).reverse()}
				</ul>
			</div>
			<div>
				<h1>Operators</h1>
				<ul>
					{NUMS.map(el => {
						return el.group === 'operators' ? (
							<li key={el.id}>
								<button type="button">{el.item}</button>
							</li>
						) : (
							''
						);
					})}
				</ul>
			</div>
		</div>
	);
};

// export default App
