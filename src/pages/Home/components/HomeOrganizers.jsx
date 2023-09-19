import { Container } from '@/components/atoms';
import { OrganizerList } from '@/components/organisms';
import React from 'react';

export const HomeOrganizers = () => {
	return (
		<section className="bg-gray-100">
			<Container className="py-20 space-y-12">
				<div className="text-center space-y-5">
					<h1 className="font-bold space-y-2 text-4xl md:text-5xl text-green-500">Organizers</h1>
					<p className="opacity-70">
						DroidJam is an Indonesia community-driven conference, and administratively supported by DroidJam Indonesia.
						To make all this possible, an awesome team of volunteers is working behind the scenes.
					</p>
				</div>

				<OrganizerList />
			</Container>
		</section>
	);
};
