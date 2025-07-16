// Simplified LocationPage Component - For minimal, SEO-focused location pages
export class LocationPage {
  constructor(locationData, serviceData) {
    this.location = locationData;
    this.service = serviceData;
    this.init();
  }

  init() {
    this.createHero();
    this.createServiceInfo();
    this.createServiceArea();
    this.createCTA();
  }

  createHero() {
    const heroHTML = `
      <section class="location-hero">
        <div class="container">
          <h1>${this.service.name} in ${this.location.name}, ${this.location.stateAbbr}</h1>
          <p>Professional ${this.service.name.toLowerCase()} services in ${this.location.name}. Call (317) 555-0123 for ${this.service.serviceTime.toLowerCase()} service.</p>
          <a href="tel:(317) 555-0123" class="btn btn-primary">
            <i class="fas fa-phone"></i> Call (317) 555-0123
          </a>
        </div>
      </section>
    `;

    const heroContainer = document.getElementById('location-hero-container');
    if (heroContainer) {
      heroContainer.innerHTML = heroHTML;
    }
  }

  createServiceInfo() {
    const infoHTML = `
      <section class="service-info">
        <div class="container">
          <h2>${this.service.name} Services in ${this.location.name}</h2>
          <ul class="service-list">
            <li>Emergency ${this.service.name.toLowerCase()} available 24/7</li>
            <li>Serving ${this.location.name} and surrounding areas</li>
            <li>Licensed and insured technicians</li>
            <li>${this.service.serviceTime} service available</li>
            <li>Starting at ${this.service.averagePrice}</li>
          </ul>
        </div>
      </section>
    `;

    const infoContainer = document.getElementById('location-content-container');
    if (infoContainer) {
      infoContainer.innerHTML = infoHTML;
    }
  }

  createServiceArea() {
    const areaHTML = `
      <section class="service-area">
        <div class="container">
          <h3>Service Area</h3>
          <p>We serve ${this.location.name} and surrounding communities within ${this.location.serviceRadius}.</p>
          <p><strong>ZIP Codes:</strong> ${this.location.zipCodes.join(', ')}</p>
          <p><strong>Key Areas:</strong> ${this.location.keyNeighborhoods.join(', ')}</p>
        </div>
      </section>
    `;

    const areaContainer = document.getElementById('location-benefits-container');
    if (areaContainer) {
      areaContainer.innerHTML = areaHTML;
    }
  }

  createCTA() {
    const ctaHTML = `
      <section class="location-cta">
        <div class="container">
          <h3>Need ${this.service.name} in ${this.location.name}?</h3>
          <p>Contact Heartland Heating + Air today for reliable ${this.service.name.toLowerCase()} services.</p>
          <div class="cta-buttons">
            <a href="tel:(317) 555-0123" class="btn btn-primary">
              <i class="fas fa-phone"></i> Call (317) 555-0123
            </a>
            <a href="/#contact" class="btn btn-secondary">Get Free Quote</a>
          </div>
          <p class="cta-note">Serving ${this.location.name} and surrounding areas within ${this.location.serviceRadius}.</p>
        </div>
      </section>
    `;

    const ctaContainer = document.getElementById('local-cta-container');
    if (ctaContainer) {
      ctaContainer.innerHTML = ctaHTML;
    }
  }
} 