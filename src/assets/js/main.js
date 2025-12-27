// Engineer's Manual - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Search modal toggle
  const searchToggle = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-close');
  const searchModal = document.getElementById('search-modal');

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      // Focus the search input when modal opens
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

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
      searchModal.classList.add('hidden');
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

  // Initialize Pagefind when available
  if (typeof PagefindUI !== 'undefined') {
    new PagefindUI({
      element: '#search-container',
      showSubResults: true,
      showImages: false
    });
  }
});
