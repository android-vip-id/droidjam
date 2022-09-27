import { MdLaunch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/atoms';
import { HEADER_ROUTES } from '../../../routes';
import { DATA_EVENT } from '@/datas';

export const HeaderSideMenu = ({ show, onClose }) => {
	return (
		<div>
			<div
				className={`transition-all fixed z-10 left-0 top-0 w-screen h-full bg-black ${
					show ? 'visible opacity-50' : 'invisible opacity-0'
				}`}
				onClick={onClose}
			/>

			<div
				className={`fixed right-0 top-0 h-full w-72 bg-white z-10 shadow-md transition-all transform ${
					show ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex flex-col">
					{HEADER_ROUTES.map((route) => (
						<NavLink
							key={route.path}
							onClick={onClose}
							className={({ isActive }) =>
								isActive
									? 'font-semibold p-5 text-gray-700 text-sm'
									: 'font-semibold p-5 text-sm text-gray-500 hover:text-gray-700'
							}
							to={route.path}
						>
							{route.title}
						</NavLink>
					))}
				</div>

				<div className="absolute bottom-0 flex items-center space-x-3 justify-between w-full p-5">
					<Button
						className="w-full text-center justify-center py-3"
						href={DATA_EVENT.REGISTRATION_LINK}
						onClick={onClose}
						text="Buy Tickets"
						icon={<MdLaunch size={16} />}
					/>
				</div>
			</div>
		</div>
	);
};
