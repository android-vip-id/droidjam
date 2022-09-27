export const ROUTES = {
	HOME: '/',
	SPEAKERS: '/speakers',
	SCHEDULES: '/schedules',
};

export const HEADER_ROUTES = [
	{
		path: ROUTES.HOME,
		title: 'Home',
		end: true,
	},
	{
		path: ROUTES.SCHEDULES,
		title: 'Schedules',
		end: false,
	},
	{
		path: ROUTES.SPEAKERS,
		title: 'Speakers',
		end: false,
	},
];
