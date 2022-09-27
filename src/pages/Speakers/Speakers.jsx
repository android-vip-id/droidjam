import { Container } from '@/components/atoms';
import { SpeakerList } from '@/components/organisms';

export const Speakers = () => {
	return (
		<main>
			<section className="relative bg-black pt-40 pb-32">
				<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
					<img
						className="w-full h-3/5 object-cover lg:object-contain lg:w-11/12"
						src={require('@/images/samples/banner-sky.svg').default}
						alt="banner skye"
					/>
				</div>

				<Container className="relative">
					<div className="text-white space-y-3">
						<h1
							className="text-5xl font-bold bg-gradient-primary bg-clip-text"
							style={{ WebkitTextFillColor: 'transparent' }}
						>
							Speakers
						</h1>
						<p className="text-lg opacity-50 lg:w-1/2">
							Our speakers are influential folks & allies who have been associated with communities within their
							organisations, cities, country and beyond.
						</p>
					</div>
				</Container>
			</section>

			<section className="bg-gray-200 py-20">
				<div className="container max-w-screen-2xl">
					<SpeakerList />
				</div>
			</section>
		</main>
	);
};
