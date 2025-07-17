// Footer Component - Class-based Pattern
export default class Footer {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  render() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <!-- Main Footer Content -->
            <div class="footer-main">
              <!-- Company Info Section -->
              <div class="footer-section footer-brand">
                <div class="footer-logo">
                  <div class="logo-heart-container">
                    <img src="/img/hha_heart.png" alt="Heartland Heating + Air Heart Logo" class="logo-heart">
                  </div>
                  <div class="logo-text-container">
                    <span class="logo-text">HEARTLAND</span>
                    <span class="logo-tagline">HEATING <span class="plus-symbol">+</span> AIR</span>
                  </div>
                </div>
                <p class="footer-description">
                  Comfort crafted in the Midwest. American-made quality with neighborly service across the Indianapolis area.
                </p>
                <div class="footer-contact">
                  <p><i class="fas fa-phone"></i> (317) 555-0123</p>
                  <p><i class="fas fa-envelope"></i> info@heartlandheatingair.com</p>
                  <p><i class="fas fa-map-marker-alt"></i> Indianapolis, IN & Surrounding Areas</p>
                </div>
              </div>
              
              <!-- Services Section -->
              <div class="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="#services">Furnace Installation</a></li>
                  <li><a href="#services">AC Repair & Service</a></li>
                  <li><a href="#services">Maintenance Plans</a></li>
                  <li><a href="#services">Indoor Air Quality</a></li>
                  <li><a href="#services">Commercial HVAC</a></li>
                  <li><a href="#services">24/7 Emergency</a></li>
                </ul>
              </div>
              
              <!-- Company Section -->
              <div class="footer-section">
                <h3>Company</h3>
                <ul>
                  <li><a href="/about.html">About Us</a></li>
                  <li><a href="#service-areas">Service Areas</a></li>
                  <li><a href="https://g.page/r/CQfKjB6VHxWXEB0/review" target="_blank" rel="noopener">Customer Reviews</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="/blog">HVAC Tips & News</a></li>
                  <li><a href="/careers.html">Careers</a></li>
                </ul>
              </div>
              
              <!-- Connect Section -->
              <div class="footer-section">
                <h3>Connect</h3>
                <div class="social-links">
                  <a href="#" class="social-link" aria-label="Follow us on Facebook">
                    <i class="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="#" class="social-link" aria-label="Follow us on Instagram">
                    <i class="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" class="social-link" aria-label="Connect on LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" class="social-link" aria-label="Find us on Nextdoor">
                    <i class="fab fa-nextdoor"></i>
                    <span>Nextdoor</span>
                  </a>
                </div>
                <div class="footer-hours">
                  <h4>Emergency Service</h4>
                  <p>Available 24/7/365</p>
                  <h4>Business Hours</h4>
                  <p>Monday-Friday: 7 AM - 7 PM<br>
                     Saturday: 8 AM - 5 PM<br>
                     Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
              <div class="footer-legal">
                <p>&copy; ${this.currentYear} Heartland Heating + Air. All rights reserved.</p>
                <div class="legal-links">
                  <a href="/privacy.html">Privacy Policy</a>
                  <a href="/terms.html">Terms of Service</a>
                  <a href="/warranty">Warranty</a>
                </div>
              </div>
              <div class="footer-credentials">
                <p>Licensed • Bonded • Insured<br>Google Guaranteed</p>
                <p>Indiana HVAC License #HC12345678</p>
              </div>
            </div>
            
            <!-- Agency Credits -->
            <div class="footer-agency">
              <div class="agency-credit">
                <p>Website by <a href="https://heropointconsulting.com" target="_blank" rel="noopener">Hero Point Consulting</a> <img src="/img/hpc_design.png" alt="Hero Point Consulting Design Logo" class="hpc-logo-img"></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  attachEventListeners() {
    // Add any interactive functionality here
    this.initializeSocialLinks();
    this.initializeSmoothScrolling();
  }

  initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add analytics tracking here
        console.log('Social link clicked:', link.getAttribute('aria-label'));
      });
    });
  }

  initializeSmoothScrolling() {
    const footerLinks = document.querySelectorAll('.footer-section a[href^="#"]');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
} 