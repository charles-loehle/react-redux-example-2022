import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
	//a hook to access the store's => reducer => userSlice => reducers => login function
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() =>
					dispatch(
						login({ name: 'Charles', age: 56, email: 'charles@gmail.com' })
					)
				}
			>
				Login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export default Login;
