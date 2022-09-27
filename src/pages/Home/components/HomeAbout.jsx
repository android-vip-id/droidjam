import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { DATA_EVENT } from '@/datas';

export const HomeAbout = () => {
	return (
		<div className="py-20">
			<div className="container max-w-screen-xl">
				<div className="flex space-x-8">
					<div className="w-7/12 space-y-6">
						<div className="text-2xl font-bold">Droidjam Indonesia 2022</div>
						<div className="text-sm">
							DroidJam Conference brings together thousands of Android developers globally for the largest event
							community-led technical learning and a shared passion for Android technologies.
						</div>
						<div className="space-y-3 text-sm">
							<div className="flex items-center space-x-3">
								<span className="w-5">
									<FiCalendar size={20} />
								</span>
								<span>15th October 2022, 10:00 - 16:00</span>
								<a href={DATA_EVENT.HELD_DATE.ADD_TO_CALENDAR_URL} target="_blank" rel="noreferrer">
									Add to Calendar
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<span className="w-5">
									<AiOutlineClockCircle size={20} />
								</span>
								<span></span>
							</div>
							<div className="flex items-center space-x-3">
								<span className="w-5">
									<FiMapPin size={20} />
								</span>
								<span>Indosat Auditorium</span>
							</div>
						</div>
					</div>

					<div className="w-5/12 space-y-2">
						{DATA_EVENT.MAIN_TOPICS.map((topic) => (
							<div key={topic.title} className="border rounded-md bg-gray-200 p-4 space-y-2">
								<div className="flex items-center space-x-3">
									<img className="w-8" src={topic.icon} alt={topic.title} />
									<div className="font-semibold">{topic.title}</div>
								</div>
								<div className="text-sm">{topic.description}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
