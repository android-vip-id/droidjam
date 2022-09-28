import { Container } from '@/components/atoms';
import { DATA_SCHEDULE } from '@/datas/schedule.data';
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
					{DATA_SCHEDULE.map((schedule) => (
						<div className="flex border-b">
							<div className="p-4 border-r text-right">
								<div className="font-semibold text-lg">{schedule.time}</div>
								<div className="text-xs">{schedule.duration} min(s)</div>
							</div>
							<div className="p-4 space-y-3">
								<div>
									<div className="font-semibold text-sm">{schedule.agenda}</div>
									<div className="font-semibold text-lg">{schedule.title}</div>
								</div>

								{schedule.speakers && (
									<div className="flex space-x-2">
										{schedule.speakers.map((speaker) => (
											<div>
												<div className="inline-flex items-center space-x-2 bg-gradient-primary p-1 px-2 rounded-full text-white cursor-pointer">
													{speaker.data?.avatar && (
														<img
															className="aspect-1 w-5 object-cover rounded-full"
															src={speaker.data?.avatar}
															alt={speaker.name}
														/>
													)}
													<div>
														<div className="text-xs font-semibold">{speaker.name}</div>
													</div>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
