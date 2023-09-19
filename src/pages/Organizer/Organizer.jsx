import { BannerPage, OrganizerList } from '@/components/organisms';
import { DATA_EVENT } from '@/datas';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

export const Organizer = () => {
	return (
		<main>
			<Helmet>
				<title>{DATA_EVENT.TITLE} - Organizer</title>
			</Helmet>
			<BannerPage
				title="Organizers"
				description="DroidJam is an Indonesia community-driven conference, and administratively supported by DroidJam
				Indonesia. To make all this possible, an awesome team of volunteers is working behind the scenes."
			/>

			<Fade>
				<section className="bg-gray-100 py-20">
					<div className="container max-w-screen-2xl">
						<OrganizerList />
					</div>
				</section>
			</Fade>
		</main>
	);
};
