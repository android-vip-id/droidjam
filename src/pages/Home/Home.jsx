import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { HomeAbout } from './components/HomeAbout';
import { HomeSchedule } from './components/HomeSchedule';
import { HomeBanner } from './components/HomeBanner';
import { HomeLocation } from './components/HomeLocation';
import { HomeSpeakers } from './components/HomeSpeakers';
import { HomeSponsors } from './components/HomeSponsors';
import { HomePartnership } from './components/HomePartnership';
import { DATA_EVENT } from '@/datas';

export const Home = () => {
	return (
		<main>
			<Helmet>
				<title>{DATA_EVENT.TITLE} - Home</title>
			</Helmet>
			<HomeBanner />

			<Fade>
				<HomeAbout />
			</Fade>

			<Fade>
				<HomeSponsors />
			</Fade>

			<Fade>
				<HomeSpeakers />
			</Fade>

			<Fade>
				<HomeSchedule />
			</Fade>

			<Fade>
				<HomePartnership />
			</Fade>

			<Fade>
				<HomeLocation />
			</Fade>
		</main>
	);
};
