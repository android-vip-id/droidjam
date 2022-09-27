export const TITLE = 'DroidJam Indonesia 2022';

export const DESCRIPTION =
	'Droidjam brings together thousands of Android developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Android technologies.';

export const CALENDAR = {
	DATE: {
		LABEL: '15th October',
		VALUE: new Date(2022, 9, 15),
	},
	TIME: {
		LABEL: '10.00 - 16.00',
	},
	REMINDER_URL:
		'https://www.google.com/calendar/render?action=TEMPLATE&text=Droidcon+Indonesia+2022&details=DroidJam+Conference+brings+together+thousands+of%0AAndroid+developers+globally+for+the+largest+event%0Acommunity-led+technical+learning+and+a+shared%0Apassion+for+Android+technologies.&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%2FJl.%2BMedan%2BMerdeka%2BBarat%2BNo.21%2C%2BRT.2%2F3%2C%2BGambir%2C%2BKecamatan%2BGambir%2C%2BKota%2BJakarta%2BPusat%2C%2BDaerah%2BKhusus%2BIbukota%2BJakarta%2F%40-6.1758763%2C106.7514844%2C12z%2Fdata%3D%214m9%214m8%211m0%211m0%211m5%211m1%211s0x2e69f5d4c204dfe9%3A0x65c90d6690f5dedd%212m2%211d106.821525%212d-6.1758809&dates=20221015T030000Z%2F20221015T090000Z',
};

export const REGISTRATION_LINK = 'https://www.loket.com/event/droidjam-android-conference-jakarta-2022_DgT1';

export const LOCATION = {
	LABEL: 'Indosat Auditorium',
	ADDRESS:
		'Jl. Medan Merdeka Barat No.21, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
	URL: 'https://g.page/pt--indosat-tbk?share',
};

export const MAIN_TOPICS = [
	{
		title: 'Jetpack Compose',
		icon: 'https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png',
		description:
			'From guidance on architecture and testing, to deep dives into animation, lists or thinking in Compose, we have guides to help you get up to speed.',
	},
	{
		title: 'Kotlin',
		icon: 'https://img.icons8.com/color/480/kotlin.png',
		description:
			'Learn a lot about Kotlin and the ecosystem in Android developer, to maintain code quality and follow best practices.',
	},
	{
		title: 'Flutter',
		icon: 'https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png',
		description:
			'A talk session where the amazing speakers will explain Flutter and show the demonstration of it to get to know the topic much better.',
	},
];

export const DATA_EVENT = {
	TITLE,
	DESCRIPTION,
	CALENDAR,
	LOCATION,
	REGISTRATION_LINK,
	MAIN_TOPICS,
};
