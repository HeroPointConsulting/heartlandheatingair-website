// About Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Load navbar and footer
  loadNavbar();
  loadFooter();

  // Initialize video modal
  initVideoModal();

  // Handle navigation links
  handleNavigation();
});

async function loadNavbar() {
  try {
    const { default: Navbar } = await import('./components/Navbar.js');
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      navbarContainer.innerHTML = new Navbar().render();
      new Navbar().attachEventListeners();
    }
  } catch (error) {
    console.error('Error loading navbar:', error);
  }
}

async function loadFooter() {
  try {
    const { default: Footer } = await import('./components/Footer.js');
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      footerContainer.innerHTML = new Footer().render();
      new Footer().attachEventListeners();
    }
  } catch (error) {
    console.error('Error loading footer:', error);
  }
}

function initVideoModal() {
  const playButton = document.getElementById('playStoryVideo');
  const storyModal = document.getElementById('storyModal');
  const closeButton = document.getElementById('storyClose');
  const video = document.getElementById('storyVideo');

  if (playButton && storyModal) {
    playButton.addEventListener('click', (e) => {
      e.preventDefault();
      storyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeButton && storyModal) {
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      storyModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // Close modal when clicking outside
  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        storyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storyModal && storyModal.classList.contains('active')) {
      storyModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  });
}

function handleNavigation() {
  // Handle internal links that should go to homepage sections
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        // Navigate to homepage with section anchor
        window.location.href = `/${href}`;
      }
    });
  });
} 