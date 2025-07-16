const fs = require('fs');
const path = require('path');
const layoutTemplate = require('./layout-template.js');

// Location and service data
const locations = {
  indianapolis: {
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
  carmel: {
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
  fishers: {
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
  westfield: {
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
  noblesville: {
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

const services = {
  'hvac-repair': {
    name: 'HVAC Repair',
    description: 'Expert heating and cooling system diagnostics and repair',
    serviceTime: 'Same day',
    averagePrice: '$150-$400',
    keywords: ['emergency hvac repair', 'furnace repair', 'air conditioner repair', 'same day hvac repair']
  },
  'furnace-installation': {
    name: 'Furnace Installation',
    description: 'Professional furnace installation and replacement with American-made equipment',
    serviceTime: '1-2 days',
    averagePrice: '$3,000-$6,000',
    keywords: ['new furnace installation', 'furnace replacement', 'high efficiency furnace']
  },
  'air-conditioning-service': {
    name: 'Air Conditioning Service',
    description: 'Complete air conditioning installation, repair, and preventive maintenance',
    serviceTime: 'Same day',
    averagePrice: '$200-$500',
    keywords: ['ac installation', 'central air conditioning', 'ac maintenance']
  },
  'hvac-maintenance': {
    name: 'HVAC Maintenance',
    description: 'Comprehensive preventive maintenance to maximize system efficiency and lifespan',
    serviceTime: '2-4 hours',
    averagePrice: '$150-$300',
    keywords: ['hvac tune up', 'seasonal maintenance', 'preventive maintenance']
  },
  'duct-cleaning': {
    name: 'Duct Cleaning',
    description: 'Professional air duct cleaning and sanitization for improved indoor air quality',
    serviceTime: 'Same day',
    averagePrice: '$300-$600',
    keywords: ['air duct cleaning', 'ductwork cleaning', 'indoor air quality']
  }
};

// Generate static HTML template using layout
function generateStaticLocationPage(location, service) {
  const locationData = locations[location];
  const serviceData = services[service];

  if (!locationData || !serviceData) {
    console.error(`Missing data for ${location}/${service}`);
    return null;
  }

  // Generate page content
  const pageContent = `
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>${serviceData.name} in ${locationData.name}, ${locationData.stateAbbr}</h1>
            <p>Expert ${serviceData.name.toLowerCase()} services in ${locationData.name}. Call (317) 555-0123 for ${serviceData.serviceTime.toLowerCase()} service.</p>
            <a href="tel:(317) 555-0123" class="btn">
                Call (317) 555-0123
            </a>
        </div>
    </section>

    <!-- Service Info -->
    <section class="service-info">
        <div class="container">
            <h2>Professional ${serviceData.name} in ${locationData.name}</h2>
            <ul class="service-list">
                <li>24/7 emergency service available</li>
                <li>EPA Certified, NATE Certified technicians</li>
                <li>Google Guaranteed service protection</li>
                <li>${serviceData.serviceTime} service available</li>
                <li>Transparent pricing starting at ${serviceData.averagePrice}</li>
            </ul>
        </div>
    </section>

    <!-- Service Area -->
    <section class="service-area">
        <div class="container">
            <h3>Service Area</h3>
            <p>We proudly serve ${locationData.name} and surrounding communities within ${locationData.serviceRadius}.</p>
            <p><strong>ZIP Codes:</strong> ${locationData.zipCodes.join(', ')}</p>
            <p><strong>Key Areas:</strong> ${locationData.keyNeighborhoods.join(', ')}</p>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta">
        <div class="container">
            <h3>Ready for Professional ${serviceData.name} in ${locationData.name}?</h3>
            <p>Contact Heartland Heating + Air today for reliable, efficient ${serviceData.name.toLowerCase()} services.</p>
            <a href="tel:(317) 555-0123" class="btn">
                Call (317) 555-0123
            </a>
            <a href="/#contact" class="btn">
                Get Free Quote
            </a>
            <p class="cta-note">Serving ${locationData.name} and surrounding areas within ${locationData.serviceRadius}.</p>
        </div>
    </section>
  `;

  // Generate page metadata
  const title = `${serviceData.name} in ${locationData.name}, ${locationData.stateAbbr} | Heartland Heating + Air`;
  const description = `Professional ${serviceData.name.toLowerCase()} services in ${locationData.name}, ${locationData.state}. Call (317) 555-0123 for ${serviceData.serviceTime.toLowerCase()} service.`;
  const canonicalUrl = `https://heartlandheatingair.com/locations/${location}/${service}`;

  // Use layout template to generate complete page
  return layoutTemplate.generatePage(pageContent, title, description, canonicalUrl, '../../');
}

// Generate all static location pages
function generateAllStaticPages() {
  const locationSlugs = Object.keys(locations);
  const serviceSlugs = Object.keys(services);

  locationSlugs.forEach(location => {
    serviceSlugs.forEach(service => {
      const fileName = `${service}.html`;
      const filePath = path.join(__dirname, '../public/locations', location, fileName);
      const staticHTML = generateStaticLocationPage(location, service);

      if (staticHTML) {
        // Ensure directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, staticHTML);
        console.log(`Generated static page: ${location}/${fileName}`);
      }
    });
  });

  console.log('All static location pages generated successfully!');
}

// Run the generator
generateAllStaticPages(); 