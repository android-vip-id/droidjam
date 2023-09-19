import { ImLinkedin } from 'react-icons/im';
import { DATA_ORGANIZER_ARRAY } from '@/datas';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const OrganizerList = () => {
	const navigate = useNavigate();
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{DATA_ORGANIZER_ARRAY.map((organizer) => (
				<button
					key={organizer.name}
					className="flex flex-col overflow-hidden transition-all bg-white rounded-md shadow-md group hover:shadow-lg"
					onClick={(event) => {
						event.stopPropagation();
						navigate(`${ROUTES.ORGANIZER}/${organizer.key}`);
					}}
				>
					<div className="relative w-full border-b aspect-1">
						<img
							className="object-cover w-full h-full aspect-1"
							src={organizer.avatar || 'https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg'}
							alt={organizer.name}
						/>
						{organizer.bio && (
							<div className="absolute top-0 left-0 w-full h-full p-5 overflow-y-scroll text-sm text-white transition-all bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
								{organizer.bio}
							</div>
						)}
					</div>
					<div className="flex flex-col justify-between w-full flex-1">
						<div className="flex-1 p-4 pb-2 space-y-4">
							<div className="space-y-1">
								<h1 className="text-sm font-semibold sm:text-base relative">{organizer.name} </h1>
								<div className="text-xs sm:text-sm">
									{organizer.designation.map((designation) => (
										<div key={designation}>{designation}</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex justify-center p-4 py-3 border-t">
							{organizer.socials.map((social) => (
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
