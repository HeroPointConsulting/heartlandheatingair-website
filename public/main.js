// Heartland Heating & Air - Main JavaScript
// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('Heartland Heating & Air app initialized');

  // Initialize all app features
  initializeApp();
});

function initializeApp() {
  // Initialize contact form
  initializeContactForm();

  // Initialize mobile menu (if you add one later)
  initializeMobileMenu();

  // Initialize smooth scrolling for navigation links
  initializeSmoothScrolling();

  // Initialize Calendly widget
  initializeCalendly();

  // Initialize live chat
  initializeLiveChat();
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

      console.log('Form submitted:', data);

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
  console.log('Mobile menu initialized');
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
    console.log('Calendly widget ready');

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
  } else {
    console.log('Calendly script not loaded yet');
  }
}

// Live chat initialization
function initializeLiveChat() {
  // Tawk.to chat will initialize automatically from the script tag
  console.log('Live chat initialized');

  // You can add custom chat behavior here if needed
  // For example, show/hide chat based on user behavior
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

    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
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
      console.log('Button clicked:', this.textContent.trim());
      // TODO: Send to analytics service
    });
  });
});
