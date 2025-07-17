// Heartland Heating + Air - Main JavaScript
// ES6 Module imports for components
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { createHero, initHero } from './components/Hero.js';
import { createReviews, initReviews } from './components/Reviews.js';
import { createServiceAreas, initServiceAreas } from './components/ServiceAreas.js';
import { createWhyChoose, initWhyChoose } from './components/WhyChoose.js';
import { createAboutComponent, initAboutComponent } from './components/About.js';
import { TrustSignals } from './components/TrustSignals.js';
import SchedulingWidget from './components/SchedulingWidget.js';
import { createServicePage, initServicePage } from './components/ServicePage.js';
import { LocationPage } from './components/LocationPage.js';
import { createFloatingButtons } from './components/FloatingButtons.js';
import './components/Services.js';

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all app features
  initializeApp();

  // Initialize page-specific functionality
  initializePageSpecificFeatures();
});

// Main initialization function
function initializeApp() {
  // Load navbar component first
  loadNavbarComponent();

  // Initialize mobile menu
  initializeMobileMenu();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize floating buttons (emergency call + chat widget)
  initializeFloatingButtons();

  // Initialize story modal
  initializeStoryModal();

  // Initialize Enhanced Online Scheduler
  initializeScheduler();

  // Load hero component
  loadHeroComponent();

  // Load trust signals component
  loadTrustSignalsComponent();

  // Load services component
  loadServicesComponent();

  // Load about component
  loadAboutComponent();

  // Load reviews component
  loadReviewsComponent();

  // Load why choose component
  loadWhyChooseComponent();

  // Load service areas component
  loadServiceAreasComponent();



  // Load footer component
  loadFooterComponent();

  // Initialize service and location pages if needed
  initializeServicePages();
  initializeLocationPages();

  // Initialize Calendly (if script is loaded)
  setTimeout(() => {
    initializeCalendly();
  }, 1000);

  // Initialize live chat
  initializeLiveChat();
}

// Initialize Floating Buttons Component
function initializeFloatingButtons() {
  try {
    // Check if we're on a page that shouldn't have floating buttons
    const currentPath = window.location.pathname;
    const isLegalPage = currentPath.includes('/privacy') || currentPath.includes('/terms');

    if (!isLegalPage) {
      // Create and initialize floating buttons
      createFloatingButtons();
    }
  } catch (error) {
    console.error('Error initializing floating buttons:', error);
  }
}

