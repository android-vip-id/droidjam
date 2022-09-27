import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
	return (
		<header className="fixed z-10 left-0 top-0 w-full bg-black">
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
