import { DATA_SPEAKERS_ARRAY } from '@/datas';
import React from 'react';
import { ImLinkedin } from 'react-icons/im';

export const SpeakerList = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
			{DATA_SPEAKERS_ARRAY.map((speaker) => (
				<div
					key={speaker.name}
					className="group bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-all flex flex-col"
				>
					<div className="relative aspect-1 border-b">
						<img
							className="aspect-1 w-full h-full object-cover"
							src={speaker.avatar || 'https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg'}
							alt={speaker.name}
						/>
						{speaker.bio && (
							<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 text-white p-5 opacity-0 group-hover:opacity-100 transition-all overflow-y-scroll text-sm">
								{speaker.bio}
							</div>
						)}
					</div>
					<div className="flex-1 flex flex-col justify-between">
						<div className="p-4 pb-2 space-y-4 flex-1">
							<div className="space-y-1">
								<h1 className="text-sm sm:text-base font-semibold">{speaker.name}</h1>
								<p className="text-xs sm:text-sm">
									{speaker.designation.map((designation) => (
										<div>{designation}</div>
									))}
								</p>
							</div>
						</div>
						<div className="p-4 py-3 border-t flex justify-center">
							{speaker.socials.map((social) => (
								<a
									className="inline-block hover:text-blue-500 transition-all text-base md:text-xl"
									target="_blank"
									rel="noreferrer"
									href={social.url}
								>
									{social.type === 'linkedin' && <ImLinkedin />}
								</a>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
