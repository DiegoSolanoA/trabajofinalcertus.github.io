let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
    dots[i].classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

showSlide(slideIndex);

// Mostrar más info
const verMasBtn = document.getElementById("verMasBtn");
const parrafoExtra = document.getElementById("parrafoExtra");

verMasBtn.addEventListener("click", () => {
  if (parrafoExtra.style.display === "none") {
    parrafoExtra.style.display = "block";
    parrafoExtra.classList.add("fade");
    verMasBtn.textContent = "Ver menos";
  } else {
    parrafoExtra.style.display = "none";
    parrafoExtra.classList.remove("fade");
    verMasBtn.textContent = "Ver más";
  }
});
