// v1.0.0 | mysites - central firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjdXXUzFOsf5wKDJVGt7TQzHNFj2bEkVY",
    authDomain: "complaint-bingo.firebaseapp.com",
    projectId: "complaint-bingo",
    storageBucket: "complaint-bingo.firebasestorage.app", // Verified from bucket settings
    messagingSenderId: "403581028557",
    appId: "1:403581028557:web:13058c895b707bf7814184"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export tools for use in our pages
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
