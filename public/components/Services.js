// Services Component for Heartland Heating + Air
// Essential HVAC Services section with grid layout

function createServicesComponent() {
  const services = [
    {
      id: 'emergency-service',
      icon: 'fas fa-phone',
      title: 'Emergency',
      description: '24/7 rapid response for urgent heating and cooling issues',
      highlight: '24/7 Available',
      action: {
        text: 'Call Now',
        href: 'tel:+13175550123',
        className: 'btn-compact btn-emergency'
      },
      isEmergency: true
    },
    {
      id: 'furnace-installation',
      icon: 'fas fa-fire',
      title: 'Furnace Services',
      description: 'Installation, repair, and maintenance of high-efficiency heating systems',
      highlight: '24/7 Emergency',
      action: {
        text: 'Learn More',
        href: 'service.html?service=furnace-installation',
        className: 'btn-compact btn-primary-vibrant'
      }
    },
    {
      id: 'ac-repair',
      icon: 'fas fa-snowflake',
      title: 'AC Services',
      description: 'Complete air conditioning repair, replacement, and maintenance',
      highlight: 'Same Day',
      action: {
        text: 'Learn More',
        href: 'service.html?service=ac-repair',
        className: 'btn-compact btn-primary-vibrant'
      }
    },
    {
      id: 'indoor-air-quality',
      icon: 'fas fa-wind',
      title: 'Air Quality',
      description: 'Advanced purification and ventilation for healthier indoor air',
      highlight: 'Whole Home',
      action: {
        text: 'Learn More',
        href: 'service.html?service=indoor-air-quality',
        className: 'btn-compact btn-primary-vibrant'
      }
    },
    {
      id: 'maintenance-plans',
      icon: 'fas fa-tools',
      title: 'Maintenance',
      description: 'Preventive care plans to extend equipment life and efficiency',
      highlight: 'Priority Service',
      action: {
        text: 'Learn More',
        href: 'service.html?service=maintenance-plans',
        className: 'btn-compact btn-primary-vibrant'
      }
    },
    {
      id: 'commercial-hvac',
      icon: 'fas fa-building',
      title: 'Commercial',
      description: 'Reliable HVAC solutions for properties and businesses',
      highlight: 'Expert Install',
      action: {
        text: 'Learn More',
        href: 'service.html?service=commercial-hvac',
        className: 'btn-compact btn-primary-vibrant'
      }
    }
  ];

  return `
    <section id="services" class="section bg-gray-50">
      <div class="container">
        <div class="section-header text-center">
          <h2>Essential HVAC Services</h2>
          <p>Professional heating, cooling, and air quality solutions for your home and business</p>
        </div>
        <div class="services-grid-compact">
          ${services.map(service => `
            <a href="${service.action.href}" class="service-card-compact ${service.isEmergency ? 'emergency' : ''}" style="text-decoration: none; color: inherit;">
              <div class="service-icon-compact">
                <i class="${service.icon}"></i>
              </div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              <div class="service-highlight">${service.highlight}</div>
              <span class="${service.action.className}" onclick="event.stopPropagation();">${service.action.text}</span>
            </a>
          `).join('')}
        </div>
        <div class="services-cta text-center">
        <a href="#schedule" class="btn btn-primary btn-large">
        <i class="fas fa-calendar-check"></i>
        Schedule Service
        </a>
        <p class="cta-note">Free estimates on new installations</p>
        </div>
      </div>
    </section>
  `;
}

// Initialize Services component
function initServicesComponent() {
  const container = document.getElementById('services-component-container');
  if (container) {
    container.innerHTML = createServicesComponent();
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServicesComponent);
} else {
  initServicesComponent();
}

// Export for manual initialization
window.ServicesComponent = {
  init: initServicesComponent
}; 