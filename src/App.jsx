import { Route, Routes } from 'react-router-dom';
import { Home, Schedules } from '@/pages';
import { Header } from './components/organisms';
import { ROUTES } from './routes';

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path={ROUTES.SCHEDULES} element={<Schedules />} />
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
