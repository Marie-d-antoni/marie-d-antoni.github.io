/* Marie d’Antoni, céramiste : petits comportements du site.
   - menu mobile (bouton burger)
   - trait sous l'en-tête quand on fait défiler la page
   - apparition douce des blocs au défilement (.reveal)
   - année du pied de page
   Après toute modification, augmenter le numéro ?v=N dans les pages. */

(function () {
  'use strict';

  window.mdaPret = true; // signale que le script est bien chargé (voir <head>)

  var racine = document.documentElement;
  racine.classList.add('js');

  /* Menu mobile */
  var bouton = document.querySelector('.menu-bouton');
  var menu = document.getElementById('menu');

  function fermerMenu() {
    if (!bouton) return;
    bouton.setAttribute('aria-expanded', 'false');
    bouton.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.classList.remove('menu-ouvert');
  }

  if (bouton && menu) {
    bouton.addEventListener('click', function () {
      var ouvert = bouton.getAttribute('aria-expanded') === 'true';
      bouton.setAttribute('aria-expanded', String(!ouvert));
      bouton.setAttribute('aria-label', ouvert ? 'Ouvrir le menu' : 'Fermer le menu');
      document.body.classList.toggle('menu-ouvert', !ouvert);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) fermerMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fermerMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) fermerMenu();
    });
  }

  /* Trait sous l'en-tête au défilement */
  var entete = document.querySelector('.entete');
  if (entete) {
    var majEntete = function () {
      entete.classList.toggle('defile', window.scrollY > 8);
    };
    majEntete();
    window.addEventListener('scroll', majEntete, { passive: true });
  }

  /* Apparition douce au défilement */
  var blocs = document.querySelectorAll('.reveal');
  var moinsDAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (moinsDAnimations || !('IntersectionObserver' in window)) {
    blocs.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    blocs.forEach(function (el) { observateur.observe(el); });
  }

  /* Année du pied de page */
  var annee = document.querySelector('[data-annee]');
  if (annee) annee.textContent = String(new Date().getFullYear());
})();
