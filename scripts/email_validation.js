function validate_email1() {
  let email = document.forms['form1']['email'].value;

  let email_re = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  
  if (email.match(email_re)) {
    let error_message = document.getElementById('email1_error');
    error_message.style.visibility = "visible";
    let email_input = document.getElementById("email")
    email_input.style.borderColor = "red"
  } else {
    let error_message = document.getElementById('email1_error');
    error_message.style.visibility = "hidden";
    let email_input = document.getElementById("email")
    email_input.style.borderColor = "black"
  }
}

function validate_email2() {
  let email = document.forms['form2']['email2'].value;

  let email_re = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  
  if (email.match(email_re)) {
    let error_message = document.getElementById('email2_error');
    error_message.style.visibility = "visible";
    let email_input = document.getElementById("email2")
    email_input.style.borderColor = "red"
  } else {
    let error_message = document.getElementById('email2_error');
    error_message.style.visibility = "hidden";
    let email_input = document.getElementById("email2")
    email_input.style.borderColor = "black"
  }
}