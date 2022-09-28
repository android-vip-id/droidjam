import React from 'react';
import { useParams } from 'react-router-dom';

export const SpeakerDetail = () => {
	const params = useParams();

	console.log({ params });

	return <div>SpeakerDetail</div>;
};
