import { DIAMOND_SPONSORS, GOLD_SPONSORS, PLATINUM_SPONSORS } from '@/datas/partnership.data';
import React from 'react';

export const HomeSponsors = (type) => {
	const handleClick = (partner) => {
		if (partner.url) window.open(partner.url, '_blank');
	};

	return (
		<section className="relative py-24 md:py-28">
			<div className="container relative space-y-16 max-w-screen-2xl">
				<div className="space-y-10 bg-white">
					<div className="space-y-3">
						<div className="flex flex-col items-center text-center">
							<h1 className="font-semibold md:text-xl">Diamond Sponsors</h1>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
							{DIAMOND_SPONSORS.map((sponsor) => (
								<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
									<img className="w-72 lg:w-80" src={sponsor.image} alt={sponsor.name} />
								</div>
							))}
						</div>
					</div>
					{Object.values(PLATINUM_SPONSORS).length > 0 && (
						<div className="space-y-3">
							<div className="flex flex-col items-center text-center">
								<h1 className="font-semibold md:text-xl">Platinum Sponsors</h1>
							</div>
							<div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
								{PLATINUM_SPONSORS.map((sponsor) => (
									<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
										<img className="w-56" src={sponsor.image} alt={sponsor.name} />
									</div>
								))}
							</div>
						</div>
					)}
					{Object.values(GOLD_SPONSORS).length > 0 && (
						<div className="space-y-3">
							<div className="flex flex-col items-center text-center">
								<h1 className="font-semibold md:text-xl">Gold Sponsors</h1>
							</div>
							<div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
								{GOLD_SPONSORS.map((sponsor) => (
									<div onClick={() => handleClick(sponsor)} className={`${sponsor.url ? 'cursor-pointer' : ''}`}>
										<img className="w-40" src={sponsor.image} alt={sponsor.name} />
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
