const $carousel = document.querySelector(".carousel");
const $next = document.querySelector(".next");
const $previous = document.querySelector(".previous");
console.log($next);
$next!.addEventListener("click", nextSlide);
$previous!.addEventListener("click", previousSlide);

let index = 0;

function showSlide() {
  const $itemCarousel = document.querySelectorAll<HTMLElement>(".item-carousel");
  $itemCarousel.forEach(($item) => {
    $item.classList.remove("active");
  });
  $itemCarousel[Math.abs(index) % $itemCarousel.length].classList.add("active");
}

function nextSlide() {
  index++;
  showSlide();
}

function previousSlide() {
  index--;
  showSlide();
}
