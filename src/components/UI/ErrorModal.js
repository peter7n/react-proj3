import Button from './Button.js';
import styles from './ErrorModal.module.css';
import ReactDom from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
	const clickHandler = (props) => {
		props.onClose();
	}
	
	return (
		<div className={`${props.isOpen ? styles.open : styles.closed}`}>
			<div
				className={styles.background}
				onClick={clickHandler}
			>
			</div>
		</div>
	);
};

const ModalOverlay = (props) => {
	const clickHandler = (props) => {
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
		</div>
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{ReactDom.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
			{ReactDom.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
		</Fragment>
	);
};

export default ErrorModal;