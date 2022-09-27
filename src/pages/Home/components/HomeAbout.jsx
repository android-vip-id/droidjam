import { FiCheckCircle } from 'react-icons/fi';
import { DATA_EVENT } from '@/datas';
import { Container } from '@/components/atoms';

export const HomeAbout = () => {
	return (
		<section className="py-16 md:py-20">
			<Container>
				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8 md:space-y-12">
						<div className="text-left lg:text-lg">
							DroidJam Conference brings together thousands of Android developers globally for the largest event
							community-led technical learning and a shared passion for Android technologies. We Invite{' '}
							<strong>350+</strong> Professional Android developers, Google Developer Experts, Technical leaders,
							Freelancers, Students, and Android enthusiasts to join Droidjam Conference Jakarta 2022
						</div>

						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<span className="text-green-600">
									<FiCheckCircle size={20} />
								</span>
								<span>1 Day Event</span>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-green-600">
									<FiCheckCircle size={20} />
								</span>
								<span>15+ speakers</span>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-green-600">
									<FiCheckCircle size={20} />
								</span>
								<span>
									Technical Talks Workshops, Panel discussions with top tech individuals Best-in-class speakers from
									around the world Company Exhibits
								</span>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-green-600">
									<FiCheckCircle size={20} />
								</span>
								<span>Food & Networking</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col space-y-3 ">
						{DATA_EVENT.MAIN_TOPICS.map((topic) => (
							<div key={topic.title} className="flex items-start border rounded-md bg-gray-200 p-4 space-x-3">
								<img className="w-8" src={topic.icon} alt={topic.title} />
								<div>
									<div className="font-semibold py-1 text-lg">{topic.title}</div>
									<div>{topic.description}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
