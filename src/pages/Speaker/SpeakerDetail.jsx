import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { DATA_SPEAKER } from '@/datas';
import { ROUTES } from '@/routes';
import { SpeakerBanner } from './components/SpeakerBanner';
import { Container } from '@/components/atoms';

export const SpeakerDetail = () => {
	const { key } = useParams();
	const navigate = useNavigate();

	const speaker = DATA_SPEAKER[key];

	useEffect(() => {
		if (!speaker) navigate(ROUTES.SPEAKER);
	}, [speaker, navigate]);

	return (
		<main className="min-h-screen">
			{speaker && (
				<>
					<SpeakerBanner speaker={speaker} />
					<section>
						<Fade>
							<Container>
								{speaker.bio && (
									<div className="space-y-4 border-b py-12">
										<div className="text-3xl font-semibold">"{speaker.talk_title}"</div>
									</div>
								)}
								{speaker.bio && (
									<div className="space-y-4 border-b py-12">
										<div className="text-3xl font-semibold">About</div>
										<div>{speaker.bio}</div>
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
