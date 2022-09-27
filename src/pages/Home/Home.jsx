import { HomeAbout } from './components/HomeAbout';
import { HomeBanner } from './components/HomeBanner';
import { HomeSpeakers } from './components/HomeSpeakers';

export const Home = () => {
	return (
		<main>
			<HomeBanner />
			<HomeAbout />
			<HomeSpeakers />
		</main>
	);
};
