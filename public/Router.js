// Simple Client-Side Router for Location Pages
class LocationRouter {
  constructor() {
    this.routes = [];
    this.notFoundCallback = null;
    this.init();
  }

  init() {
    // Handle initial page load
    window.addEventListener('DOMContentLoaded', () => {
      this.handleRoute();
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="/locations/"]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('href'));
      }
    });
  }

  // Add a route
  addRoute(path, callback) {
    this.routes.push({ path, callback });
  }

  // Set 404 handler
  setNotFound(callback) {
    this.notFoundCallback = callback;
  }

  // Navigate to a new route
  navigate(path) {
    window.history.pushState(null, null, path);
    this.handleRoute();
  }

  // Handle current route
  handleRoute() {
    const path = window.location.pathname;

    // Check if it's a location page
    const locationMatch = path.match(/^\/locations\/([^\/]+)\/([^\/]+)\.html?$/);
    if (locationMatch) {
      const [, locationKey, serviceKey] = locationMatch;
      this.loadLocationPage(locationKey, serviceKey);
      return;
    }

    // Check other routes
    for (const route of this.routes) {
      if (route.path === path) {
        route.callback();
        return;
      }
    }

    // 404 handler
    if (this.notFoundCallback) {
      this.notFoundCallback();
    }
  }

  // Load location-service page dynamically
  async loadLocationPage(locationKey, serviceKey) {
    try {
      // Import location data
      const { locations, services, businessInfo } = await import('./data/locations.js');

      const location = locations[locationKey];
      const service = services[serviceKey];

      if (!location || !service) {
        throw new Error('Location or service not found');
      }

      // Update page title and meta
      this.updatePageMeta(location, service);

      // Update content
      this.updatePageContent(location, service);

      // Update schema markup
      this.updateSchemaMarkup(location, service);

    } catch (error) {
      console.error('Error loading location page:', error);
      if (this.notFoundCallback) {
        this.notFoundCallback();
      }
    }
  }

  // Update page meta tags
  updatePageMeta(location, service) {
    const pageTitle = `${service.name} in ${location.name}, ${location.stateAbbr} | Heartland Heating & Air`;
    const metaDescription = `Professional ${service.shortName.toLowerCase()} services in ${location.name}, ${location.state}. Heartland Heating & Air offers ${service.serviceTime.toLowerCase()} ${service.shortName.toLowerCase()} with EPA certification. Call (317) 555-0123!`;

    document.title = pageTitle;

    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = metaDescription;

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://heartlandheatingair.com${window.location.pathname}`;
  }

  // Update page content
  updatePageContent(location, service) {
    const container = document.querySelector('.main-content') || document.body;

    container.innerHTML = `
      <!-- Location-Service Hero Section -->
      <section class="location-hero">
        <div class="container">
          <div class="hero-content">
            <h1>${service.name} in ${location.name}, ${location.state}</h1>
            <p class="hero-subtitle">
              Professional ${service.shortName.toLowerCase()} services for ${location.name} residents and businesses. 
              Heartland Heating & Air provides ${service.serviceTime.toLowerCase()} service with EPA certification.
            </p>
            
            <div class="hero-features">
              <div class="feature">
                <i class="fas fa-clock"></i>
                <span>${service.serviceTime}</span>
              </div>
              <div class="feature">
                <i class="fas fa-dollar-sign"></i>
                <span>${service.averagePrice}</span>
              </div>
              <div class="feature">
                <i class="fas fa-shield-alt"></i>
                <span>Google Guaranteed</span>
              </div>
            </div>
            
            <div class="hero-cta">
              <a href="tel:(317) 555-0123" class="btn btn-primary">
                <i class="fas fa-phone"></i> Call Now: (317) 555-0123
              </a>
              <a href="#contact" class="btn btn-secondary">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Details -->
      <section class="service-details">
        <div class="container">
          <h2>Professional ${service.name} Services in ${location.name}</h2>
          
          <div class="service-grid">
            <div class="service-info">
              <h3>What We Offer</h3>
              <p>${service.description} for ${location.name} homeowners and businesses. Our certified technicians provide:</p>
              <ul>
                ${service.longTailKeywords.map(keyword => `<li>${keyword.charAt(0).toUpperCase() + keyword.slice(1)}</li>`).join('')}
              </ul>
            </div>
            
            <div class="location-info">
              <h3>Serving ${location.name}, ${location.state}</h3>
              <p>We proudly serve ${location.name} (${location.nickname}) and surrounding areas within ${location.serviceRadius}.</p>
              
              <div class="location-details">
                <div class="detail">
                  <strong>Population:</strong> ${location.population}
                </div>
                <div class="detail">
                  <strong>Key Areas:</strong> ${location.keyNeighborhoods.join(', ')}
                </div>
                <div class="detail">
                  <strong>Service Area:</strong> ${location.serviceRadius} radius
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose">
        <div class="container">
          <h2>Why Choose Heartland Heating & Air for ${service.name} in ${location.name}?</h2>
          
          <div class="benefits-grid">
            <div class="benefit">
              <i class="fas fa-certificate"></i>
              <h3>Certified Technicians</h3>
              <p>EPA Certified, NATE Certified, BBB A+ Rating professionals</p>
            </div>
            <div class="benefit">
              <i class="fas fa-clock"></i>
              <h3>${service.serviceTime}</h3>
              <p>Fast, reliable service when you need it most</p>
            </div>
            <div class="benefit">
              <i class="fas fa-map-marker-alt"></i>
              <h3>Local Expertise</h3>
              <p>Serving ${location.name} since 2015</p>
            </div>
            <div class="benefit">
              <i class="fas fa-shield-alt"></i>
              <h3>Google Guaranteed</h3>
              <p>100% satisfaction guarantee on all work</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready for Professional ${service.name} in ${location.name}?</h2>
          <p>Contact Heartland Heating & Air today for fast, reliable ${service.shortName.toLowerCase()} service in ${location.name}, ${location.state}.</p>
          
          <div class="cta-buttons">
            <a href="tel:(317) 555-0123" class="btn btn-primary btn-large">
              <i class="fas fa-phone"></i> Call (317) 555-0123
            </a>
            <a href="#contact" class="btn btn-secondary btn-large">
              <i class="fas fa-calendar"></i> Schedule Service
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // Update schema markup
  updateSchemaMarkup(location, service) {
    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heartland Heating & Air",
      "description": `${service.description} in ${location.name}, ${location.state}`,
      "telephone": "(317) 555-0123",
      "email": "info@heartlandheatingair.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": location.stateAbbr,
        "postalCode": location.zipCodes[0],
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.lat,
        "longitude": location.coordinates.lng
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        },
        "geoRadius": location.serviceRadius
      }
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }
}

// Initialize router
const router = new LocationRouter();

// Add routes
router.addRoute('/', () => {
  // Home page - no action needed
});

router.setNotFound(() => {
  // 404 handler
  console.log('Page not found');
});

export default router;
