//listen for auth status
auth.onAuthStateChanged(user => {
    /* const userInfo = document.querySelector('#username-form');
    const username = userInfo['username-input'].value; */
    if (user){
        /* firebaseDataBase.ref('users/' + user.uid).set({
            email: user.email,
            uid : user.uid,
            username: username
        });
     */
        console.log('logged in:', user);
    }else{
        console.log('user logged out');
    }
})


//sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

//log out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("signed out");
    });
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred.user)
        //close and reset
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
    
})
