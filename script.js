const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});



Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});


function scrollToSection(sectionId) {
  container.classList.remove("change");
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
