import { HomeAbout } from './components/HomeAbout';
import { HomeBanner } from './components/HomeBanner';

export const Home = () => {
	return (
		<main>
			<HomeBanner />
			<HomeAbout />
		</main>
	);
};
