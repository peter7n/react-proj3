import Button from './Button.js';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
	const clickHandler = () => {
		props.onClose();
	}
	let errorMessage = 'Please enter a valid name and age (non-empty values)';
	if (props.code === 2) {
		errorMessage = 'Please enter a valid age (> 0)';
	}

	return (
		<div className={`${props.code ? styles.open : styles.closed}`}>
			<div className={styles.modal}>
				<header>
					<h2>Invalid Input</h2>
				</header>
				<div>
					<p>{errorMessage}</p>
				</div>
				<footer>
					<Button onClick={clickHandler}>Close</Button>
				</footer>
			</div>
			<div
				className={styles.background}
				onClick={clickHandler}
			>
			</div>
		</div>
	);
}

export default ErrorModal;