const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const error = document.querySelector('.conError');
const usernamePattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const regPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
const contactForm = document.querySelector('.ContactForm')

// contact form

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const emailCon = contactForm.emailCon.value;
    const subject = contactForm.subject.value;
    const fname = contactForm.firstname.value;
    const lname = contactForm.lastname.value;
    const birth = contactForm.birthday.value;
    const gender = contactForm.gender.value;
    const zip = contactForm.zipCode.value;
    const message = contactForm.messageBox.value;

    if(usernamePattern.test(emailCon)){
        console.log(emailCon)
    } if (regPattern.test(subject)){
      console.log(subject)  
    } if (regPattern.test(fname)){
        console.log(fname)  
    } if (regPattern.test(lname)){
        console.log(lname)  
    } if (regPattern.test(birth)){
        console.log(birth)  
    } if (regPattern.test(gender)){
        console.log(gender)  
    } if (regPattern.test(zip)){
        console.log(zip)  
    } if (regPattern.test(message)){
        console.log(message)  
        
    }  if (	emailCon && subject && fname && lname && birth && gender && zip && message ){
        alert('thankyou For Your Support')
    } else {
        error.textContent = 'Please Fill Out Form Correctly';
    };


});







// footer form

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const email = form.email.value;
    const name = form.fullname.value;
    if(usernamePattern.test(email)){
        console.log(email)
    } if (regPattern.test(name)){
      console.log(name)  
    }  if (	email && name ){
        alert('thankyou For Your Support')
    } else {
        feedback.textContent = 'Please Fill Out Form Correctly';
    };


});