// Service Page Component
// Dynamically loads service content from data file

import { getServiceBySlug } from '../data/services.js';

export function createServicePage(serviceSlug) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return `
      <div class="service-not-found">
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
        <a href="/" class="btn">Return Home</a>
      </div>
    `;
  }

  return `
    <!-- Service Hero Section -->
    <section class="service-hero">
      <div class="service-hero-background">
        <img src="img/${getServiceImage(service.id)}" alt="${service.title}" class="service-hero-image">
        <div class="service-hero-overlay"></div>
      </div>
      
      <div class="service-hero-layout">
        <div class="service-hero-content">
          <div class="service-hero-text">
            <h1 class="service-hero-headline">${service.heroTitle}</h1>
            <div class="service-hero-meta">
              <p class="service-hero-subtitle">${service.heroSubtitle}</p>
              <p class="service-hero-tagline">
                24/7 Emergency Service • Licensed & Insured<br>Google Guaranteed
              </p>
            </div>
          </div>
          
          <div class="service-hero-actions">
            ${service.id === 'emergency-service' ? `
              <a href="tel:+13175550123" class="btn btn-primary btn-hero">
                Call Now: (317) 555-0123
              </a>
            ` : service.id === 'commercial-hvac' ? `
              <a href="tel:+13175550123" class="btn btn-secondary btn-hero">
                Call Now: (317) 555-0123
              </a>
              <a href="contact.html" class="btn btn-outline btn-hero">
                Get Quote
              </a>
            ` : `
              <a href="tel:+13175550123" class="btn btn-secondary btn-hero">
                Call Now: (317) 555-0123
              </a>
              <a href="#schedule" class="btn btn-outline btn-hero">
                Schedule Service
              </a>
            `}
            <div class="service-hero-location">
              <span>Serving Indianapolis & Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

        ${service.id === 'emergency-service' ? `
      <!-- Emergency Service Content - Compact & Focused -->
      <section class="service-content emergency-content">
        <div class="container">
          <div class="emergency-grid">
            <div class="emergency-info">
              <h2>24/7 Emergency HVAC Service</h2>
              <p>Don't wait for regular business hours. We're here when you need us most.</p>
              
              <div class="emergency-services">
                <h3>Emergency Services</h3>
                <ul class="service-list">
                  <li>No-heat emergencies</li>
                  <li>AC failure in hot weather</li>
                  <li>Frozen pipes & heating issues</li>
                  <li>Gas leak detection</li>
                  <li>Electrical HVAC problems</li>
                  <li>System shutdowns</li>
                </ul>
              </div>
              
              <div class="emergency-features">
                <div class="feature">
                  <i class="fas fa-clock"></i>
                  <span>Fast response times, typically within 2 hours</span>
                </div>
                <div class="feature">
                  <i class="fas fa-user-tie"></i>
                  <span>Experienced professionals available 24/7</span>
                </div>
                <div class="feature">
                  <i class="fas fa-truck"></i>
                  <span>Service trucks stocked with common parts</span>
                </div>
              </div>
            </div>
            
            <div class="emergency-cta">
              <div class="emergency-card">
                <h3>Need Emergency Service?</h3>
                <p>Call or text us immediately for urgent HVAC issues.</p>
                <div class="emergency-buttons">
                  <a href="tel:+13175550123" class="btn btn-primary btn-emergency">
                    <i class="fas fa-phone"></i>
                    Call Now: (317) 555-0123
                  </a>
                  <a href="sms:+13175550123" class="btn btn-secondary btn-emergency">
                    <i class="fas fa-sms"></i>
                    Text Us
                  </a>
                </div>
                <div class="emergency-note">
                  <p><strong>Available 24/7/365</strong> for emergencies</p>
                  <p>Emergency service fee: $150 (includes diagnostic)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ` : `
      <!-- Regular Service Content -->
      <section class="service-content">
        <div class="container">
          <div class="content-grid">
            <div class="main-content">
              <h2>${service.title} Services</h2>
              <p>${service.description}</p>
              
              <h3>Services Include</h3>
              <ul class="service-list">
                ${service.services.slice(0, 6).map(serviceItem => `<li>${serviceItem}</li>`).join('')}
              </ul>
              
              <div class="benefits-grid">
                ${service.benefits.map(benefit => `
                  <div class="benefit">
                    <div class="benefit-icon">
                      <i class="${benefit.icon}"></i>
                    </div>
                    <h4>${benefit.title}</h4>
                    <p>${benefit.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="sidebar">
              <div class="pricing-card">
                <h3>Pricing</h3>
                ${Object.entries(service.pricing).map(([key, value]) => {
    if (key === 'note') return `<p class="pricing-note">${value}</p>`;
    return `<div class="pricing-item">
                    <span class="pricing-label">${formatPricingLabel(key)}</span>
                    <span class="pricing-value">${value}</span>
                  </div>`;
  }).join('')}
              </div>
              
              <div class="service-areas">
                <h3>Service Areas</h3>
                <div class="areas-list">
                  ${service.areas.slice(0, 6).map(area => `<span class="area-tag">${area}</span>`).join('')}
                </div>
              </div>
              
              <div class="cta-card">
                <h3>Ready to Get Started?</h3>
                ${service.id === 'commercial-hvac' ? `
                  <a href="contact.html" class="btn btn-primary">Get Quote</a>
                  <a href="tel:+13175550123" class="btn btn-secondary">Call Now</a>
                ` : `
                  <a href="#schedule" class="btn btn-primary">Schedule Service</a>
                  <a href="tel:+13175550123" class="btn btn-secondary">Call Now</a>
                `}
              </div>
            </div>
          </div>
        </div>
      </section>
    `}
  `;
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Helper function to get service image
function getServiceImage(serviceId) {
  const images = {
    'ac-repair': 'slideshow-1.png', // AC unit/repair image
    'furnace-installation': 'slideshow-2.png', // Furnace/installation image
    'emergency-service': 'slideshow-3.png', // Emergency service image
    'commercial-hvac': 'slideshow-4.png', // Commercial HVAC image
    'indoor-air-quality': 'slideshow-1.png', // Air quality image
    'maintenance-plans': 'slideshow-2.png' // Maintenance image
  };
  return images[serviceId] || 'slideshow-1.png';
}

// Helper function to format pricing labels
function formatPricingLabel(key) {
  const labels = {
    diagnostic: 'Diagnostic',
    repair: 'Repair',
    replacement: 'Replacement',
    installation: 'Installation',
    emergency: 'Emergency Service',
    afterHours: 'After Hours',
    parts: 'Parts',
    consultation: 'Consultation',
    maintenance: 'Maintenance',
    airPurifier: 'Air Purifier',
    ductCleaning: 'Duct Cleaning',
    basic: 'Basic Plan',
    premium: 'Premium Plan',
    commercial: 'Commercial'
  };
  return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// Initialize service page functionality
export function initServicePage() {
  // Add any service page specific functionality here
} 