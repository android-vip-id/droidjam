import { Fade } from 'react-reveal';
import { FiCalendar, FiExternalLink, FiMapPin } from 'react-icons/fi';
import { ImTicket } from 'react-icons/im';
import { Button, Countdown } from '@/components/atoms';
import { DATA_EVENT } from '@/datas';
import { Container } from '@/components/atoms';

export const HomeBanner = () => {
	const IS_SHOW_COUNTDOWN = true;

	return (
		<section>
			<div className="relative flex items-center justify-center w-full pt-20 bg-black pb-28 md:py-32">
				<Fade>
					<Container className="text-center">
						<div className="absolute top-0 left-0 flex items-end justify-center w-full h-full">
							<img
								className="object-cover w-full h-3/5 lg:object-contain text-xl:w-11/12"
								src={require('@/images/samples/banner-sky.svg').default}
								alt="banner skye"
							/>
						</div>

						<div className="relative flex items-center justify-center">
							<div className="flex flex-col items-center justify-center space-y-8 lg:space-y-12">
								<div className="flex flex-col items-center space-y-4">
									<img
										className="w-40 md:w-48"
										src={require('@/images/logo/droid-jam-logo-square.png')}
										alt="droid jam logo"
									/>
									<div className="space-y-6">
										<div className="text-2xl lg:text-4xl xl:text-[2.5rem] font-semibold text-center text-white">
											DroidJam{' '}
											<span className="bg-gradient-primary bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
												Indonesia
											</span>{' '}
											2023
										</div>
									</div>

									<div className="lg:text-lg xl:text-[1.6rem] text-center text-white lg:leading-tight">
										DroidJam Conference brings together thousands of Android developers globally for the largest event
										community-led technical learning and a shared passion for Android technologies.
									</div>
								</div>

								<div className="flex flex-col items-center space-y-6 md:items-start md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12">
									<div className="flex space-x-3 text-white md:items-start">
										<FiCalendar className="w-5 mt-[6px] hidden md:block" size={20} />
										<span className="flex flex-col space-y-1 md:items-start md:flex-col">
											<span className="text-sm font-bold md:hidden">WHEN</span>
											<span className="lg:text-lg">
												{DATA_EVENT.CALENDAR.DATE.LABEL}, {DATA_EVENT.CALENDAR.TIME.LABEL}
											</span>
											<a
												className="flex items-center justify-center space-x-1 text-sm text-blue-400 hover:text-blue-500 lg:text-base"
												href={DATA_EVENT.CALENDAR.REMINDER_URL}
												target="_blank"
												rel="noreferrer"
											>
												<span>Add to Calendar</span>
												<FiExternalLink />
											</a>
										</span>
									</div>
									<div className="flex space-x-3 text-white md:items-start">
										<FiMapPin className="w-5 mt-[6px] hidden md:block" size={20} />
										<span className="flex flex-col space-y-1 md:items-start md:flex-col">
											<span className="text-sm font-bold md:hidden">WHERE</span>
											<span className="lg:text-lg">{DATA_EVENT.LOCATION.LABEL}</span>
											<a
												className="flex items-center justify-center space-x-1 text-sm text-blue-400 hover:text-blue-500 lg:text-base"
												href={DATA_EVENT.LOCATION.URL}
												target="_blank"
												rel="noreferrer"
											>
												<span>View Map</span>
												<FiExternalLink />
											</a>
										</span>
									</div>
								</div>
								{IS_SHOW_COUNTDOWN && <Countdown />}

								<div className="flex justify-center">
									<Button
										className="px-6 py-3 space-x-3 text-base xl:px-8 xl:py-4 xl:text-lg"
										variant="primary"
										text="Get Tickets"
										href={DATA_EVENT.REGISTRATION_LINK}
										rightIcon={<ImTicket size={16} />}
									/>
								</div>
							</div>
						</div>
					</Container>
				</Fade>
			</div>
		</section>
	);
};
