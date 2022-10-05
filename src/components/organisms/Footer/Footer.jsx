import { Button, Container } from '@/components/atoms';
import { DATA_EVENT } from '@/datas';
import React from 'react';

export const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
				<img
					className="w-full h-full object-cover"
					src={require('@/images/samples/indosat-auditorium.png')}
					alt="Indosat Ooredoo"
				/>
			</div>
			<div className="relative bg-black bg-opacity-70">
				<Container className="py-20 text-white text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight">DroidJam Indonesia 15th October 2022</h1>
						<div>
							Call for sponsorship opportunities, contact{' '}
							<a className="text-blue-400 hover:text-blue-500" href="mailto:info@DroidJam.id">
								info@droidjam.id
							</a>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-center gap-6">
						<form action="mailto:info@droidjam.id" method="GET">
							<Button type="submit" className="px-8 py-4">
								Call for Sponsors
							</Button>
						</form>
						<Button className="px-8 py-4" variant="primary" href={DATA_EVENT.REGISTRATION_LINK}>
							Get Tickets
						</Button>
					</div>
				</Container>
			</div>
		</footer>
	);
};
