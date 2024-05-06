// Initialize the slide index at 0
let slideIndex = 0;
// LLamada de funcion
showSlides();
//Declaracion de funcion
function showSlides() {
  //Seleccion de las imagenes en el carrosel
  const slides = document.querySelectorAll('.carousel-content img');
  // Interactuar con las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // Incremento
  slideIndex++;
  // si el contador es mayor al numero de paginas reiniciar contador
  if (slideIndex > slides.length) { slideIndex = 1; }
   // Agregar la clase activa a la diapositiva actual
  slides[slideIndex - 1].classList.add('active');
  // LLamar la funcion despues de 2 segundos
  setTimeout(showSlides, 2000); 
}
