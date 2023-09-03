import { DATA_EVENT } from '@/datas';
import ReactCountdown from 'react-countdown';

export const Countdown = () => {
	return (
		<ReactCountdown
			date={DATA_EVENT.CALENDAR.DATE.VALUE}
			renderer={({ days, hours, minutes, seconds }) => (
				<div className="flex w-full max-w-screen-lg mx-auto space-x-4">
					<div className="flex-1 p-3 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md md:p-5 bg-opacity-20">
						<div className="text-2xl font-bold md:text-4xl">{days}</div>
						<div className="text-xs md:text-sm">day(s)</div>
					</div>
					<div className="flex-1 p-3 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md md:p-5 bg-opacity-20">
						<div className="text-2xl font-bold md:text-4xl">{hours}</div>
						<div className="text-xs md:text-sm">hour(s)</div>
					</div>
					<div className="flex-1 p-3 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md md:p-5 bg-opacity-20">
						<div className="text-2xl font-bold md:text-4xl">{minutes}</div>
						<div className="text-xs md:text-sm">minute(s)</div>
					</div>
					<div className="flex-1 p-3 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md md:p-5 bg-opacity-20">
						<div className="text-2xl font-bold md:text-4xl">{seconds}</div>
						<div className="text-xs md:text-sm">second(s)</div>
					</div>
				</div>
			)}
		/>
	);
};
