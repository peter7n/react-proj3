import Button from './Button.js';
import styles from './ErrorModal.module.css';
import ReactDom from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
	return (
		<div className={`${props.isOpen ? styles.open : styles.closed}`}>
			<div
				className={styles.background}
				onClick={props.onClose}
			>
			</div>
		</div>
	);
};

const ModalOverlay = (props) => {
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
					<Button onClick={props.onClose}>Close</Button>
				</footer>
			</div>
		</div>
	);
};

const ErrorModal = (props) => {
	// const clickHandler = () => {
	// 	props.onClose();
	// }

	return (
		<Fragment>
			{ReactDom.createPortal(<Backdrop isOpen={props.isOpen} onClose={props.onClose} />, document.getElementById('backdrop-root'))}
			{ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} isOpen={props.isOpen} onClose={props.onClose} />, document.getElementById('overlay-root'))}
		</Fragment>
	);
};

export default ErrorModal;