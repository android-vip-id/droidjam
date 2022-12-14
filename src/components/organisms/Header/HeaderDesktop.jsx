import { Link, NavLink } from 'react-router-dom';
import { ROUTES, HEADER_ROUTES } from '../../../routes';
import { Button } from '@/components/atoms';
import { ImTicket } from 'react-icons/im';
import { DATA_EVENT } from '@/datas';

export const HeaderDesktop = () => {
	return (
		<div className="overflow-hidden hidden lg:block">
			<div className="container max-w-screen-xl py-3">
				<div className="relative flex items-center justify-center">
					<div className="absolute left-0 flex items-center space-x-6">
						<Link className="flex items-center" to={ROUTES.HOME}>
							<img className="w-24" src={require('@/images/logo/droid-jam-logo-square.png')} alt="Droid Jam Logo" />
						</Link>
					</div>

					<nav className="flex items-center justify-center">
						{HEADER_ROUTES.map((route) => (
							<NavLink
								end
								key={route.path}
								className={({ isActive }) =>
									isActive
										? 'px-6 py-6 text-sm lg:text-base text-white font-semibold'
										: 'px-6 py-6 text-sm lg:text-base text-gray-300 hover:text-white'
								}
								to={route.path}
							>
								{route.title}
							</NavLink>
						))}
					</nav>

					<div className="absolute right-0 flex items-center space-x-3">
						<Button
							className="px-5 py-3 space-x-3 lg:px-7 lg:py-4 lg:text-base"
							variant="primary"
							text="Get Tickets"
							href={DATA_EVENT.REGISTRATION_LINK}
							rightIcon={<ImTicket size={16} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
