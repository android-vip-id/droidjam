import { Container } from '@/components/atoms';
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

				<div>
					<div className="flex border-b">
						<div className="p-6 border-r text-right space-y-1">
							<div className="font-semibold text-xl">09.00 - 09.30</div>
							<div className="text-sm">30 min(s)</div>
							<div className="text-xs">UTC/GMT +7 hours</div>
						</div>
						<div className="p-6 space-y-4">
							<div className="font-semibold text-xl">Audience Reception</div>
							<div>
								<div className="flex items-center space-x-3 bg-gradient-primary p-1 pr-4 rounded-full text-white cursor-pointer">
									<img
										className="aspect-1 w-12 object-cover rounded-full"
										src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
										alt=""
									/>
									<div>
										<div className="text-sm font-semibold">Angie Sasmita</div>
										<div className="text-xs">Android DevRel at Google</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
