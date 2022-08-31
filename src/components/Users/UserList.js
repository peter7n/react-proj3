import Card from '../UI/Card.js';
import User from './User.js';

const UserList = (props) => {
	return (
		<Card>
			<ul>
				{props.users.map((user) => (
					<User
						key={user.id}
						name={user.name}
						age={user.age}
					/>
				))}
			</ul>
		</Card>
	);
}

export default UserList;