import { SectionBorder } from '@/components/atoms';
import { BannerHome } from '@/components/organisms';

export const Home = () => {
	return (
		<div>
			<BannerHome />
			<SectionBorder position="bottom" />
		</div>
	);
};
