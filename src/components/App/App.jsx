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
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	// const [isCalculating, setIsCalculating] = useState('');

	// const [result, setResult] = useState(0);
	// let result = 0;

	const handleClickOnNumber = value => {
		// setIsCalculating(true);

		if (!operator) {
			console.log('set operand 1');
			if (operand1 === '0') {
				setOperand1(value);
			} else {
				setOperand1(operand1 + value);
			}
		} else {
			console.log('set operand 2');
			if (operand2 === '0') {
				setOperand2(value);
			} else {
				setOperand2(operand2 + value);
			}
		}
	};

	const handleClickOnOperator = value => {
		console.log('here operator');
		// if (operand2 === '') {
		// 	setOperator('');
		// } else {

		setOperator(value);

		// setOperator(value);
	};

	const handleResult = operator => {
		console.log('here =');

		switch (operator) {
			case '+':
				// console.log(operand1);
				// console.log(operand2);
				setOperand1(Number(operand1) + Number(operand2));
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				// console.log(operand1);
				// console.log(operand2);
				break;
			case '*':
				setOperand1(Number(operand1) * Number(operand2));
				// console.log(operand1);
				// console.log(operand2);
				break;
			case '/':
				setOperand1(Number(operand1) / Number(operand2));
				// console.log(operand1);
				// console.log(operand2);
				break;
			default:
				break;
			// }
		}

		setOperator('');
		setOperand2('');
	};

	const handleReset = () => {
		setOperand1('0');
		setOperator('');
		setOperand2('');
	};

	const output = (
		<>
			{operand1}
			{operator}
			{operand2}
		</>
	);

	return (
		<div className={styles.container}>
			<div>
				<h1>Output</h1>
				<span>{output}</span>
			</div>
			<div>
				<h1>Special</h1>
				<ul>
					{NUMS.map(el => {
						return el.group === 'special' ? (
							<li key={el.id}>
								<button type="button" onClick={handleReset}>
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
									onClick={() => handleClickOnNumber(el.item)}
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
								<button
									type="button"
									onClick={() =>
										el.item === '='
											? handleResult(operator)
											: handleClickOnOperator(el.item)
									}
								>
									{el.item}
								</button>
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
