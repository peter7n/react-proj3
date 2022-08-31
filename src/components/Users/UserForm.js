import { useState } from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import styles from './UserForm.module.css';

const UserForm = (props) => {
	// use state to record entered data
	const [enteredName, setEnteredName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	}
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		if (isInputValid()) {
			const userData = {
				name: enteredName,
				age: enteredAge,
				id: Math.random().toString()
			};
			// Pass new user data 'up' to App.js
			props.onAddUser(userData);

			// Reset form fields
			setEnteredName('');
			setEnteredAge('');
		}
	}

	// If invalid input, pass error code 'up' to App.js
	// Error code 1=blank input, 2=invalid age
	const isInputValid = () => {
		if (enteredName === '' || enteredAge === '') {
			props.onError(1);
			setEnteredName('');
			setEnteredAge('');
			return false;
		}
		if (enteredAge <= 0) {
			props.onError(2);
			setEnteredName('');
			setEnteredAge('');
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
					value={enteredName}
					onChange={nameChangeHandler}
				/>
				<label htmlFor='age'>Age</label>
				<input
					id='age'
					type='number'
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
}

export default UserForm;