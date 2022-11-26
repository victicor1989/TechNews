let botonReload = document.querySelector('.nav-brand')
botonReload.addEventListener('click', reloadPage)

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' , {delay: 500});
ScrollReveal().reveal('.cards-banner-one' , {delay: 500});
ScrollReveal().reveal('.cards-banner-two' , {delay: 500});

function reloadPage() {
  location.reload()
}
