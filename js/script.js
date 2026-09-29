document
.getElementById("registrationForm")
.addEventListener("submit",function(event){


event.preventDefault();



let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let mobile =
document.getElementById("mobile").value;


let department =
document.getElementById("department").value;


let selectedEvent =
document.getElementById("event").value;



let message =
document.getElementById("message");




if(
name=="" ||
email=="" ||
mobile=="" ||
department=="" ||
selectedEvent==""
){


message.style.color="red";


message.innerHTML=
"❌ Please fill all required fields";


}



else{


message.style.color="green";


message.innerHTML=
"✅ Registration Successful! Welcome to PEC Innovate Fest 2026 🎉";



document
.getElementById("registrationForm")
.reset();



}



});