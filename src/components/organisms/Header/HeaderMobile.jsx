import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDehaze } from 'react-icons/md';
import { ROUTES } from '../../../routes';
import { HeaderSideMenu } from './HeaderSideMenu';

export const HeaderMobile = () => {
	const [showSideMenu, setShowSideMenu] = useState(false);

	const handleClose = () => setShowSideMenu(false);

	return (
		<div className="block lg:hidden">
			<HeaderSideMenu show={showSideMenu} onClose={handleClose} />
			<div className="px-8 sm:px-10">
				<div className="flex items-center justify-between space-x-6">
					<Link to={ROUTES.HOME} onClick={handleClose}>
						<img className="w-20" src={require('@/images/logo/droid-jam-logo-square.png')} alt="Droidjam Logo" />
					</Link>

					<button
						className="px-3 py-2 border-2 border-transparent text-white transform translate-x-4 bg-white bg-opacity-0 hover:bg-opacity-10 transition-all rounded-lg"
						onClick={() => setShowSideMenu(!showSideMenu)}
					>
						<MdDehaze size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};
