import { useRef } from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import styles from './UserForm.module.css';

const UserForm = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

// use state to record entered data
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredUserName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		
		if (isInputValid(enteredUserName, enteredUserAge)) {
			const userData = {
				name: enteredUserName,
				age: enteredUserAge,
				id: Math.random().toString()
			};
			// Pass new user data 'up' to App.js
			props.onAddUser(userData);

			// Reset form fields
			nameInputRef.current.value = '';
			ageInputRef.current.value = '';
		}
	}

	// If invalid input, pass error code 'up' to App.js
	const isInputValid = (name, age) => {
		if (name === '' || age === '') {
			props.onError('Please enter a valid name and age (non-empty values)');
			nameInputRef.current.value = '';
			ageInputRef.current.value = '';
			return false;
		}
		if (age <= 0) {
			props.onError('Please enter a valid age (> 0)');
			nameInputRef.current.value = '';
			ageInputRef.current.value = '';
			return false;
		}
		return true;
	}

	return (
		<Card>
			<form
				className={styles.form}
				onSubmit={submitHandler}
			>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					ref={nameInputRef}
				/>
				<label htmlFor='age'>Age</label>
				<input
					id='age'
					type='number'
					ref={ageInputRef}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
}

export default UserForm;