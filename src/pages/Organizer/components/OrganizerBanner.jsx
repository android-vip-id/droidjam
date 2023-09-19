import { Container } from '@/components/atoms';
import { ImLinkedin } from 'react-icons/im';
import { Fade } from 'react-reveal';

export const OrganizerBanner = ({ organizer }) => {
	return (
		<section className="relative bg-black pt-28 pb-16 md:pt-36 md:pb-24">
			<Fade>
				<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
					<img
						className="w-full h-3/5 object-cover lg:object-contain lg:w-11/12"
						src={require('@/images/samples/banner-sky.svg').default}
						alt="banner skye"
					/>
				</div>

				<Container className="relative flex flex-col md:flex-row items-center gap-8">
					<div>
						<img
							className="aspect-1 object-cover w-36 md:w-52 rounded-full bg-white"
							src={organizer.avatar}
							alt={organizer.name}
						/>
					</div>
					<div className="text-white text-center md:text-left">
						<h1
							className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text py-1 mb-2"
							style={{ WebkitTextFillColor: 'transparent' }}
						>
							{organizer.name}
						</h1>
						<div className="mb-6">
							{organizer.designation.map((designation) => (
								<div className="opacity-50 lg:w-3/4">{designation}</div>
							))}
						</div>
						<div className="space-x-2">
							{organizer.socials.map((social) => (
								<a
									key={social.url}
									className="inline-block hover:text-blue-500 transition-all text-base md:text-xl"
									target="_blank"
									rel="noreferrer"
									href={social.url}
								>
									{social.type === 'linkedin' && <ImLinkedin />}
								</a>
							))}
						</div>
					</div>
				</Container>
			</Fade>
		</section>
	);
};
