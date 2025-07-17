// Navbar Component for Heartland Heating + Air
class Navbar {
  constructor() {
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = `
      <!-- Mobile sticky call CTA -->
      <a href="tel:+13175550123" class="mobile-call-bar">
        <i class="fas fa-phone"></i> 24/7 Emergency? Tap to Call (317) 555-0123
      </a>

      <!-- Main Navigation Header -->
      <header class="main-header">
        <div class="header-container container">
          <div class="logo-section">
            <a href="/" class="logo-link">
              <div class="logo-heart-container">
                <img src="/img/hha_heart.png" alt="Heartland Heating + Air Heart Logo" class="logo-heart">
              </div>
              <div class="logo-text-container">
                <span class="logo-text">HEARTLAND</span>
                <span class="logo-tagline">HEATING <span class="plus-symbol">+</span> AIR</span>
              </div>
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button class="mobile-menu-toggle" id="mobileMenuToggle">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>

          <!-- Navigation Menu -->
          <nav class="nav-menu" id="navMenu">
            <div class="nav-dropdown">
              <a href="#services" class="nav-link">
                Services <i class="fas fa-chevron-down"></i>
              </a>
              <div class="dropdown-content">
                <div class="dropdown-section">
                  <h4>Residential Services</h4>
                  <a href="service.html?service=emergency-service">
                    <i class="fas fa-exclamation-triangle"></i>
                    Emergency Service
                  </a>
                  <a href="service.html?service=furnace-installation">
                    <i class="fas fa-fire-burner"></i>
                    Furnace Installation
                  </a>
                  <a href="service.html?service=ac-repair">
                    <i class="fas fa-snowflake"></i>
                    AC Repair & Replacement
                  </a>
                  <a href="service.html?service=maintenance-plans">
                    <i class="fas fa-calendar-check"></i>
                    Maintenance Plans
                  </a>
                  <a href="service.html?service=indoor-air-quality">
                    <i class="fas fa-wind"></i>
                    Indoor Air Quality
                  </a>
                </div>
                <div class="dropdown-section">
                  <h4>Commercial Services</h4>
                  <a href="service.html?service=commercial-hvac">
                    <i class="fas fa-building"></i>
                    Commercial HVAC
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#service-areas" class="nav-link">Service Areas</a>
            <a href="/about.html" class="nav-link">About</a>
            <a href="/contact.html" class="nav-link">Contact</a>
          </nav>

          <!-- Trust Badges -->
          <div class="navbar-trust-badges">
            <div class="navbar-trust-badge">
              <i class="fas fa-star" style="color: #fbbf24;"></i>
              <span>4.9 Stars</span>
            </div>
            <div class="navbar-trust-badge">
              <i class="fas fa-certificate"></i>
              <span>NATE Certified</span>
            </div>
            <div class="navbar-trust-badge">
              <i class="fas fa-shield-alt"></i>
              <span>Licensed & Insured</span>
            </div>
          </div>

          <!-- Header CTA Buttons removed - available in Hero section -->
        </div>
      </header>
    `;

    return navbarContainer.innerHTML;
  }

  attachEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        navMenu.classList.toggle('active', this.isMenuOpen);
        mobileMenuToggle.classList.toggle('active', this.isMenuOpen);
      });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.isMenuOpen = false;
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });

    // Handle dropdown interactions (only for Services now)
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      const dropdownLink = dropdown.querySelector('.nav-link');

      // Desktop: hover interactions
      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
          dropdownContent.classList.add('show');
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
          dropdownContent.classList.remove('show');
        }
      });

      // Mobile: navigate directly to section
      dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const href = dropdownLink.getAttribute('href');
          const targetId = href.substring(1);

          // Check if we're on the main page or a service page
          const isOnMainPage = window.location.pathname === '/' || window.location.pathname === '/index.html';

          if (isOnMainPage) {
            // On main page, scroll to section
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          } else {
            // On service page, navigate to main page and scroll to section
            window.location.href = `/${href}`;
          }

          // Close mobile menu
          this.isMenuOpen = false;
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      });
    });

    // Handle anchor links (sections on current page or navigation to homepage)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const targetId = href.substring(1);

        // Check if we're on the main page
        const isOnMainPage = window.location.pathname === '/' || window.location.pathname === '/index.html';

        if (isOnMainPage) {
          // On main page, scroll to section
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            e.preventDefault();
            // Add offset for sticky header
            const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20; // 20px extra buffer

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        } else {
          // On other pages, navigate to main page with section anchor
          e.preventDefault();
          window.location.href = `/${href}`;
        }
      });
    });
  }
}

// Initialize Navbar
const navbar = new Navbar();

// Export for use in other modules
export default Navbar; 