const pass_login=document.querySelector('.password');
const show_btn=document.querySelector('.show');
show_btn.addEventListener('click',function(){
    if (pass_login.type==="password") {
        pass_login.type="text";
        pass_login.style.color="skyblue";
        show_btn.textContent="HIDE";
    }else{
        pass_login.type="password";
        show_btn.style.color="#222";
        show_btn.textContent="SHOW";
    }
});

//validation

var email = document.forms['form']['email'];
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);


function validated(){
    if (email.value.length < 9) {
        email.style.border ="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border ="1px solid red";
        password_error.style.display="block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if (email.value.length >=8) {
        email.style.border ="1px solid silver";
        email_error.style.display="none";
        email.focus();
        return true;
        
    }
}
function password_Verify(){
    if (password.value.length >=5) {
        password.style.border ="1px solid silver";
        password_error.style.display="none";
        password.focus();
        return true;
        
    }
}



