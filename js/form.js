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
            }).catch((e) => {
                document.querySelector('.invalid').innerHTML = "Invalid Email Format";
                document.querySelector('.invalid').style.display = 'block';
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
        currentUser = auth.currentUser;
        document.querySelector("#if-log-out").innerHTML = 'Profile';
        document.querySelector("#if-log-out").href = 'profile.html';
        document.querySelector('#if-log-in').style.visibility = 'visible';
        sign_in_form.reset();
    }).catch((e) => {
        console.log(e);
        document.querySelector('.invalid').innerHTML = "Invalid Email or Password";
        document.querySelector('.invalid').style.display = 'block';
    })
})

function logout()
{
    auth.signOut();
    document.querySelector("#if-log-out").innerHTML = 'Join | Sign in';
    document.querySelector("#if-log-out").href = 'Account.html';
    document.querySelector('#if-log-in').style.visibility = 'hidden';
}

function changeTab(evt, tabName) {
    var i, tabcontent, tablinks;
    document.querySelector('.alert').style.display = 'none';
    document.querySelector('.invalid').style.display = 'none';
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    //console.log(tablinks);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();