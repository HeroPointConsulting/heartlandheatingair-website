// Service Page JavaScript
// Dynamically loads service content based on URL parameters

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { createServicePage, initServicePage } from './components/ServicePage.js';
import { TrustSignals } from './components/TrustSignals.js';
import SchedulingWidget from './components/SchedulingWidget.js';
import { createContactComponent } from './components/Contact.js';

// Initialize the service page when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeServicePage();
});

// Main initialization function
function initializeServicePage() {
  // Get service slug from URL
  const serviceSlug = getServiceSlugFromURL();

  // Load navbar component first
  loadNavbarComponent();

  // Load service page content
  loadServicePageContent(serviceSlug);

  // Load other components (conditionally for emergency service)
  if (serviceSlug !== 'emergency-service') {
    loadTrustSignalsComponent();
    loadContactComponent();
  }

  loadFooterComponent();

  // Initialize interactive elements
  initializeMobileMenu();
  initializeSmoothScrolling();

  // Only initialize contact form and scheduler for non-emergency services
  if (serviceSlug !== 'emergency-service') {
    initializeContactForm();
    initializeScheduler();
  }

  initializeChatWidget();

  // Initialize Calendly (only for non-emergency services)
  if (serviceSlug !== 'emergency-service') {
    setTimeout(() => {
      initializeCalendly();
    }, 1000);
  }

  // Initialize live chat
  initializeLiveChat();

  // Hide scheduling and contact sections for emergency service
  if (serviceSlug === 'emergency-service') {
    hideEmergencySections();
  }

  // Hide schedule section for commercial HVAC (keep contact/quote section)
  if (serviceSlug === 'commercial-hvac') {
    hideScheduleSectionForCommercial();
  }
}

// Hide scheduling and contact sections for emergency service
function hideEmergencySections() {
  // Hide the schedule section
  const scheduleSection = document.getElementById('schedule');
  if (scheduleSection) {
    scheduleSection.style.display = 'none';
  }

  // Hide the contact component container
  const contactContainer = document.getElementById('contact-component-container');
  if (contactContainer) {
    contactContainer.style.display = 'none';
  }

  // Hide the trust signals component container
  const trustContainer = document.getElementById('trust-signals-component-container');
  if (trustContainer) {
    trustContainer.style.display = 'none';
  }

  // Update chat widget options for emergency service
  updateChatWidgetForEmergency();
}

// Update chat widget to focus on emergency options
function updateChatWidgetForEmergency() {
  const chatOptions = document.querySelectorAll('.chat-option');
  if (chatOptions.length > 0) {
    // Hide schedule and contact options
    chatOptions.forEach((option, index) => {
      if (index === 0 || index === 2) { // Schedule and Send Message options
        option.style.display = 'none';
      }
    });

    // Update greeting text
    const greetingText = document.querySelector('.greeting-text h4');
    if (greetingText) {
      greetingText.textContent = 'Emergency HVAC Service';
    }

    const greetingDesc = document.querySelector('.greeting-text p');
    if (greetingDesc) {
      greetingDesc.textContent = 'Need immediate help? Call or text us now:';
    }
  }
}

// Hide schedule section for commercial HVAC (keep contact/quote section)
function hideScheduleSectionForCommercial() {
  const scheduleSection = document.getElementById('schedule');
  if (scheduleSection) {
    scheduleSection.style.display = 'none';
  }

  // Update chat widget for commercial service
  updateChatWidgetForCommercial();
}

// Update chat widget to show "Get Quote" for commercial service
function updateChatWidgetForCommercial() {
  const chatOptions = document.querySelectorAll('.chat-option');
  if (chatOptions.length > 0) {
    // Update the schedule option to show "Get Quote"
    const scheduleOption = chatOptions[0];
    if (scheduleOption) {
      const icon = scheduleOption.querySelector('i');
      const text = scheduleOption.querySelector('span');
      if (icon) icon.className = 'fas fa-file-invoice';
      if (text) text.textContent = 'Get Quote';
      scheduleOption.href = '#contact';
    }
  }
}

