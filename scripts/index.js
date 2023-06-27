//For Sign Up Button

const signUp_Model = document.getElementById("signUp_Modal");
const signUp_btn = document.getElementById("signUp")

signUp_btn.addEventListener("click", SignUp)
function SignUp() {
    signUp_Model.style.display = "block";
}


// For Sign In Button

const signIn_Model = document.getElementById("signIn_Modal");
const signIn_btn = document.getElementById("signIn");

signIn_btn.addEventListener("click", SignIn)
function SignIn() {
    signIn_Model.style.display = "block";
}


//For create post

const create_Model = document.getElementById("post_card");
const createBtn = document.getElementById("createPost");


createBtn.addEventListener("click", CreatePost)
function CreatePost() {
    create_Model.style.display = "block";
}


//Close Function for signUp
const close_signUp = document.getElementById("closeSignUpId")
close_signUp.addEventListener("click", CloseFunc)

function CloseFunc() {
    signUp_Model.style.display = "none";
}


//Close Function for signIn
const close_SignIn = document.getElementById("closeSignInId")
close_SignIn.addEventListener("click", CloseFunc1)

function CloseFunc1() {
    signIn_Model.style.display = "none";
}

//Close Function for create post
const Create_Post = document.getElementById("closec")
Create_Post.addEventListener("click", Closecre)

function Closecre() {
    create_Model.style.display = "none";
}

