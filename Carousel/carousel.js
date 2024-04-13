
function showSlides() {
  let carousel = document.getElementsByClassName("carousel-container");
  const imageNumber = parseInt(carousel[0].dataset.carousel);

  let allImages = document.getElementsByClassName('carousel-slide');
  let leng = allImages.length;

  if (imageNumber === leng) {
    carousel[0].style.cssText = `transform: translateX(0); transition: none;`
    carousel[0].dataset.carousel = `${1}`; // Change image every 2 seconds
    setTimeout(showSlides, 0)
  } else {
    carousel[0].style.cssText = `transform: translateX(${-imageNumber * 100}%); transition: transform 1s ease-out`
    carousel[0].dataset.carousel = `${parseInt(imageNumber) + 1}`; // Change image every 2 seconds
    setTimeout(showSlides, 2000)
  }  
}

let slideIndex = 0;
showSlides();

