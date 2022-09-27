import React from 'react';
import Countdown from 'react-countdown';
import { ImTicket } from 'react-icons/im';
import { DATA_EVENT } from '@/datas';

export const BannerCountdown = () => {
	return (
		<div className="relative bg-black">
			<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
				<img
					className="w-full h-3/5 object-cover lg:object-contain lg:w-11/12"
					src={require('@/images/samples/banner-sky.svg').default}
					alt="banner skye"
				/>
			</div>
			<div className="container max-w-screen-xl">
				<div className="relative flex items-center justify-center min-h-screen">
					<div className="relative flex flex-col items-center justify-center">
						<div>
							<img className="w-40 md:w-48" src={require('@/images/logo/droid-jam-logo.png')} alt="droid jam logo" />
						</div>

						<div className="space-y-6 mb-12">
							<div className="space-y-6">
								<div className="text-2xl md:text-4xl lg:text-[2.5rem] font-semibold text-center text-white ">
									Droidjam{' '}
									<span
										className="bg-gradient-to-br from-green-500 to-yellow-500 bg-clip-text"
										style={{ WebkitTextFillColor: 'transparent' }}
									>
										Indonesia
									</span>{' '}
									2022
								</div>

								<div className="text-sm md:text-lg lg:text-[1.6rem] text-center text-white">
									Droidjam brings together thousands of Android developers globally for the largest virtual weekend of
									community-led technical learning and a shared passion for Android technologies.
								</div>
							</div>

							<div className="space-y-3">
								<div className="space-y-1 text-sm text-center text-white">
									<div>{DATA_EVENT.HELD_DATE.LABEL}</div>
									<div>
										at <span className="font-semibold">{DATA_EVENT.LOCATION.LABEL}</span>{' '}
										<a
											className="text-blue-500 transition-all hover:text-white"
											href={DATA_EVENT.LOCATION.URL}
											rel="noreferrer"
											target="_blank"
										>
											View Map
										</a>
									</div>
								</div>
								<div className="text-sm text-center text-white">
									Our tickets are selling fast so don't miss. Conference will start in
								</div>
							</div>

							<Countdown
								date={DATA_EVENT.HELD_DATE.VALUE}
								renderer={({ days, hours, minutes, seconds }) => (
									<div className="flex w-full max-w-screen-lg mx-auto space-x-4">
										<div className="flex-1 p-3 md:p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
											<div className="text-2xl md:text-4xl font-bold">{days}</div>
											<div className="text-xs md:text-sm">day(s)</div>
										</div>
										<div className="flex-1 p-3 md:p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
											<div className="text-2xl md:text-4xl font-bold">{hours}</div>
											<div className="text-xs md:text-sm">hour(s)</div>
										</div>
										<div className="flex-1 p-3 md:p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
											<div className="text-2xl md:text-4xl font-bold">{minutes}</div>
											<div className="text-xs md:text-sm">minute(s)</div>
										</div>
										<div className="flex-1 p-3 md:p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
											<div className="text-2xl md:text-4xl font-bold">{seconds}</div>
											<div className="text-xs md:text-sm">second(s)</div>
										</div>
									</div>
								)}
							/>
						</div>

						<a
							className="flex text-sm items-center space-x-3 px-6 py-3 font-semibold text-center transition-all bg-white hover:bg-gray-200 rounded-md text-black"
							href={DATA_EVENT.REGISTRATION_LINK}
							target="_blank"
							rel="noreferrer"
						>
							<ImTicket />
							<span>Get the Ticket</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
