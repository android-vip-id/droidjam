export const DATA_PARTNERSHIP = {
	SPONSORS: {
		DIAMOND: {
			GOOGLE: {
				name: 'Sinarmas Land',
				image: require('@/images/sponsors/2023/sinarmas-land.png'),
				url: 'https://www.sinarmasland.com/',
			},
		},
		PLATINUM: {},
		GOLD: {},
	},
	COLLABORATORS: {
		GDG_JAKARTA: {
			name: 'GDG Jakarta',
			image: require('@/images/sponsors/2023/gdg-jakarta.png'),
			url: null,
		},
	},
	COMMUNITY_PARTNERS: {
		ADB: {
			name: 'Android Developer Bandung',
			image: require('@/images/sponsors/2023/adb.jpg'),
			url: null,
		},
		AEJ: {
			name: 'Android Enthusiast Jakarta',
			image: require('@/images/sponsors/2023/aej.png'),
			url: null,
		},
		VIP: {
			name: 'Android VIP',
			image: require('@/images/sponsors/2023/android-vip.png'),
			url: null,
		},
	},
};

export const DIAMOND_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.DIAMOND);
export const PLATINUM_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.PLATINUM);
export const GOLD_SPONSORS = Object.values(DATA_PARTNERSHIP.SPONSORS.GOLD);
export const COLLABORATORS = Object.values(DATA_PARTNERSHIP.COLLABORATORS);
export const COMMUNITY_PARTNERS = Object.values(DATA_PARTNERSHIP.COMMUNITY_PARTNERS);
