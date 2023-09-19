import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { DATA_ORGANIZER } from '@/datas';
import { ROUTES } from '@/routes';
import { OrganizerBanner } from './components/OrganizerBanner';
import { Container } from '@/components/atoms';

export const OrganizerDetail = () => {
	const { key } = useParams();
	const navigate = useNavigate();

	const organizer = DATA_ORGANIZER[key];

	useEffect(() => {
		if (!organizer) navigate(ROUTES.ORGANIZER);
	}, [organizer, navigate]);

	return (
		<main className="min-h-screen">
			{organizer && (
				<>
					<OrganizerBanner organizer={organizer} />
					<section>
						<Fade>
							<Container>
								{organizer.bio && (
									<div className="space-y-4 border-b py-12">
										<div className="text-3xl font-semibold">"{organizer.talk_title}"</div>
									</div>
								)}
								{organizer.bio && (
									<div className="space-y-4 border-b py-12">
										<div className="text-3xl font-semibold">About</div>
										<div>{organizer.bio}</div>
									</div>
								)}
							</Container>
						</Fade>
					</section>
				</>
			)}
		</main>
	);
};
