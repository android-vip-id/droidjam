export const DATA_PARTNERSHIP = {
	SPONSORS: {
		DIAMOND: {
			GOOGLE: {
				name: 'Sinarmas Land',
				image: 'https://www.sinarmasland.com/static/logo_sinarmas-dark-2d2bb249299fda48ad4a9d199e44c467.png',
				url: 'https://www.sinarmasland.com/',
			},
		},
		PLATINUM: {},
		GOLD: {},
	},
	COLLABORATORS: {
		GDG_JAKARTA: {
			name: 'GDG Jakarta',
			image: require('@/images/sponsors/gdg-jakarta.png'),
			url: null,
		},
		JAGOAN_HOSTING: {
			name: 'Jagoan Hosting',
			image: require('@/images/sponsors/jagoan-hosting.png'),
			url: 'https://www.jagoanhosting.com/',
		},
	},
	COMMUNITY_PARTNERS: {
		ADB: {
			name: 'Android Developer Bandung',
			image: require('@/images/sponsors/adb.jpg'),
			url: null,
		},
		AEJ: {
			name: 'Android Enthusiast Jakarta',
			image: require('@/images/sponsors/aej.png'),
			url: null,
		},
		VIP: {
			name: 'Android VIP',
			image: require('@/images/sponsors/android-vip.png'),
			url: null,
		},
	},
};

export const DIAMOND_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.DIAMOND);
export const PLATINUM_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.PLATINUM);
export const GOLD_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.GOLD);
export const COLLABORATORS = Object.values(DATA_PARTNERSHIP.COLLABORATORS);
export const COMMUNITY_PARTNERS = Object.values(DATA_PARTNERSHIP.COMMUNITY_PARTNERS);
