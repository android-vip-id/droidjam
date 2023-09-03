export const TITLE = 'DroidJam Indonesia 2023';

export const DESCRIPTION =
	'DroidJam brings together thousands of Android developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Android technologies.';

export const CALENDAR = {
	DATE: {
		LABEL: '7th October',
		VALUE: new Date(2023, 10, 7),
	},
	TIME: {
		LABEL: '09.00 - 18.00',
	},
	REMINDER_URL:
		'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231007T020000Z%2F20231007T110000Z&details=&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%2FJl.%2BBSD%2BRaya%2BUtama%2C%2BLengkong%2BKulon%2C%2BKec.%2BPagedangan%2C%2BKabupaten%2BTangerang%2C%2BBanten%2B15331%2F%40-6.2845561%2C106.5556538%2C12z%2Fdata%3D%214m8%214m7%211m0%211m5%211m1%211s0x2e69fb4030859dfb%3A0xbc8402640a0b831d%212m2%211d106.6380557%212d-6.2845625%3Fentry%3Dttu&text=DroidJam%20Indonesia%202023',
};

export const REGISTRATION_LINK = 'https://www.loket.com/event/droidjam-android-conference-jakarta-2022_DgT1';

export const LOCATION = {
	LABEL: 'QBIG Convention Center BSD',
	ADDRESS: 'Jl. BSD Raya Utama, Lengkong Kulon, Kec. Pagedangan, Kabupaten Tangerang, Banten 15331',
	IMAGE: require('@/images/locations/2023/Cover-Depan-_Qbig.jpg'),
	URL: 'https://goo.gl/maps/dWTDME4HwfBscNkQ8',
	IFRAME_URL:
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.841491106965!2d106.6331848!3d-6.2845571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb4030859dfb%3A0xbc8402640a0b831d!2sQBIG%20BSD%20City!5e0!3m2!1sid!2sid!4v1693722303480!5m2!1sid!2sid',
};

export const MAIN_TOPICS = [
	{
		title: 'MAD',
		icon: 'https://developer.android.com/images/brand/Android_Robot.png',
		description:
			'Modern Android Development track to teach of how to use the latest technologies to build better apps, more quickly and easily.',
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
