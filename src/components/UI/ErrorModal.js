import Button from './Button.js';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
	const clickHandler = () => {
		props.onClose();
	}

	return (
		<div className={`${props.isOpen ? styles.open : styles.closed}`}>
			<div className={styles.modal}>
				<header>
					<h2>{props.title}</h2>
				</header>
				<div>
					<p>{props.message}</p>
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