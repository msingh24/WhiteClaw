

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const regPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;


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


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.gal')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


