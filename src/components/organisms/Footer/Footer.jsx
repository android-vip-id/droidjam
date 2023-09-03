import { Button, Container } from '@/components/atoms';
import { DATA_EVENT, LOCATION } from '@/datas';
import React from 'react';

export const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<div className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
				<img className="object-cover w-full h-full" src={LOCATION.IMAGE} alt={LOCATION.LABEL} />
			</div>
			<div className="relative bg-black bg-opacity-70">
				<Container className="py-20 space-y-8 text-center text-white">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold leading-tight lg:text-4xl">DroidJam Indonesia 7th October 2023</h1>
						<div>
							Call for sponsorship opportunities, contact{' '}
							<a className="text-blue-400 hover:text-blue-500" href="mailto:info@droidJam.id">
								info@droidjam.id
							</a>{' '}
							and{' '}
							<a className="text-blue-400 hover:text-blue-500" href="mailto:sponsorship@droidjam.id">
								sponsorship@droidjam.id
							</a>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-center gap-6">
						<Button
							className="px-8 py-4 lg:px-10 lg:py-5 lg:text-lg"
							variant="primary"
							href={DATA_EVENT.REGISTRATION_LINK}
						>
							Get Tickets
						</Button>
					</div>
				</Container>
			</div>
		</footer>
	);
};
