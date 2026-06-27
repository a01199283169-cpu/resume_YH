/**
 * 이력서 사이트 — 메인 스크립트
 * 모바일 네비, 스크롤 하이라이트, 인쇄 기능
 */

(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');
  const printBtn = document.getElementById('print-btn');

  /* --- 모바일 메뉴 토글 --- */
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    // 메뉴 링크 클릭 시 닫기
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '메뉴 열기');
      });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '메뉴 열기');
        navToggle.focus();
      }
    });
  }

  /* --- 스크롤 시 헤더 그림자 --- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 1px 8px rgba(15, 36, 25, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* --- 현재 섹션 네비 활성 표시 --- */
  const sections = document.querySelectorAll('section[id], .hero');
  const navAnchors = document.querySelectorAll('.site-nav a[href^="#"]');

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id || 'top';
          navAnchors.forEach(function (a) {
            const href = a.getAttribute('href');
            a.classList.toggle('is-active', href === '#' + id || (id === 'top' && href === '#top'));
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      if (section.id || section.classList.contains('hero')) {
        observer.observe(section);
      }
    });
  }

  /* --- 인쇄 --- */
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

})();
