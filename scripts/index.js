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

const create_Modal = document.getElementById("post_Modal");
const createBtn = document.getElementById("createPost");


createBtn.addEventListener("click", CreatePost)
function CreatePost() {
    create_Modal.style.display = "block";
}


//Close Function for signUp
const close_signUp = document.getElementById("closeSignUpId")
close_signUp.addEventListener("click", CloseFunction)

function CloseFunction() {
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
Create_Post.addEventListener("click", CloseFunCre)

function CloseFunCre() {
    create_Model.style.display = "none";
}

