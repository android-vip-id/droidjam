import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyC3aQp-A7p_I-uoAOfFp7XdQaEIbaZ6pRQ',
	authDomain: 'droidjam-f6a27.firebaseapp.com',
	projectId: 'droidjam-f6a27',
	storageBucket: 'droidjam-f6a27.appspot.com',
	messagingSenderId: '192395993398',
	appId: '1:192395993398:web:a7947e280fd5aab8385397',
	measurementId: 'G-RGL10D6GKP',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