// Load Navbar component - Class-based Pattern
function loadNavbarComponent() {
  try {
    // Try the standard container ID first
    let navbarContainer = document.getElementById('navbar-component-container');

    // Fallback to the about page container ID
    if (!navbarContainer) {
      navbarContainer = document.getElementById('navbar-container');
    }

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

// Load Footer component - Class-based Pattern
function loadFooterComponent() {
  try {
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
      // Create footer instance and inject it
      const footer = new Footer();
      footerContainer.outerHTML = footer.render();

      // Initialize footer interactivity after a short delay to ensure DOM is ready
      setTimeout(() => {
        const newFooter = new Footer();
        newFooter.attachEventListeners();
      }, 100);
    }
  } catch (error) {
    console.error('Error loading footer component:', error);
  }
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

// Initialize Service Pages
function initializeServicePages() {
  try {
    // Service pages are now handled by service.html and service-page.js
    // This function is kept for backward compatibility but doesn't need to do anything
    // on the main page since service pages are separate
  } catch (error) {
    console.error('Error initializing service pages:', error);
  }
}

// Initialize Location Pages
function initializeLocationPages() {
  try {
    const locationPageContainer = document.getElementById('location-page-container');
    if (locationPageContainer) {
      // Get location and service data from URL
      const pathParts = window.location.pathname.split('/');
      const locationSlug = pathParts[pathParts.length - 2];
      const serviceSlug = pathParts[pathParts.length - 1].replace('.html', '');

      const locationData = getLocationData(locationSlug);
      const serviceData = getServiceData(serviceSlug);

      if (locationData && serviceData) {
        const locationPage = new LocationPage(locationData, serviceData);
      }
    }
  } catch (error) {
    console.error('Error initializing location pages:', error);
  }
}

// Helper function to get service data
function getServiceData(serviceSlug) {
  const services = {
    'ac-repair': {
      name: 'AC Repair & Replacement',
      description: 'Professional AC repair and replacement services',
      longTailKeywords: [
        'emergency ac repair',
        'air conditioner repair',
        'ac unit replacement',
        'central air repair',
        'ac maintenance',
        'ac installation',
        'same day ac repair'
      ],
      serviceTime: 'Same day',
      averagePrice: '$150-$400'
    },
    'furnace-installation': {
      name: 'Furnace Installation',
      description: 'Complete furnace installation and replacement services',
      longTailKeywords: [
        'new furnace installation',
        'furnace replacement',
        'high efficiency furnace',
        'gas furnace installation',
        'electric furnace installation',
        'furnace upgrade'
      ],
      serviceTime: '1-2 days',
      averagePrice: '$3,000-$6,000'
    },
    'emergency-service': {
      name: 'Emergency HVAC Service',
      description: '24/7 emergency HVAC repair and service',
      longTailKeywords: [
        'emergency hvac repair',
        '24 hour hvac service',
        'emergency furnace repair',
        'emergency ac repair',
        'same day hvac service',
        'emergency hvac technician'
      ],
      serviceTime: 'Same day',
      averagePrice: '$200-$500'
    },
    'commercial-hvac': {
      name: 'Commercial HVAC',
      description: 'Professional commercial HVAC services',
      longTailKeywords: [
        'commercial hvac repair',
        'commercial hvac installation',
        'commercial hvac maintenance',
        'business hvac service',
        'commercial air conditioning',
        'commercial heating'
      ],
      serviceTime: 'Same day',
      averagePrice: '$300-$800'
    },
    'indoor-air-quality': {
      name: 'Indoor Air Quality',
      description: 'Complete indoor air quality solutions',
      longTailKeywords: [
        'air purification',
        'air filtration',
        'indoor air quality testing',
        'air duct cleaning',
        'humidity control',
        'air quality improvement'
      ],
      serviceTime: 'Same day',
      averagePrice: '$200-$600'
    },
    'maintenance-plans': {
      name: 'HVAC Maintenance Plans',
      description: 'Comprehensive HVAC maintenance and service plans',
      longTailKeywords: [
        'hvac maintenance plan',
        'preventive maintenance',
        'hvac tune up',
        'seasonal maintenance',
        'maintenance agreement',
        'hvac service plan'
      ],
      serviceTime: 'Scheduled',
      averagePrice: '$150-$300'
    },
    // Location page service mappings
    'hvac-repair': {
      name: 'HVAC Repair',
      description: 'Professional heating and cooling system repair services',
      longTailKeywords: [
        'emergency hvac repair',
        'furnace repair',
        'air conditioner repair',
        'heating system repair',
        'cooling system repair',
        'hvac technician',
        'same day hvac repair'
      ],
      serviceTime: 'Same day',
      averagePrice: '$150-$400'
    },
    'air-conditioning-service': {
      name: 'Air Conditioning Service',
      description: 'Complete air conditioning installation, repair, and maintenance',
      longTailKeywords: [
        'ac installation',
        'central air conditioning',
        'air conditioner replacement',
        'ac maintenance',
        'cooling system service',
        'ac unit repair'
      ],
      serviceTime: 'Same day',
      averagePrice: '$200-$500'
    },
    'hvac-maintenance': {
      name: 'HVAC Maintenance',
      description: 'Preventive maintenance to keep your HVAC system running efficiently',
      longTailKeywords: [
        'hvac tune up',
        'seasonal maintenance',
        'preventive maintenance',
        'hvac inspection',
        'system cleaning',
        'maintenance plan'
      ],
      serviceTime: '2-4 hours',
      averagePrice: '$150-$300'
    },
    'duct-cleaning': {
      name: 'Duct Cleaning',
      description: 'Professional air duct cleaning and sanitization services',
      longTailKeywords: [
        'air duct cleaning',
        'ductwork cleaning',
        'dryer vent cleaning',
        'indoor air quality',
        'duct sanitization',
        'air quality improvement'
      ],
      serviceTime: '3-5 hours',
      averagePrice: '$300-$600'
    }
  };

  return services[serviceSlug] || null;
}

// Helper function to get location data
function getLocationData(locationSlug) {
  const locations = {
    'indianapolis': {
      name: 'Indianapolis',
      state: 'Indiana',
      stateAbbr: 'IN',
      zipCodes: ['46201', '46202', '46203', '46204', '46205'],
      population: '887,000',
      nickname: 'Circle City',
      serviceRadius: '30 miles',
      keyNeighborhoods: ['Downtown', 'Broad Ripple', 'Fountain Square', 'Mass Ave', 'Meridian-Kessler'],
      localLandmarks: ['Indianapolis Motor Speedway', 'Monument Circle', 'White River State Park']
    },
    'carmel': {
      name: 'Carmel',
      state: 'Indiana',
      stateAbbr: 'IN',
      zipCodes: ['46032', '46033', '46074'],
      population: '99,000',
      nickname: 'The Roundabout City',
      serviceRadius: '25 miles',
      keyNeighborhoods: ['Arts & Design District', 'Village of WestClay', 'Meridian Hills'],
      localLandmarks: ['Carmel Arts & Design District', 'Clay Terrace', 'Monon Trail']
    },
    'fishers': {
      name: 'Fishers',
      state: 'Indiana',
      stateAbbr: 'IN',
      zipCodes: ['46037', '46038'],
      population: '95,000',
      nickname: 'The Entrepreneurial City',
      serviceRadius: '25 miles',
      keyNeighborhoods: ['Geist', 'Hamilton Southeastern', 'Fishers Station'],
      localLandmarks: ['Geist Reservoir', 'Conner Prairie', 'Fishers Event Center']
    },
    'westfield': {
      name: 'Westfield',
      state: 'Indiana',
      stateAbbr: 'IN',
      zipCodes: ['46074'],
      population: '45,000',
      nickname: 'Welcome Home',
      serviceRadius: '20 miles',
      keyNeighborhoods: ['Grand Park', 'Chatham Hills', 'Wood Valley'],
      localLandmarks: ['Grand Park Sports Complex', 'Westfield Washington Township']
    },
    'noblesville': {
      name: 'Noblesville',
      state: 'Indiana',
      stateAbbr: 'IN',
      zipCodes: ['46060', '46061', '46062'],
      population: '69,000',
      nickname: 'The Heart of Hamilton County',
      serviceRadius: '25 miles',
      keyNeighborhoods: ['Old Town', 'Harbour Trees', 'Pebble Brook'],
      localLandmarks: ['Conner Prairie', 'Ruoff Music Center', 'White River']
    }
  };

  return locations[locationSlug] || null;
}

// Page-specific functionality
function initializePageSpecificFeatures() {
  // Check if we're on a service page
  if (window.location.pathname.includes('service.html')) {
    initializeServicePageFeatures();
  }

  // Check if we're on the about page
  if (window.location.pathname.includes('about.html')) {
    initializeAboutPageFeatures();
  }
}

// Service page specific functionality
function initializeServicePageFeatures() {
  // Get service slug from URL
  const serviceSlug = getServiceSlugFromURL();

  // Load service page content
  loadServicePageContent(serviceSlug);

  // Load other components (conditionally for emergency service and commercial HVAC)
  if (serviceSlug !== 'emergency-service' && serviceSlug !== 'commercial-hvac') {
    loadTrustSignalsComponent();
    loadContactComponent();
  }

  // Only initialize contact form and scheduler for non-emergency and non-commercial services
  if (serviceSlug !== 'emergency-service' && serviceSlug !== 'commercial-hvac') {
    initializeContactForm();
    initializeScheduler();
  }

  // Initialize Calendly (only for non-emergency and non-commercial services)
  if (serviceSlug !== 'emergency-service' && serviceSlug !== 'commercial-hvac') {
    setTimeout(() => {
      initializeCalendly();
    }, 1000);
  }

  // Hide scheduling and contact sections for emergency service
  if (serviceSlug === 'emergency-service') {
    hideEmergencySections();
  }

  // Hide schedule section for commercial HVAC (redirect to contact page for quotes)
  if (serviceSlug === 'commercial-hvac') {
    hideScheduleSectionForCommercial();
  }
}

// About page specific functionality
function initializeAboutPageFeatures() {
  // Initialize video modal
  initVideoModal();

  // Handle navigation links
  handleNavigation();
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

// Hide scheduling and contact sections for emergency service
function hideEmergencySections() {
  // Hide the schedule section
  const scheduleSection = document.getElementById('schedule');
  if (scheduleSection) {
    scheduleSection.style.display = 'none';
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

// Hide schedule section for commercial HVAC (redirect to contact page for quotes)
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
      scheduleOption.href = 'contact.html';
    }
  }
}

// Initialize video modal for about page
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

// Handle navigation for about page
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


