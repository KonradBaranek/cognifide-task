var normal = document.getElementById('normal');

var reset = document.getElementById('reset');
reset.style.display='none';

var forgotten = document.getElementById('forgotten');

var cancel = document.getElementById('cancel');

forgotten.addEventListener('click',function(){
    normal.style.display='none';
    reset.style.display = 'block';
});

cancel.addEventListener('click',function(){
    reset.style.display='none';
    normal.style.display = 'block';
});

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var email_label = document.getElementById('email-label');
var invalid_message = document.getElementById('invalid-message');
var email_shadow = document.getElementById('email-shadow');


form.addEventListener("submit", function (event) {

  if (!email.validity.valid) {
    email_label.classList.add("invalid")
    invalid_message.classList.remove("hidden")
    email_shadow.classList.add("invalid-border");
    event.preventDefault();
  }
}, false);

var form_reset  = document.getElementsByTagName('form')[1];
var email_reset = document.getElementById('email-reset');
var email_reset_label = document.getElementById('email-reset-label');
var reset_invalid_message = document.getElementById('reset-invalid-message');
var email_reset_shadow = document.getElementById('email-reset-shadow');

form_reset.addEventListener("submit", function (event) {

  if (!email_reset.validity.valid) {
    email_reset_label.classList.add("invalid")
    reset_invalid_message.classList.remove("hidden")
    email_reset_shadow.classList.add("invalid-border")
    event.preventDefault();

  }
}, false);

var hints = document.querySelectorAll(".hint");

hints.forEach( function ( hint ){
  hint.addEventListener('mouseover',function(){
    hint.parentElement.parentElement.querySelector('.tooltip').classList.remove('hidden')
  })
  hint.addEventListener('mouseout',function(){
    hint.parentElement.parentElement.querySelector('.tooltip').classList.add('hidden')
  })
})

