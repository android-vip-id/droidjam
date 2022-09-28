import { Container } from '@/components/atoms';
import { COLLABORATORS, COMMUNITY_PARTNERS, DIAMOND_SPONSORS } from '@/datas/partnership.data';
import React from 'react';

export const HomePartnership = () => {
	const handleClick = (partner) => {
		if (partner.url) window.open(partner.url, '_blank');
	};

	return (
		<section className="relative py-24 md:py-28">
			{/* <div className="absolute -z-10 left-0 top-0 w-full h-full flex items-end justify-center">
				<img
					className="w-full object-cover lg:object-contain text-xl:w-11/12"
					src={require('@/images/samples/dots-bg.png')}
					alt="banner skye"
				/>
			</div> */}

			<div className="relative">
				<div className="space-y-16">
					<div className="space-y-8 bg-white">
						<div className="flex flex-col items-center text-center">
							<h1 className="md:text-xl">Diamond Sponsor</h1>
						</div>
						<div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center">
							{DIAMOND_SPONSORS.map((sponsor) => (
								<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
									<img className="w-48 md:w-60" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
					<Container>
						<hr />
					</Container>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="md:text-xl">Collaboration With</h1>
							</div>
							<div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center">
								{COLLABORATORS.map((sponsor) => (
									<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
										<img className="w-44 md:w-56" src={sponsor.image} alt={sponsor.name} />
									</div>
								))}
							</div>
						</div>
						<div className="space-y-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="md:text-xl">Community Partner</h1>
							</div>
							<div className="flex gap-4 items-center justify-center">
								{COMMUNITY_PARTNERS.map((sponsor) => (
									<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
										<img className="w-16" src={sponsor.image} alt={sponsor.name} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
