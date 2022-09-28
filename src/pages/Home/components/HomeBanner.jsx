import { Fade } from 'react-reveal';
import { FiCalendar, FiExternalLink, FiMapPin } from 'react-icons/fi';
import { ImTicket } from 'react-icons/im';
import { Button, SectionBorder } from '@/components/atoms';
import { DATA_EVENT } from '@/datas';
import { Container } from '@/components/atoms';

export const HomeBanner = () => {
	return (
		<section>
			<div className="relative w-full bg-black flex items-center justify-center pt-20 pb-28 md:py-32">
				<Fade>
					<Container className="text-center">
						<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
							<img
								className="w-full h-3/5 object-cover lg:object-contain text-xl:w-11/12"
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
											Droidjam{' '}
											<span className="bg-gradient-primary bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
												Indonesia
											</span>{' '}
											2022
										</div>
									</div>

									<div className="lg:text-lg xl:text-[1.6rem] text-center text-white lg:leading-tight">
										Droidjam brings together thousands of Android developers globally for the largest virtual weekend of
										community-led technical learning and a shared passion for Android technologies.
									</div>
								</div>

								<div className="flex flex-col items-center md:items-start md:flex-row space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12">
									<div className="flex md:items-start space-x-3 text-white">
										<FiCalendar className="w-5 mt-[6px] hidden md:block" size={20} />
										<span className="flex md:items-start flex-col md:flex-col space-y-1">
											<span className="text-sm font-bold md:hidden">WHEN</span>
											<span>
												{DATA_EVENT.CALENDAR.DATE.LABEL}, {DATA_EVENT.CALENDAR.TIME.LABEL}
											</span>
											<a
												className="flex items-center justify-center space-x-1 text-blue-400 hover:text-blue-500 text-sm"
												href={DATA_EVENT.CALENDAR.REMINDER_URL}
												target="_blank"
												rel="noreferrer"
											>
												<span>Add to Calendar</span>
												<FiExternalLink />
											</a>
										</span>
									</div>
									<div className="flex md:items-start space-x-3 text-white">
										<FiMapPin className="w-5 mt-[6px] hidden md:block" size={20} />
										<span className="flex md:items-start flex-col md:flex-col space-y-1">
											<span className="text-sm font-bold md:hidden">WHERE</span>
											<span>{DATA_EVENT.LOCATION.LABEL}</span>
											<a
												className="flex items-center justify-center space-x-1 text-blue-400 hover:text-blue-500 text-sm"
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

								<div className="flex justify-center">
									<Button
										className="px-6 py-3 space-x-3 text-base"
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
