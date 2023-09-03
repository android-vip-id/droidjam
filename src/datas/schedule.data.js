import { DATA_SPEAKER } from './speaker.data';
import { v4 as uuidv4 } from 'uuid';

export const DATA_SCHEDULE = [
	{
		uuid: uuidv4(),
		time: '08.00 - 09.00',
		duration: '60',
		agenda: 'Audience Reception',
		title: null,
		pic: 'Event team',
		speakers: [],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '09.00 - 09.30',
		duration: '30',
		agenda: 'Welcoming Remarks',
		title: null,
		pic: 'MC',
		speakers: [],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '09.30 - 12.00',
		duration: '150',
		agenda: 'Tech Talk: Android & Flutter',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['sidiq-permana'].name,
				data: DATA_SPEAKER['sidiq-permana'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '13.00 - 16.30',
		duration: '150',
		agenda: 'Tech Talk: Android & Flutter',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['sidiq-permana'].name,
				data: DATA_SPEAKER['sidiq-permana'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '16.30 - 17.00',
		duration: '30',
		agenda: 'Tech Talk: #JuaraAndroid campaign',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['veronica-putri'].name,
				data: DATA_SPEAKER['veronica-putri'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '17.00 - 17.45',
		duration: '30',
		agenda: 'Fireside Chat & Networking Session',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: 'All Speakers',
				data: null,
			},
		],
		organization: '',
	},
];
