import { Route, Routes } from 'react-router-dom';
import { Home, Schedule, Speaker } from '@/pages';
import { Header, Footer } from './components/organisms';
import { ROUTES } from './routes';

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path={ROUTES.SCHEDULE} element={<Schedule />} />
				<Route path={ROUTES.SPEAKER} element={<Speaker />} />
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
