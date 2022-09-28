import { Fade } from 'react-reveal';
import { Container } from '@/components/atoms';
import { BannerPage, ScheduleList } from '@/components/organisms';
import { DATA_EVENT } from '@/datas';

export const Schedule = () => {
	return (
		<main>
			<BannerPage
				title="Schedule"
				description="Follow code demonstrations by our expert speakers. Check out the schedule below and don't forget to mark your calendar so that you don't miss out on any sessions."
				buttonText="Remind me"
				onClickButton={() => window.open(DATA_EVENT.CALENDAR.REMINDER_URL, '_blank')}
			/>
			<Fade>
				<div className="bg-gray-100">
					<Container className="py-20">
						<div className="bg-white p-3 shadow-md rounded-md">
							<ScheduleList />
						</div>
					</Container>
				</div>
			</Fade>
		</main>
	);
};
