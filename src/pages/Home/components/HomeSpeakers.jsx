import { Container } from '@/components/atoms';
import { SpeakerList } from '@/components/organisms';

export const HomeSpeakers = () => {
	return (
		<section>
			<div className="py-16 space-y-20 bg-gray-100 md:py-20">
				<Container>
					<div className="space-y-5 text-center">
						<h1 className="space-y-2 font-bold">
							<div className="text-4xl text-green-500 md:text-5xl">Speakers</div>
							<div className="text-2xl md:text-3xl">@DroidJam Indonesia 2023</div>
						</h1>
						<p className="opacity-70">
							Our speakers are influential folks & allies who have been associated with communities within their
							organisations, cities, country and beyond.
						</p>
					</div>
				</Container>

				<div className="container max-w-screen-xl">
					<SpeakerList />
				</div>
			</div>
		</section>
	);
};
