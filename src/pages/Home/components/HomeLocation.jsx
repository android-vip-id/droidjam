import { DATA_EVENT } from '@/datas';
import React from 'react';

export const HomeLocation = () => {
	return (
		<section className="relative ">
			<iframe
				src={DATA_EVENT.LOCATION.IFRAME_URL}
				width="100%"
				height="300"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title={DATA_EVENT.LOCATION.LABEL}
			/>
		</section>
	);
};
