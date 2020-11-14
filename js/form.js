
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

const sign_up_form = document.querySelector("#sign-up-form");
const sign_in_form = document.querySelector("#sign-in-form");

sign_up_form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.invalid').style.display = 'none';
    const full_name = sign_up_form["sign_up_full_name"].value;
    const email = sign_up_form["sign_up_email"].value;
    const password = sign_up_form["sign_up_password"].value;
    const confirm_password = sign_up_form["sign_up_comfirm_password"].value;
    if (full_name != "" && email != "" && password != "" && confirm_password != "") {
        if (password != confirm_password) {
            alert("Confirm Password didn't match");
        }
        else {
            auth.createUserWithEmailAndPassword(email, password).then(response => {
                //console.log(response.user);
                document.querySelector('.alert').style.display = 'block';
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById('sign-in').style.display = "block";
                tablinks[0].className += " active";
                sign_up_form.reset();
                auth.signOut();
            })
        }
    }
})

sign_in_form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.alert').style.display = 'none';
    document.querySelector('.invalid').style.display = 'none';
    const email = sign_in_form["sign_in_email"].value;
    const password = sign_in_form["sign_in_password"].value;
    auth.signInWithEmailAndPassword(email, password).then((response) => {
        console.log(response.user);
        alert("Login Successful!");
        sign_in_form.reset();
    }).catch((e) => {
        console.log(e);
        document.querySelector('.invalid').style.display = 'block';
    })
})


function changeTab(evt, cityName) {
    var i, tabcontent, tablinks;
    document.querySelector('.alert').style.display = 'none';
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    //console.log(tablinks);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();