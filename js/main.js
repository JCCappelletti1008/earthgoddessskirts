// script.js
// Stub for future interaction: e.g. lazy-loading images or fade-in animations.
document.addEventListener('DOMContentLoaded', () => {
  console.log('Earth Goddess Skirts splash page loaded');
  // Example: fade in hero elements (to be implemented later)
});


function updateParallax() {
  document.querySelectorAll('.parallax').forEach(el => {
    const offset = window.pageYOffset;
    const scrollSpeed = 0.25; // adjust for desired smoothness
    const imageOffset = -offset * scrollSpeed; // scroll upward from bottom
    el.style.backgroundPositionY = `${imageOffset}px`;
  });
}


// window.addEventListener('load', updateParallax);

window.addEventListener('scroll', updateParallax);
