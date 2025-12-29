// Engineer's Manual - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // SEARCH MODAL
  // ============================================
  const searchToggle = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-close');
  const searchModal = document.getElementById('search-modal');

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      const input = searchModal.querySelector('input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.add('hidden');
    });
  }

  // Initialize Pagefind when available
  if (typeof PagefindUI !== 'undefined') {
    new PagefindUI({
      element: '#search-container',
      showSubResults: true,
      showImages: false
    });
  }

  // ============================================
  // MOBILE NAVIGATION DRAWER
  // ============================================
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');

  function openMobileNav() {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.add('open');
      mobileNavBackdrop.classList.add('open');
      mobileNavToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.remove('open');
      mobileNavBackdrop.classList.remove('open');
      mobileNavToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', openMobileNav);
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal) {
        searchModal.classList.remove('hidden');
        const input = searchModal.querySelector('input');
        if (input) {
          setTimeout(() => input.focus(), 100);
        }
      }
    }

    // Escape to close modals
    if (e.key === 'Escape') {
      if (searchModal && !searchModal.classList.contains('hidden')) {
        searchModal.classList.add('hidden');
      }
      if (mobileNavDrawer?.classList.contains('open')) {
        closeMobileNav();
      }
    }
  });

  // Close modal when clicking backdrop
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.add('hidden');
      }
    });
  }

  // ============================================
  // READING PROGRESS BAR
  // ============================================
  const progressBar = document.getElementById('reading-progress');

  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ============================================
  // ACTIVE TOC HIGHLIGHTING
  // ============================================
  const tocLinks = document.querySelectorAll('[data-toc-link]');

  if (tocLinks.length > 0) {
    const headings = [];
    tocLinks.forEach(link => {
      const id = link.getAttribute('data-toc-link');
      const heading = document.getElementById(id);
      if (heading) {
        headings.push({ id, element: heading, link });
      }
    });

    if (headings.length > 0) {
      // Better scroll-based highlighting
      function highlightCurrentSection() {
        const scrollPos = window.scrollY + 100; // Offset for header
        let currentHeading = null;

        // Find the heading that's currently at the top of the viewport
        for (let i = headings.length - 1; i >= 0; i--) {
          const heading = headings[i];
          if (heading.element.offsetTop <= scrollPos) {
            currentHeading = heading;
            break;
          }
        }

        // If no heading is above scroll position, use first one
        if (!currentHeading && headings.length > 0) {
          currentHeading = headings[0];
        }

        // Update active states
        tocLinks.forEach(l => l.classList.remove('toc-item-active'));
        if (currentHeading) {
          currentHeading.link.classList.add('toc-item-active');

          // Scroll TOC to keep active item visible (if sidebar is scrollable)
          const sidebar = document.getElementById('sidebar-toc');
          if (sidebar && sidebar.scrollHeight > sidebar.clientHeight) {
            currentHeading.link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      }

      // Throttle scroll handler for performance
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            highlightCurrentSection();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      // Initial highlight
      highlightCurrentSection();
    }
  }
});
