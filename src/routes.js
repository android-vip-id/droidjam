export const ROUTES = {
	HOME: '/',
	SPEAKER: '/speaker',
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
		path: ROUTES.SPEAKER,
		title: 'Speaker',
		end: false,
	},
];
