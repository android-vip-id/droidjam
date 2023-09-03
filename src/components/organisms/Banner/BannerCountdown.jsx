import React from 'react';
import { ImTicket } from 'react-icons/im';
import { DATA_EVENT } from '@/datas';
import { Countdown } from '@/components/atoms';

export const BannerCountdown = () => {
	return (
		<div className="relative bg-black">
			<div className="absolute top-0 left-0 flex items-end justify-center w-full h-full">
				<img
					className="object-cover w-full h-3/5 lg:object-contain lg:w-11/12"
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

						<div className="mb-12 space-y-6">
							<div className="space-y-6">
								<div className="text-2xl md:text-4xl lg:text-[2.5rem] font-semibold text-center text-white ">
									DroidJam{' '}
									<span
										className="bg-gradient-to-br from-green-500 to-yellow-500 bg-clip-text"
										style={{ WebkitTextFillColor: 'transparent' }}
									>
										Indonesia
									</span>{' '}
									2023
								</div>

								<div className="text-sm md:text-lg lg:text-[1.6rem] text-center text-white">
									DroidJam brings together thousands of Android developers globally for the largest virtual weekend of
									community-led technical learning and a shared passion for Android technologies.
								</div>
							</div>

							<div className="space-y-3">
								<div className="space-y-1 text-sm text-center text-white">
									<div>{DATA_EVENT.CALENDAR.DATE.LABEL}</div>
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

							<Countdown />
						</div>

						<a
							className="flex items-center px-6 py-3 space-x-3 text-sm font-semibold text-center text-black transition-all bg-white rounded-md hover:bg-gray-100"
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
