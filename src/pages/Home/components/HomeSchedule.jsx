import { Container } from '@/components/atoms';
import { ScheduleList } from '@/components/organisms';
import React from 'react';

export const HomeSchedule = () => {
	return (
		<section>
			<Container className="py-20 space-y-12">
				<div className="text-center space-y-5">
					<h1 className="font-bold space-y-2 text-4xl md:text-5xl text-green-500">Schedule</h1>
					<p className="opacity-70">
						Follow code demonstrations by our expert speakers. Check out the schedule below and don't forget to mark
						your calendar so that you don't miss out on any sessions.
					</p>
				</div>

				<ScheduleList />
			</Container>
		</section>
	);
};
