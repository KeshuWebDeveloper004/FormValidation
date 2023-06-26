var name=document.getElementById('name-error');
var password=document.getElementById('password-error');
var submit=document.getElementById('submit-error');

function validateName()
{
var name=document.getElementById("contact-name");
if(name.value=="")
{
document.getElementById("name-error").innerHTML="*Name is blank";
name.focus();
name.style.borderBottom="solid red 3px";
return false;
}
if(name.value.length<3)
{
document.getElementById("name-error").innerHTML="*Characters should not less than 3";
name.focus();
name.style.borderBottom="solid red 3px";
return false;
}

document.getElementById("name-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
name.style.borderBottom="solid green 3px";
 return true;
}
function validatePassword()
{
var password=document.getElementById("contact-Password");
if(password.value==""|| password.value.length<8)
{
document.getElementById("password-error").innerHTML="please set minimum 8 digit password";
password.focus();
password.style.borderBottom="solid red 3px";
return false;
}
document.getElementById("password-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
password.style.borderBottom="solid green 3px";
 return true;
}
function validateForm()
{
if(!validateName()||!validatePassword())
return false;

}









