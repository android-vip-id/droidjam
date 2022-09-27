import { Container } from '@/components/atoms';
import { DATA_EVENT } from '@/datas';
import React from 'react';

export const HomeLocation = () => {
	return (
		<section className="relative ">
			<Container className="py-16 space-y-6">
				<div className="space-y-2">
					<h1 className="text-2xl font-bold">Location</h1>
					<p className="opacity-70">{DATA_EVENT.LOCATION.ADDRESS}</p>
				</div>
				<div className="grid grid-cols-12 rounded-md overflow-hidden shadow-md">
					<div className="col-span-12 md:col-span-9">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63466.106883879664!2d106.78640942196739!3d-6.1800292213344035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42bb972a2c3%3A0x274be05db2df2116!2sIndosat%20Ooredoo!5e0!3m2!1sid!2sid!4v1664306669480!5m2!1sid!2sid"
							width="100%"
							height="450"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title={DATA_EVENT.LOCATION.LABEL}
						/>
					</div>
					<div className="hidden md:col-span-3">
						<img className="w-full h-full object-cover" src={require('@/images/samples/indosat-ooredoo.png')} alt="" />
					</div>
				</div>
			</Container>
		</section>
	);
};
