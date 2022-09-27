import { DATA_EVENT } from '@/datas';
import React from 'react';

export const BannerHome = () => {
	return (
		<div className="h-screen w-full bg-black flex items-center justify-center">
			<div className="container max-w-screen-xl text-center">
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
								<img
									className="w-40 md:w-48"
									src={require('@/images/logo/droid-jam-logo-square.png')}
									alt="droid jam logo"
								/>
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
										<div>15th October 2022</div>
										<div>
											at <span className="font-semibold">Indosat Auditorium</span>{' '}
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
