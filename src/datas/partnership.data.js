export const DATA_PARTNERSHIP = {
	SPONSORS: {
		DIAMOND: {
			GOOGLE: {
				name: 'Google',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png',
				url: null,
			},
			INDOSAT: {
				name: 'Indosat Ooredoo Hutchison',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Indosat_Ooredoo_Hutchison.svg/1200px-Indosat_Ooredoo_Hutchison.svg.png',
				url: 'https://ioh.co.id/portal/id/iohindex',
			},
		},
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
			url: null,
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

export const DIAMOND_SPONSORS = [DATA_PARTNERSHIP.SPONSORS.DIAMOND.GOOGLE, DATA_PARTNERSHIP.SPONSORS.DIAMOND.INDOSAT];
export const COLLABORATORS = Object.values(DATA_PARTNERSHIP.COLLABORATORS);
export const COMMUNITY_PARTNERS = Object.values(DATA_PARTNERSHIP.COMMUNITY_PARTNERS);
