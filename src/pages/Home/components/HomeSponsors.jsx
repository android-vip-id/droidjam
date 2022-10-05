import {
	COLLABORATORS,
	COMMUNITY_PARTNERS,
	DIAMOND_SPONSORS,
	GOLD_SPONSORS,
	PLATINUM_SPONSORS,
} from '@/datas/partnership.data';
import React from 'react';

export const HomeSponsors = (type) => {
	const handleClick = (partner) => {
		if (partner.url) window.open(partner.url, '_blank');
	};

	return (
		<section className="relative py-24 md:py-28">
			<div className="container max-w-screen-2xl relative space-y-16">
				<div className="space-y-10 bg-white">
					<div className="space-y-3">
						<div className="flex flex-col items-center text-center">
							<h1 className="font-semibold md:text-xl">Diamond Sponsors</h1>
						</div>
						<div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center">
							{DIAMOND_SPONSORS.map((sponsor) => (
								<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
									<img className="w-72 lg:w-80" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
					<div className="space-y-3">
						<div className="flex flex-col items-center text-center">
							<h1 className="font-semibold md:text-xl">Platinum Sponsors</h1>
						</div>
						<div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center">
							{PLATINUM_SPONSORS.map((sponsor) => (
								<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
									<img className="w-36 lg:w-40" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
					<div className="space-y-3">
						<div className="flex flex-col items-center text-center">
							<h1 className="font-semibold md:text-xl">Gold Sponsors</h1>
						</div>
						<div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center">
							{GOLD_SPONSORS.map((sponsor) => (
								<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
									<img className="w-24 lg:w-28" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
