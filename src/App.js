import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import { useSelector } from 'react-redux';

function App() {
	// a hook to access the redux store's state
	const themeColor = useSelector(state => state.theme.value);
	console.log(themeColor);

	return (
		<div className="App" style={{ backgroundColor: themeColor }}>
			<Profile />
			<Login />
			<ChangeColor />
		</div>
	);
}

export default App;

