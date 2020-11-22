// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-HIDU9lHK748XWsEBzsYAjoN9KEbgtxk",
    authDomain: "test-91938.firebaseapp.com",
    databaseURL: "https://test-91938.firebaseio.com",
    projectId: "test-91938",
    storageBucket: "test-91938.appspot.com",
    messagingSenderId: "296187612268",
    appId: "1:296187612268:web:c89640be93bb1c758ddc49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
var currentUser = auth.currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
        document.querySelector("#if-log-out").innerHTML = 'Profile';
        document.querySelector("#if-log-out").href = 'profile.html';
        document.querySelector("#if-log-in").style.visility = 'visible';
    } else {
        console.log(user);
        document.querySelector("#if-log-out").innerHTML = 'Join | Sign in';
        document.querySelector("#if-log-out").href = 'Account.html';
        document.querySelector('#if-log-in').style.visibility = 'hidden';
    }
  });
  
