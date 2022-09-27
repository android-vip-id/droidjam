import { Container } from '@/components/atoms';
import { SpeakerList } from '@/components/organisms';

export const HomeSpeakers = () => {
	return (
		<section>
			<div className="bg-gray-200 py-16 md:py-20 space-y-20">
				<Container>
					<div className="text-center space-y-5">
						<h1 className="font-bold space-y-2">
							<div className="text-4xl md:text-5xl text-green-500">Speakers</div>
							<div className="text-2xl md:text-3xl">@Droidjam Indonesia 2022</div>
						</h1>
						<p className="opacity-70">
							Our speakers are influential folks & allies who have been associated with communities within their
							organisations, cities, country and beyond.
						</p>
					</div>
				</Container>

				<div className="container max-w-screen-2xl">
					<SpeakerList />
				</div>
			</div>
		</section>
	);
};
