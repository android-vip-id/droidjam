import { Fade } from 'react-reveal';
import { HomeAbout } from './components/HomeAbout';
import { HomeSchedule } from './components/HomeSchedule';
import { HomeBanner } from './components/HomeBanner';
import { HomeLocation } from './components/HomeLocation';
import { HomeSpeakers } from './components/HomeSpeakers';

export const Home = () => {
	return (
		<main>
			<HomeBanner />

			<Fade>
				<HomeAbout />
			</Fade>

			<Fade>
				<HomeSpeakers />
			</Fade>

			<Fade>
				<HomeSchedule />
			</Fade>

			<Fade>
				<HomeLocation />
			</Fade>
		</main>
	);
};
