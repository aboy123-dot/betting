


 function signup(){
    var fullname = document.getElementById('fullname').value
    var email = document.getElementById('email').value
var password = document.getElementById('password').value
var picture = document.getElementById("picture").value
var username = document.getElementById('username').value
var phone = document.getElementById('phone').value
    localStorage.setItem("fullname", fullname)
    localStorage.setItem("email1", email )
    localStorage.setItem("password1", password)
    localStorage.setItem("img", picture)
    localStorage.setItem("username1", username)
    localStorage.setItem("phone1", phone)

    


    var fullname = document.getElementById('fullname').value=""
    var email = document.getElementById('email').value=""
var password = document.getElementById('password').value=""
var picture = document.getElementById('picture').value=""
var username = document.getElementById('username').value =""
var username = document.getElementById('phone').value =""

alert("Vip Registration successful")
window.location.href ="homepage.html"


    
}
function login(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var email1 = localStorage.getItem("email1")
    var password1 = localStorage.getItem("password1")

    if (email == email1 && password == password1){
        localStorage.setItem("code", "secret")
        window.location.href ="homepage.html"


    }else{
        alert("email is incorrect")
    }


}