// Get service slug from URL
function getServiceSlugFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get('service');

  if (service) {
    return service;
  }

  // Fallback: try to get from path
  const path = window.location.pathname;
  const pathParts = path.split('/');
  const lastPart = pathParts[pathParts.length - 1];

  if (lastPart && lastPart !== 'service.html') {
    return lastPart.replace('.html', '');
  }

  // Default to AC repair if no service specified
  return 'ac-repair';
}

// Load Navbar component
function loadNavbarComponent() {
  try {
    const navbarContainer = document.getElementById('navbar-component-container');
    if (navbarContainer) {
      const navbar = new Navbar();
      navbarContainer.innerHTML = navbar.render();
      navbar.attachEventListeners();
    }
  } catch (error) {
    console.error('Error loading navbar component:', error);
  }
}

// Load Service Page Content
function loadServicePageContent(serviceSlug) {
  try {
    const serviceContainer = document.getElementById('service-page-container');
    if (serviceContainer) {
      const serviceContent = createServicePage(serviceSlug);
      serviceContainer.innerHTML = serviceContent;

      // Update page title and meta description
      updatePageMeta(serviceSlug);

      // Initialize service page functionality
      initServicePage();
    }
  } catch (error) {
    console.error('Error loading service page content:', error);
  }
}

// Update page meta information
function updatePageMeta(serviceSlug) {
  import('./data/services.js').then(({ getServiceBySlug }) => {
    const service = getServiceBySlug(serviceSlug);
    if (service) {
      // Update title
      document.title = `${service.title} Indianapolis | Heartland Heating + Air`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.description);
      }

      // Update canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://heartlandheatingair.com/service?service=${serviceSlug}`);
      }
    }
  }).catch(error => {
    console.error('Error updating page meta:', error);
  });
}

// Load Trust Signals component
function loadTrustSignalsComponent() {
  try {
    const trustContainer = document.getElementById('trust-signals-component-container');
    if (trustContainer) {
      trustContainer.innerHTML = TrustSignals();
    }
  } catch (error) {
    console.error('Error loading trust signals component:', error);
  }
}

// Load Contact component
function loadContactComponent() {
  try {
    const contactContainer = document.getElementById('contact-component-container');
    if (contactContainer) {
      contactContainer.innerHTML = createContactComponent();
    }
  } catch (error) {
    console.error('Error loading contact component:', error);
  }
}

// Load Footer component
function loadFooterComponent() {
  try {
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
      const footer = new Footer();
      footerContainer.innerHTML = footer.render();
    }
  } catch (error) {
    console.error('Error loading footer component:', error);
  }
}

// Initialize mobile menu
function initializeMobileMenu() {
  // Mobile menu functionality (if needed)
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize contact form
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Submit form
      submitContactForm(data)
        .then(() => {
          showSuccessMessage('Thank you! We\'ll be in touch soon.');
          this.reset();
        })
        .catch(error => {
          console.error('Form submission error:', error);
          showSuccessMessage('Sorry, there was an error. Please try again or call us directly.');
        })
        .finally(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
}

// Submit contact form
async function submitContactForm(data) {
  // Simulate form submission
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form data:', data);
      resolve();
    }, 1000);
  });
}

// Show success message
function showSuccessMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'success-message';
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  `;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Initialize chat widget
function initializeChatWidget() {
  const chatToggle = document.getElementById('chatToggle');
  const chatPopup = document.getElementById('chatPopup');
  const chatClose = document.getElementById('chatClose');

  if (chatToggle && chatPopup && chatClose) {
    chatToggle.addEventListener('click', () => {
      chatPopup.classList.toggle('active');
    });

    chatClose.addEventListener('click', () => {
      chatPopup.classList.remove('active');
    });

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
      if (!chatToggle.contains(e.target) && !chatPopup.contains(e.target)) {
        chatPopup.classList.remove('active');
      }
    });
  }
}

// Initialize scheduler
function initializeScheduler() {
  try {
    const scheduleWidget = document.getElementById('schedule-widget');
    if (scheduleWidget) {
      // SchedulingWidget renders itself when instantiated
      new SchedulingWidget();
    }
  } catch (error) {
    console.error('Error loading scheduler:', error);
  }
}

// Initialize Calendly
function initializeCalendly() {
  if (window.Calendly) {
    // Calendly initialization if needed
  }
}

// Initialize live chat
function initializeLiveChat() {
  // Live chat initialization if needed
} 