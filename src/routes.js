export const ROUTES = {
	HOME: '/',
	SPEAKER: '/speaker',
	SCHEDULE: '/schedule',
	ORGANIZER: '/organizer',
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
	{
		path: ROUTES.ORGANIZER,
		title: 'Organizer',
		end: false,
	},
];
