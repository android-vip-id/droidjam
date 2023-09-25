export const TITLE = 'DroidJam Indonesia 2023';

export const DESCRIPTION =
	'DroidJam brings together thousands of Android developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Android technologies.';

export const CALENDAR = {
	DATE: {
		LABEL: '7th October',
		VALUE: new Date(2023, 9, 7),
	},
	TIME: {
		LABEL: '09.00 - 18.00',
	},
	REMINDER_URL:
		'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231007T020000Z%2F20231007T110000Z&details=Droidjam%20Indonesia%202023%20is%20back%21%20%F0%9F%98%8E%0A%0AGet%20ready%20for%20the%20biggest%20Android%20developer%20event%20of%20the%20year%21%20%F0%9F%9A%80%20Join%20us%20on%20October%207th%20at%20Auditorium%20Green%20Office%20Park%209%20Sinarmas%20Land%20for%20a%20day%20filled%20with%20cutting-edge%20tech%20talks%2C%20hands-on%20workshops%2C%20and%20networking%20opportunities.%0A%0ASave%20the%20Date%0A%F0%9F%97%93%20October%207th%2C%202023%0A%F0%9F%8F%A2%20Auditorium%20Green%20Office%20Park%209%20Sinarmas%20Land%0A%0AWhether%20you%27re%20a%20seasoned%20developer%20or%20just%20starting%20your%20Android%20journey%2C%20Droidjam%20Indonesia%202023%20is%20the%20place%20to%20be.%20Stay%20tuned%20for%20speaker%20announcements%2C%20session%20details%2C%20and%20ticket%20information%21%0A%0ADon%27t%20miss%20out%20on%20this%20epic%20Android%20experience.%20Follow%20us%20for%20updates%20and%20mark%20your%20calendar%20now.%20Let%27s%20jam%20with%20Droidjam%21%0A%0Avisit%20https%3A%2F%2Fdroidjam.id%20for%20more%20details%0A%0A%23droidjam%20%23indonesia%20%23android%C2%A0%23developers&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FAuditorium%2BGreen%2BOffice%2BPark%2B9%2BSinarmas%2BLand%2F%40-6.3024243%2C106.6523676%2C15z%2Fdata%3D%214m2%213m1%211s0x0%3A0x68c6514b23a26a0d%3Fsa%3DX%26ved%3D2ahUKEwirt9L4862BAxUuSWwGHdViArUQ_BJ6BAhtEAA%26ved%3D2ahUKEwirt9L4862BAxUuSWwGHdViArUQ_BJ6BAhzEAg&text=Droidjam%20Indonesia%202023',
};

export const REGISTRATION_LINK = 'https://tiptip.co/event/1a04d8bc-6272-4042-ab26-bcaf251b0a30';

export const LOCATION = {
	LABEL: 'Auditorium Green Office Park 9 Sinarmas Land',
	ADDRESS: 'Jl. BSD Raya Utama, Lengkong Kulon, Kec. Pagedangan, Kabupaten Tangerang, Banten 15331',
	IMAGE: require('@/images/locations/2023/sinarmas-green-office.jpg'),
	URL: 'https://www.google.com/maps/place/Auditorium+Green+Office+Park+9+Sinarmas+Land/@-6.3024243,106.6523676,15z/data=!4m2!3m1!1s0x0:0x68c6514b23a26a0d?sa=X&ved=2ahUKEwirt9L4862BAxUuSWwGHdViArUQ_BJ6BAhtEAA&ved=2ahUKEwirt9L4862BAxUuSWwGHdViArUQ_BJ6BAhzEAg',
	IFRAME_URL:
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.820404740458!2d106.6523676!3d-6.3024243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb4a814ebd3b%3A0x68c6514b23a26a0d!2sAuditorium%20Green%20Office%20Park%209%20Sinarmas%20Land!5e0!3m2!1sid!2sid!4v1694868032782!5m2!1sid!2sid',
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
