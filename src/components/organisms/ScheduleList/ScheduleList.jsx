import { DATA_SCHEDULE } from '@/datas/schedule.data';

export const ScheduleList = () => {
	return (
		<div>
			{DATA_SCHEDULE.map((schedule) => (
				<div className="grid grid-cols-12 border-b last:border-none">
					<div className="col-span-2 p-4 border-r text-right">
						<div className="font-semibold text-lg">{schedule.time}</div>
						<div className="text-xs">{schedule.duration} min(s)</div>
					</div>
					<div className="col-span-10 p-4 space-y-3">
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
	);
};
