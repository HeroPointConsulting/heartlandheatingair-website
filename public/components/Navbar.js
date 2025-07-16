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
                <img src="img/hha_heart.png" alt="Heartland Heating & Air Heart Logo" class="logo-heart">
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
                  <a href="services/furnace-installation.html">
                    <i class="fas fa-fire-burner"></i>
                    Furnace Installation
                  </a>
                  <a href="services/ac-repair.html">
                    <i class="fas fa-snowflake"></i>
                    AC Repair & Replacement
                  </a>
                  <a href="services/maintenance-plans.html">
                    <i class="fas fa-calendar-check"></i>
                    Maintenance Plans
                  </a>
                  <a href="services/indoor-air-quality.html">
                    <i class="fas fa-wind"></i>
                    Indoor Air Quality
                  </a>
                </div>
                <div class="dropdown-section">
                  <h4>Commercial & Emergency</h4>
                  <a href="services/commercial-hvac.html">
                    <i class="fas fa-building"></i>
                    Commercial HVAC
                  </a>
                  <a href="services/emergency-service.html">
                    <i class="fas fa-phone-volume"></i>
                    24/7 Emergency
                  </a>
                </div>
              </div>
            </div>
            
            <div class="nav-dropdown">
              <a href="#service-areas" class="nav-link">
                Service Areas <i class="fas fa-chevron-down"></i>
              </a>
              <div class="dropdown-content">
                <div class="dropdown-section">
                  <h4>Indianapolis Metro</h4>
                  <a href="locations/indianapolis/">
                    <i class="fas fa-map-marker-alt"></i>
                    Indianapolis
                  </a>
                  <a href="locations/carmel/">
                    <i class="fas fa-map-marker-alt"></i>
                    Carmel
                  </a>
                  <a href="locations/fishers/">
                    <i class="fas fa-map-marker-alt"></i>
                    Fishers
                  </a>
                  <a href="locations/noblesville/">
                    <i class="fas fa-map-marker-alt"></i>
                    Noblesville
                  </a>
                  <a href="locations/westfield/">
                    <i class="fas fa-map-marker-alt"></i>
                    Westfield
                  </a>
                </div>
                <div class="dropdown-section">
                  <h4>Midwest Coverage</h4>
                  <a href="#service-areas">
                    <i class="fas fa-flag-usa"></i>
                    View All Areas
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#reviews" class="nav-link">Reviews</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>

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

    // Handle dropdown interactions
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');

      dropdown.addEventListener('mouseenter', () => {
        dropdownContent.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('show');
      });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize Navbar
const navbar = new Navbar();

// Export for use in other modules
export default Navbar; 