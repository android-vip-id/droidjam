import { Container } from '@/components/atoms';
import { ScheduleList } from '@/components/organisms';
import React from 'react';

export const HomeSchedule = () => {
	return (
		<section>
			<Container className="py-20">
				<div className="text-center space-y-5">
					<h1 className="font-bold space-y-2 text-4xl md:text-5xl text-green-500">Schedule</h1>
					<p className="opacity-70">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis possimus velit nulla totam, ab
						facere laudantium? Numquam qui accusamus facilis possimus hic, dolore, rerum mollitia eum, illum magnam
						magni!
					</p>
				</div>

				<ScheduleList />
			</Container>
		</section>
	);
};
