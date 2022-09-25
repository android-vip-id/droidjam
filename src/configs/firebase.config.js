import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js';

export const firebaseConfig = {
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
