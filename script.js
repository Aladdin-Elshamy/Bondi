const navLinks = document.querySelectorAll(".nav-link");
const ourWorkList = document.querySelectorAll(".our-work ul li");
const ourImages = document.querySelectorAll(".our-work .box img");
const form = document.forms[0];
const email = document.getElementById("email");
let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
ourWorkList.forEach((li) => {
    li.addEventListener("click",makeFilterActive)
    li.addEventListener("click",showImage)
})
navLinks.forEach((link) => {
    link.addEventListener("click",makeActive)
})

function makeActive() {
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    this.classList.add("active");
}
function makeFilterActive() {
    ourWorkList.forEach((li) => {
        li.classList.remove("active");
    });
    this.classList.add("active");
}
function showImage() {
    ourImages.forEach((img) => {
        img.parentElement.parentElement.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((img) => {
        img.parentElement.parentElement.style.display = "block";
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    showAlert();
})

function alert(message, type) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible mb-4" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
}
function showAlert() {
    if(email.value === "") {
        alert('Please enter your email address', 'danger')
    }
    else{
        form.reset()
        alert('Nice, we will contact you!', 'dark')
    }
     
}