export const ROUTES = {
	HOME: '/',
	SPEAKERS: '/speakers',
	SCHEDULE: '/schedule',
};

export const HEADER_ROUTES = [
	{
		path: ROUTES.HOME,
		title: 'Home',
		end: true,
	},
	{
		path: ROUTES.SCHEDULE,
		title: 'Schedule',
		end: false,
	},
	{
		path: ROUTES.SPEAKERS,
		title: 'Speakers',
		end: false,
	},
];
