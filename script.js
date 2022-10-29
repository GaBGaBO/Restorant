navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () =>{
  navbar.classList.toggle("active");
  profile.classList.remove("active");
}




profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () =>{
  profile.classList.toggle("active"); //ხელის დაჭერის დროს იუზერის აიქონზე, გამოჩნდება ჩვენი პროფილის ფეიჯი
  navbar.classList.remove("active");

}

window.onscroll = () =>{
  navbar.classList.remove("active");
  profile.classList.remove("active");
}





