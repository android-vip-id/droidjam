// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC3aQp-A7p_I-uoAOfFp7XdQaEIbaZ6pRQ",
	authDomain: "droidjam-f6a27.firebaseapp.com",
	projectId: "droidjam-f6a27",
	storageBucket: "droidjam-f6a27.appspot.com",
	messagingSenderId: "192395993398",
	appId: "1:192395993398:web:a7947e280fd5aab8385397",
	measurementId: "G-RGL10D6GKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
