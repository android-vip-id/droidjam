import { DATA_SPEAKER } from './speaker.data';

export const DATA_SCHEDULE = [
	{
		time: '09.00 - 09.30',
		duration: '30',
		agenda: 'Audience Reception',
		pic: 'Event team',
		speakers: [],
		title: null,
		organization: null,
	},
	{
		time: '09.30 - 09.35',
		duration: '5',
		agenda: 'Opening',
		pic: 'MC',
		speakers: [],
		title: null,
		organization: null,
	},
	{
		time: '09.35 - 09.45',
		duration: '10',
		agenda: 'Opening',
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['rendra-toro'].name,
				data: DATA_SPEAKER['rendra-toro'],
			},
		],
		title: null,
		organization: 'Android VIP',
	},
	{
		time: '09.45 - 10.00',
		duration: '15',
		agenda: 'Opening from Indosat',
		pic: 'Event team',
		speakers: [
			{
				name: 'Indosat Team',
				data: null,
			},
		],
		title: null,
		organization: 'Indosat',
	},
	{
		time: '10.00 - 10.30',
		duration: '30',
		agenda: 'Talk #1 (Keynote)',
		pic: 'Speakership Team',
		speakers: [
			{
				name: 'Angie Sasmita',
				data: DATA_SPEAKER['angie-sasmita'],
			},
		],
		title: 'Make your Android app come alive with Jetpack Compose Animation',
		organization: 'Google',
	},
	{
		time: '10.30 - 11.00',
		duration: '30',
		agenda: 'Talk #2',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['andrew-kurniadi'].name,
				data: DATA_SPEAKER['andrew-kurniadi'],
			},
		],
		title: 'Challenges in Building Android App for Large Screen',
		organization: 'GDE/Lumio',
	},
	{
		time: '11.00 - 11.30',
		duration: '30',
		agenda: 'Talk #3',
		pic: 'Speakership Team',
		speakers: [
			{
				name: 'Raditya Gumay',
				data: DATA_SPEAKER['raditya-gumay'],
			},
		],
		title: 'Shift left in respect to app performance improvement at Gojek',
		organization: 'Gojek',
	},
	{
		time: '11.30 - 12.00',
		duration: '30',
		agenda: 'Talk #4',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['muh-isfhani-ghiath'].name,
				data: DATA_SPEAKER['muh-isfhani-ghiath'],
			},
			{
				name: DATA_SPEAKER['danang-juffry'].name,
				data: DATA_SPEAKER['danang-juffry'],
			},
		],
		title: 'Juara Android',
		organization: 'GoTo and Google',
	},
	{
		time: '12.00 - 12.45',
		duration: '45',
		agenda: 'Break',
		pic: 'Logistic Team',
		speakers: [],
		title: null,
		organization: '',
	},
	{
		time: '12.45 - 13.00',
		duration: '15',
		agenda: 'Ice Breaking',
		pic: 'Event team',
		speakers: [
			{
				name: 'MC',
				data: null,
			},
		],
		title: null,
		organization: '',
	},
	{
		time: '13.00 - 13.30',
		duration: '30',
		agenda: 'Talk #5',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['budi-oktaviyan'].name,
				data: DATA_SPEAKER['budi-oktaviyan'],
			},
		],
		title: 'The Bazel Build System - A Grab Migration Experience',
		organization: 'GDE/Grab',
	},
	{
		time: '13.30 - 14.00',
		duration: '30',
		agenda: 'Talk #6',
		pic: 'Speakership Team',
		speakers: [
			{
				name: 'Software Engineer @TVLK',
				data: null,
			},
		],
		title: null,
		organization: 'Traveloka',
	},
	{
		time: '14.00 - 14.30',
		duration: '30',
		agenda: 'Talk #7',
		pic: 'Speakership Team',
		speakers: [
			{
				name: 'Hakim Hauston',
				data: DATA_SPEAKER['hakim-hauston'],
			},
		],
		title: null,
		organization: 'Google',
	},
	{
		time: '14.30 - 15.00',
		duration: '30',
		agenda: 'Talk #8',
		pic: 'Speakership Team',
		speakers: [
			{
				name: 'Angga Dwi Ariffandi',
				data: DATA_SPEAKER['angga-dwi-arifandi'],
			},
		],
		title: 'GraphQL in Flutter: Why and How',
		organization: 'GDE/Rock',
	},
	{
		time: '15.00 - 15.30',
		duration: '30',
		agenda: 'Talk #9',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['kelvin-wong'].name,
				data: DATA_SPEAKER['kelvin-wong'],
			},
			{
				name: DATA_SPEAKER['ghiyats-hanif-iskandar'].name,
				data: DATA_SPEAKER['ghiyats-hanif-iskandar'],
			},
		],
		title: 'Our key lessons learned in adopting KMM in Android&iOS projects',
		organization: 'NBS',
	},
	{
		time: '15.30 - 16.00',
		duration: '30',
		agenda: 'Talk #10',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['muh-rahmatullah'].name,
				data: DATA_SPEAKER['muh-rahmatullah'],
			},
		],
		title: 'Experimenting with Flutter dynamic render',
		organization: 'Grab',
	},
	{
		time: '16.00 - 16.30',
		duration: '30',
		agenda: 'Break',
		pic: 'Logistic Team',
		speakers: [],
		title: null,
		organization: '',
	},
	{
		time: '16.30 - 17.00',
		duration: '30',
		agenda: 'Talk #11',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['achmad-ilham'].name,
				data: DATA_SPEAKER['achmad-ilham'],
			},
		],
		title: null,
		organization: 'Dicoding',
	},
	{
		time: '17.00 - 17.30',
		duration: '30',
		agenda: 'Talk #12',
		pic: 'Speakership Team',
		speakers: [
			{
				name: DATA_SPEAKER['rama-widragama-putra'].name,
				data: DATA_SPEAKER['rama-widragama-putra'],
			},
		],
		title: null,
		organization: 'Tokopedia',
	},
	{
		time: '17.30 - 18.00',
		duration: '30',
		agenda: 'Fireside Chat',
		pic: 'Event team',
		speakers: [
			{
				name: 'All Speakers',
				data: null,
			},
		],
		title: null,
		organization: '',
	},
];
