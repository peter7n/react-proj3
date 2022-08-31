import { useState } from 'react';
import UserForm from './components/Users/UserForm.js';
import UserList from './components/Users/UserList.js';
import ErrorModal from './components/UI/ErrorModal.js';
// import styles from './App.module.css';

const App = () => {
  // Store all users in array here
  const [userArray, setUserArray] = useState([]);
  // State for input validation
  const [errorCode, setErrorCode] = useState(0);
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Accept new user data from UserForm.js
  const addUserHandler = (user) => {
    setUserArray((prevUserArray) => {
      return [...prevUserArray, user];
    });
  };

  // Accepts an error code from UserForm.js
  const errorHandler = (code) => {
    setErrorCode(code);
  };

  // Get close modal status from ErrorModal.js
  const closeHandler = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
      <ErrorModal
        code={errorCode}
        onClose={closeHandler}
      />
      <UserForm
        onAddUser={addUserHandler}
        onError={errorHandler}
      />
      {userArray.length !== 0 && (
        <UserList users={userArray} />
      )}
    </div>
  );
}

export default App;
