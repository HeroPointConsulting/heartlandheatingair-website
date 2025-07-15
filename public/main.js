// Heartland Heating & Air - Main JavaScript
// ES6 Module imports for components
import { createHero, initHero } from './components/Hero.js';
import { createReviews, initReviews } from './components/Reviews.js';
import { createServiceAreas, initServiceAreas } from './components/ServiceAreas.js';

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all app features
  initializeApp();
});

// Main initialization function
function initializeApp() {
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

  // Load reviews component
  loadReviewsComponent();

  // Load service areas component
  loadServiceAreasComponent();

  // Initialize Calendly (if script is loaded)
  setTimeout(() => {
    initializeCalendly();
  }, 1000);

  // Initialize live chat
  initializeLiveChat();
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

// Contact form handling
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        preferred_time: formData.get('preferred_time'),
        details: formData.get('details')
      };

      // Show success message
      showSuccessMessage('Thank you! We\'ll contact you within 24 hours.');

      // Reset form
      contactForm.reset();

      // TODO: Send data to your backend/email service
      // submitContactForm(data);
    });
  }
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
  const contactForm = document.querySelector('.contact-form');
  contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);

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
  const timeSlots = document.querySelectorAll('.time-slot');
  const scheduleSubmit = document.getElementById('scheduleSubmit');
  const serviceType = document.getElementById('serviceType');

  // Handle time slot selection
  timeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
      // Remove selected class from all slots
      timeSlots.forEach(s => s.classList.remove('selected'));
      // Add selected class to clicked slot
      slot.classList.add('selected');
    });
  });

  // Handle service type change
  if (serviceType) {
    serviceType.addEventListener('change', (e) => {
      const selectedService = e.target.value;

      // Auto-select emergency urgency for emergency service
      if (selectedService === 'emergency') {
        const emergencyRadio = document.querySelector('input[name="urgency"][value="emergency"]');
        if (emergencyRadio) {
          emergencyRadio.checked = true;
        }
      }
    });
  }

  // Handle form submission
  if (scheduleSubmit) {
    scheduleSubmit.addEventListener('click', (e) => {
      e.preventDefault();

      // Get form data
      const formData = {
        serviceType: serviceType?.value || '',
        urgency: document.querySelector('input[name="urgency"]:checked')?.value || '',
        timeSlot: document.querySelector('.time-slot.selected')?.getAttribute('data-time') || '',
        name: document.querySelector('input[placeholder="Your Name*"]')?.value || '',
        phone: document.querySelector('input[placeholder="Phone Number*"]')?.value || '',
        description: document.querySelector('.scheduler-textarea')?.value || ''
      };

      // Basic validation
      if (!formData.serviceType || !formData.name || !formData.phone) {
        alert('Please fill in all required fields');
        return;
      }

      // Show success message
      scheduleSubmit.innerHTML = '<i class="fas fa-check"></i> Appointment Requested!';
      scheduleSubmit.style.background = '#10b981';
      scheduleSubmit.disabled = true;

      // In a real app, this would send the data to your booking system
      setTimeout(() => {
        alert('Thank you! We\'ll confirm your appointment within 30 minutes.');
      }, 1000);
    });
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


