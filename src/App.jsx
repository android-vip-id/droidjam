import { Route, Routes } from 'react-router-dom';
import { Home, Schedule, Speakers } from '@/pages';
import { Header, Footer } from './components/organisms';
import { ROUTES } from './routes';

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path={ROUTES.SCHEDULE} element={<Schedule />} />
				<Route path={ROUTES.SPEAKERS} element={<Speakers />} />
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
