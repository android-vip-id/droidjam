import { Route, Routes } from 'react-router-dom';
import { Home, Schedule, Speaker } from '@/pages';
import { Header, Footer } from './components/organisms';
import { SpeakerDetail } from './pages/Speaker/SpeakerDetail';
import { ROUTES } from './routes';

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.SCHEDULE} element={<Schedule />} />
				<Route path={ROUTES.SPEAKER} element={<Speaker />} />
				<Route path={`${ROUTES.SPEAKER}/:key`} element={<SpeakerDetail />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
