import { Fade } from 'react-reveal';
import { Container } from '@/components/atoms';
import { BannerPage, ScheduleList } from '@/components/organisms';

export const Schedule = () => {
	return (
		<main>
			<BannerPage
				title="Schedule"
				description="Follow code demonstrations by our expert speakers on 4 different tracks. Check out the schedule below and don't forget to mark your calendar so that you don't miss out on any sessions."
			/>
			<Fade>
				<Container className="py-20">
					<ScheduleList />
				</Container>
			</Fade>
		</main>
	);
};
