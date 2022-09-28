import { BannerPage, SpeakerList } from '@/components/organisms';
import { DATA_EVENT } from '@/datas';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

export const Speaker = () => {
	return (
		<main>
			<Helmet>
				<title>{DATA_EVENT.TITLE} - Speaker</title>
			</Helmet>
			<BannerPage
				title="Speakers"
				description="Our speakers are influential folks & allies who have been associated with communities within their
						organisations, cities, country and beyond."
			/>

			<Fade>
				<section className="bg-gray-200 py-20">
					<div className="container max-w-screen-2xl">
						<SpeakerList />
					</div>
				</section>
			</Fade>
		</main>
	);
};
