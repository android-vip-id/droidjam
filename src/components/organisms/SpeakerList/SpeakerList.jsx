import { ImLinkedin } from 'react-icons/im';
import { DATA_SPEAKER_ARRAY } from '@/datas';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const SpeakerList = () => {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{DATA_SPEAKER_ARRAY.map((speaker) => (
				<Link
					key={speaker.name}
					to={`${ROUTES.SPEAKER}/${speaker.key}`}
					className="flex flex-col overflow-hidden transition-all bg-white rounded-md shadow-md group hover:shadow-lg"
				>
					<div className="relative border-b aspect-1">
						<img
							className="object-cover w-full h-full aspect-1"
							src={speaker.avatar || 'https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg'}
							alt={speaker.name}
						/>
						{speaker.bio && (
							<div className="absolute top-0 left-0 w-full h-full p-5 overflow-y-scroll text-sm text-white transition-all bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
								{speaker.bio}
							</div>
						)}
					</div>
					<div className="flex flex-col justify-between flex-1">
						<div className="flex-1 p-4 pb-2 space-y-4">
							<div className="space-y-1">
								<h1 className="text-sm font-semibold sm:text-base">{speaker.name}</h1>
								<div className="text-xs sm:text-sm">
									{speaker.designation.map((designation) => (
										<div key={designation}>{designation}</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex justify-center p-4 py-3 border-t">
							{speaker.socials.map((social) => (
								<a
									key={social.url}
									className="inline-block text-base transition-all hover:text-blue-500 md:text-xl"
									target="_blank"
									rel="noreferrer"
									href={social.url}
								>
									{social.type === 'linkedin' && <ImLinkedin />}
								</a>
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};
