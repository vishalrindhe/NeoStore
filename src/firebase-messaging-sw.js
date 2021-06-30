// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyB11pTx_fobtJ71753Ben9juYc31st7U44",
    authDomain: "neostore-73c72.firebaseapp.com",
    projectId: "neostore-73c72",
    storageBucket: "neostore-73c72.appspot.com",
    messagingSenderId: "899523639803",
    appId: "1:899523639803:web:2ce2bb8924369ba829f35e",
    measurementId: "G-21663WB1YM"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


