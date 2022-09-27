import { Container } from '@/components/atoms';

export const BannerPage = ({ title, description }) => {
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
				<div className="text-white space-y-3">
					<h1
						className="text-5xl font-bold bg-gradient-primary bg-clip-text"
						style={{ WebkitTextFillColor: 'transparent' }}
					>
						{title}
					</h1>
					<p className="text-lg opacity-50 lg:w-1/2">{description}</p>
				</div>
			</Container>
		</section>
	);
};
