// ===== Shared header behavior (scroll state + mobile menu) =====
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  const nav = document.getElementById('siteNav');
  const menuToggle = document.getElementById('menuToggle');
  if (nav && menuToggle) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // ===== Services tabs (homepage only) =====
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');
  if (tabBtns.length && panels.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });
  }

  // ===== Contact form (front-end only — connect to a real backend/service) =====
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: replace with a real submission (e.g. Formspree, your own API, mailto fallback).
      if (formSuccess) formSuccess.classList.add('show');
      contactForm.reset();
    });
  }
});
