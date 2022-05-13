window.addEventListener('scroll', onScroll);
onScroll();


function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  

}

function showNavOnScroll(){
  navigation.classList.add('scroll');

  if (scrollY == 0){
    navigation.classList.remove('scroll');
  }
}

// essa função nao está funcionando
function showBackToTopButtonOnScroll(){
  if (scrollY > 1000) {
  backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded');
 // showMenu.classList.add('menu');
}

function closeMenu(){
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .cards, #about, #about header, #about content');