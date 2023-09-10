import { ImLinkedin } from 'react-icons/im';
import { DATA_SPEAKER_ARRAY } from '@/datas';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const SpeakerList = () => {
	const navigate = useNavigate();
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{DATA_SPEAKER_ARRAY.map((speaker) => (
				<button
					key={speaker.name}
					className="flex flex-col overflow-hidden transition-all bg-white rounded-md shadow-md group hover:shadow-lg"
					onClick={(event) => {
						event.stopPropagation();
						navigate(`${ROUTES.SPEAKER}/${speaker.key}`);
					}}
				>
					<div className="relative border-b aspect-1">
						<img
							className="object-cover w-full h-full aspect-1"
							src={speaker.avatar || 'https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg'}
							alt={speaker.name}
						/>
						{speaker.country && (
							<img className="absolute right-2.5 top-2.5 w-5" src={speaker.country} alt={speaker.name} />
						)}
						{speaker.bio && (
							<div className="absolute top-0 left-0 w-full h-full p-5 overflow-y-scroll text-sm text-white transition-all bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
								{speaker.bio}
							</div>
						)}
					</div>
					<div className="flex flex-col justify-between w-full flex-1">
						<div className="flex-1 p-4 pb-2 space-y-4">
							<div className="space-y-1">
								<h1 className="text-sm font-semibold sm:text-base relative">{speaker.name} </h1>
								<div className="text-xs sm:text-sm">
									{speaker.designation.map((designation) => (
										<div key={designation}>{designation}</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex justify-center p-4 py-3 border-t">
							{speaker.socials.map((social) => (
								<button
									key={social.url}
									className="block text-base transition-all hover:text-blue-500 md:text-xl"
									rel="noreferrer"
									onClick={(event) => {
										event.stopPropagation();
										window.open(social.url, '_blank');
									}}
								>
									{social.type === 'linkedin' && <ImLinkedin />}
								</button>
							))}
						</div>
					</div>
				</button>
			))}
		</div>
	);
};
