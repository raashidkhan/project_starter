// Scroll Animations

function scrollAnimation() {
  let inAnimation = document.querySelectorAll('.element-to-animate');

  inAnimation.forEach((item) => {
    let introPosition = item.getBoundingClientRect().top;
    let scrollPosition = window.innerHeight / 1.7;
    if (introPosition < scrollPosition) {
      item.classList.add('animate-in');
    } else {
      item.classList.remove('animate-out');
    }
  });
}
window.addEventListener('scroll', scrollAnimation);
