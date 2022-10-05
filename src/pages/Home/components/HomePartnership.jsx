import { COLLABORATORS, COMMUNITY_PARTNERS, DIAMOND_SPONSORS, PLATINUM_SPONSORS } from '@/datas/partnership.data';
import React from 'react';

export const HomePartnership = (type) => {
	const handleClick = (partner) => {
		if (partner.url) window.open(partner.url, '_blank');
	};

	return (
		<section className="relative py-24 md:py-28 bg-gray-100">
			<div className="container max-w-screen-2xl relative space-y-16">
				<div className="grid md:grid-cols-2 gap-16">
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
									<img className="w-16 rounded-full" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
