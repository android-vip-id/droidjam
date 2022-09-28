import { DATA_SCHEDULE } from '@/datas/schedule.data';

export const ScheduleList = () => {
	return (
		<div>
			{DATA_SCHEDULE.map((schedule) => (
				<div className="grid grid-cols-12 border-b last:border-none">
					<div className="col-span-5 sm:col-span-3 md:col-span-2 p-4 border-r text-right">
						<div className="font-semibold text-sm lg:text-lg">{schedule.time}</div>
						<div className="text-xs">{schedule.duration} min(s)</div>
					</div>
					<div className="col-span-7 sm:col-span-9 md:col-span-10 p-4 space-y-3">
						<div>
							{schedule.title && <div className="font-semibold text-xs md:text-sm">{schedule.agenda}</div>}
							<div className="font-semibold text-base md:text-lg">{schedule.title || schedule.agenda}</div>
						</div>

						{schedule.speakers && (
							<div className="flex flex-wrap md:gap-2">
								{schedule.speakers.map((speaker) => (
									<div key={speaker.name}>
										{!speaker.data && <div className="text-sm">{speaker.name}</div>}
										{speaker.data && (
											<div
												className={`inline-flex items-center space-x-2 bg-gradient-primary ${
													speaker.data?.avatar ? 'pr-3' : 'px-3 py-1'
												}  rounded-full text-white cursor-pointer`}
											>
												{speaker.data?.avatar && (
													<img
														className="aspect-1 w-6 object-cover rounded-full"
														src={speaker.data?.avatar}
														alt={speaker.name}
													/>
												)}
												<div>
													<div className="text-xs font-semibold">{speaker.name}</div>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
