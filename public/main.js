// Heartland Heating & Air - Main JavaScript
// ES6 Module imports for components
import Navbar from './components/Navbar.js';
import { createHero, initHero } from './components/Hero.js';
import { createReviews, initReviews } from './components/Reviews.js';
import { createServiceAreas, initServiceAreas } from './components/ServiceAreas.js';
import { createWhyChoose, initWhyChoose } from './components/WhyChoose.js';
import { createAboutComponent, initAboutComponent } from './components/About.js';
import { createContactComponent } from './components/Contact.js';
import { TrustSignals } from './components/TrustSignals.js';
import SchedulingWidget from './components/SchedulingWidget.js';
import './components/Services.js';

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all app features
  initializeApp();
});

// Main initialization function
function initializeApp() {
  // Load navbar component first
  loadNavbarComponent();

  // Initialize mobile menu
  initializeMobileMenu();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize contact form
  initializeContactForm();

  // Initialize chat widget
  initializeChatWidget();

  // Initialize story modal
  initializeStoryModal();

  // Initialize Enhanced Online Scheduler
  initializeScheduler();

  // Load hero component
  loadHeroComponent();

  // Load services component
  loadServicesComponent();

  // Load reviews component
  loadReviewsComponent();

  // Load service areas component
  loadServiceAreasComponent();

  // Load why choose component
  loadWhyChooseComponent();

  // Load about component
  loadAboutComponent();

  // Load contact component
  loadContactComponent();

  // Load trust signals component
  loadTrustSignalsComponent();

  // Initialize Calendly (if script is loaded)
  setTimeout(() => {
    initializeCalendly();
  }, 1000);

  // Initialize live chat
  initializeLiveChat();
}

// Load Navbar component - Class-based Pattern
function loadNavbarComponent() {
  try {
    const navbarContainer = document.getElementById('navbar-component-container');
    if (navbarContainer) {
      // Create navbar instance and inject it
      const navbar = new Navbar();
      navbarContainer.innerHTML = navbar.render();
      
      // Initialize navbar interactivity
      navbar.attachEventListeners();
    }
  } catch (error) {
    console.error('Error loading navbar component:', error);
  }
}

// Load Hero component - Myers-Vanilla Pattern
function loadHeroComponent() {
  try {
    const heroContainer = document.getElementById('hero-component-container');
    if (heroContainer) {
      // Create hero HTML and inject it
      heroContainer.innerHTML = createHero();

      // Initialize hero component interactivity
      initHero();
    }
  } catch (error) {
    console.error('Error loading hero component:', error);
  }
}

// Load Services component - Auto-initializing Pattern
function loadServicesComponent() {
  try {
    // Services component is auto-initializing, just ensure it's loaded
    if (window.ServicesComponent) {
      window.ServicesComponent.init();
    }
  } catch (error) {
    console.error('Error loading services component:', error);
  }
}

// Load Reviews component - Myers-Vanilla Pattern
function loadReviewsComponent() {
  try {
    const reviewsContainer = document.getElementById('reviews-component-container');
    if (reviewsContainer) {
      // Create reviews HTML and inject it
      reviewsContainer.innerHTML = createReviews();

      // Initialize reviews component interactivity
      initReviews();
    }
  } catch (error) {
    console.error('Error loading reviews component:', error);
  }
}

// Load Service Areas component - Myers-Vanilla Pattern  
function loadServiceAreasComponent() {
  try {
    const serviceAreasContainer = document.getElementById('service-areas-component');
    if (serviceAreasContainer) {
      // Create service areas HTML and inject it
      serviceAreasContainer.innerHTML = createServiceAreas();

      // Initialize service areas component interactivity
      initServiceAreas();
    }
  } catch (error) {
    console.error('Error loading service areas component:', error);
  }
}

// Load WhyChoose component - Myers-Vanilla Pattern
function loadWhyChooseComponent() {
  try {
    const whyChooseContainer = document.getElementById('why-choose-component-container');
    if (whyChooseContainer) {
      // Create why choose HTML and inject it
      whyChooseContainer.innerHTML = createWhyChoose();

      // Initialize why choose component interactivity
      initWhyChoose();
    }
  } catch (error) {
    console.error('Error loading why choose component:', error);
  }
}

// Load About component - Myers-Vanilla Pattern
function loadAboutComponent() {
  try {
    const aboutContainer = document.getElementById('about-component-container');
    if (aboutContainer) {
      // Create about HTML and inject it
      aboutContainer.innerHTML = createAboutComponent();

      // Initialize about component interactivity
      initAboutComponent();
    }
  } catch (error) {
    console.error('Error loading about component:', error);
  }
}

// Load Contact component - Function Pattern
function loadContactComponent() {
  try {
    const contactContainer = document.getElementById('contact-component-container');
    if (contactContainer) {
      // Create contact HTML and inject it
      contactContainer.innerHTML = createContactComponent();
    }
  } catch (error) {
    console.error('Error loading contact component:', error);
  }
}

// Load Trust Signals component - Function Pattern
function loadTrustSignalsComponent() {
  try {
    const trustSignalsContainer = document.getElementById('trust-signals-component-container');
    if (trustSignalsContainer) {
      // Create trust signals HTML and inject it
      trustSignalsContainer.innerHTML = TrustSignals();
    }
  } catch (error) {
    console.error('Error loading trust signals component:', error);
  }
}

