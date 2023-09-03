import { DATA_EVENT } from '@/datas';
import React from 'react';

export const HomeLocation = () => {
	return (
		<section className="relative ">
			<iframe
				src="https://www.google.com/maps/dir//Jl.+BSD+Raya+Utama,+Lengkong+Kulon,+Kec.+Pagedangan,+Kabupaten+Tangerang,+Banten+15331/@-6.2845561,106.5556538,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69fb4030859dfb:0xbc8402640a0b831d!2m2!1d106.6380557!2d-6.2845625?entry=ttu"
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
