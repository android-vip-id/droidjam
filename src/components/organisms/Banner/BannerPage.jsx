import { Button, Container } from '@/components/atoms';
import { FiCalendar } from 'react-icons/fi';

export const BannerPage = ({ title, description, buttonText, onClickButton }) => {
	return (
		<section className="relative bg-black pt-40 pb-32">
			<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
				<img
					className="w-full h-3/5 object-cover lg:object-contain lg:w-11/12"
					src={require('@/images/samples/banner-sky.svg').default}
					alt="banner skye"
				/>
			</div>

			<Container className="relative">
				<div className="space-y-8">
					<div className="text-white space-y-3">
						<h1
							className="text-5xl font-bold bg-gradient-primary bg-clip-text"
							style={{ WebkitTextFillColor: 'transparent' }}
						>
							{title}
						</h1>
						<p className="text-lg opacity-50 lg:w-3/4">{description}</p>
					</div>
					{buttonText && (
						<Button className="px-6 py-3 space-x-3" leftIcon={<FiCalendar size={18} />} onClick={onClickButton}>
							{buttonText}
						</Button>
					)}
				</div>
			</Container>
		</section>
	);
};