// Contact form handling
function initializeContactForm() {
  // Wait for the contact component to be loaded
  setTimeout(() => {
    const contactForm = document.querySelector('.modern-form');

    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          customer_type: formData.get('customer_type'),
          service: formData.get('service'),
          project_scope: formData.get('project_scope'),
          timeline: formData.get('timeline'),
          preferred_time: formData.get('preferred_time'),
          details: formData.get('details'),
          consent: formData.get('consent')
        };

        // Show success message
        showSuccessMessage('Thank you! We\'ll contact you within 24 hours.');

        // Reset form
        contactForm.reset();

        // TODO: Send data to your backend/email service
        // submitContactForm(data);
      });
    }
  }, 100);
}

// Show success message
function showSuccessMessage(message) {
  // Create success message element
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = `
        <div style="background-color: #10b981; color: white; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; text-align: center;">
            ✅ ${message}
        </div>
    `;

  // Insert after contact form
  const contactForm = document.querySelector('.modern-form');
  if (contactForm) {
    contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);
  }

  // Remove message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// Mobile menu functionality (placeholder for future)
function initializeMobileMenu() {
  // TODO: Add mobile hamburger menu functionality
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
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

// Calendly widget initialization
function initializeCalendly() {
  // Check if Calendly script is loaded
  if (typeof Calendly !== 'undefined') {
    // Initialize inline widget
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    if (calendlyWidget) {
      Calendly.initInlineWidget({
        url: calendlyWidget.getAttribute('data-url'),
        parentElement: calendlyWidget,
        prefill: {},
        utm: {}
      });
    }
  }
}

// Live chat initialization
function initializeLiveChat() {
  // Tawk.to chat will initialize automatically from the script tag
  // You can add custom chat behavior here if needed
  // For example, show/hide chat based on user behavior
}

// Interactive Chat Widget
function initializeChatWidget() {
  const chatToggle = document.getElementById('chatToggle');
  const chatPopup = document.getElementById('chatPopup');
  const chatClose = document.getElementById('chatClose');
  const chatBadge = document.querySelector('.chat-badge');

  if (chatToggle && chatPopup && chatClose) {
    // Toggle chat popup
    chatToggle.addEventListener('click', () => {
      chatPopup.classList.toggle('show');

      // Hide badge when chat is opened
      if (chatPopup.classList.contains('show')) {
        chatBadge.style.display = 'none';
      }
    });

    // Close chat popup
    chatClose.addEventListener('click', () => {
      chatPopup.classList.remove('show');
    });

    // Close chat when clicking outside
    document.addEventListener('click', (event) => {
      if (!chatToggle.contains(event.target) && !chatPopup.contains(event.target)) {
        chatPopup.classList.remove('show');
      }
    });

    // Handle chat option clicks
    const chatOptions = document.querySelectorAll('.chat-option');
    chatOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        // Close chat popup when option is clicked
        chatPopup.classList.remove('show');

        // Track which option was clicked
        const optionText = option.querySelector('span').textContent;
      });
    });
  }
}

// Story Video Modal
function initializeStoryModal() {
  const playButton = document.getElementById('playStoryVideo');
  const storyModal = document.getElementById('storyModal');
  const storyClose = document.getElementById('storyClose');

  if (playButton && storyModal && storyClose) {
    // Open story modal
    playButton.addEventListener('click', () => {
      storyModal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close story modal
    storyClose.addEventListener('click', () => {
      storyModal.classList.remove('show');
      document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        storyModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && storyModal.classList.contains('show')) {
        storyModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }
}

// Enhanced Online Scheduler
function initializeScheduler() {
  // Initialize the new scheduling widget component
  try {
    // Clear any existing widget first
    const existingWidget = document.getElementById('schedule-widget');
    if (existingWidget) {
      existingWidget.innerHTML = '';
    }

    const schedulingWidget = new SchedulingWidget();
    console.log('Scheduling widget initialized successfully');
  } catch (error) {
    console.error('Error initializing scheduling widget:', error);

    // Fallback to basic functionality if component fails
    initializeBasicScheduler();
  }
}

// Fallback scheduler for basic functionality
function initializeBasicScheduler() {
  const scheduleWidget = document.getElementById('schedule-widget');
  if (scheduleWidget) {
    scheduleWidget.innerHTML = `
      <div class="basic-scheduler-fallback">
        <h3>Schedule Your Service</h3>
        <p>For immediate assistance, please call us at <a href="tel:+13175550123">(317) 555-0123</a></p>
        <div class="fallback-actions">
          <a href="tel:+13175550123" class="btn btn-primary">
            <i class="fas fa-phone"></i> Call Now
          </a>
          <a href="#contact" class="btn btn-secondary">
            <i class="fas fa-envelope"></i> Send Message
          </a>
        </div>
      </div>
    `;
  }
}


// Utility function to handle API calls (for future use)
async function submitContactForm(data) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Handle error appropriately - could show user feedback
    throw error;
  }
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function () {
  // Add hover effects to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add click tracking for buttons (for analytics)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // TODO: Send to analytics service
    });
  });
});

// Simple animation for testimonial cards
document.addEventListener('DOMContentLoaded', function () {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });
});

// Add intersection observer for testimonial cards animation on scroll
if ('IntersectionObserver' in window) {
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Observe testimonial cards when they're created
  setTimeout(() => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      testimonialObserver.observe(card);
    });
  }, 100);
}


