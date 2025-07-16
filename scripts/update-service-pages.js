const fs = require('fs');
const path = require('path');

// Service pages to update
const servicePages = [
  'furnace-installation.html',
  'emergency-service.html',
  'commercial-hvac.html',
  'indoor-air-quality.html',
  'maintenance-plans.html'
];

// Template for service pages
const servicePageTemplate = (serviceName) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serviceName} Indianapolis | Heartland Heating + Air</title>
    <meta name="description" content="Professional ${serviceName.toLowerCase()} in Indianapolis. Fast, reliable service for all HVAC systems. Available 24/7 for emergencies!">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <!-- Header Navigation -->
    <header class="header">
        <div class="header-container">
            <div class="logo-container">
                <div class="logo-text-container">
                    <span class="logo-text">Heartland</span>
                    <span class="logo-tagline">Heating & Air</span>
                </div>
            </div>
            
            <nav class="nav-menu">
                <a href="/" class="nav-link">Home</a>
                <a href="/#services" class="nav-link">Services</a>
                <a href="/#about" class="nav-link">About</a>
                <a href="/#testimonials" class="nav-link">Reviews</a>
                <a href="/#contact" class="nav-link">Contact</a>
                <a href="tel:(317) 555-0123" class="nav-phone">
                    <i class="fas fa-phone"></i> (317) 555-0123
                </a>
            </nav>
        </div>
    </header>

    <!-- Service Page Container -->
    <div id="service-page-container">
        <!-- Service Hero Section -->
        <div id="service-hero-container"></div>
        
        <!-- Service Content Section -->
        <div id="service-content-container"></div>
        
        <!-- Service Features Section -->
        <div id="service-features-container"></div>
        
        <!-- Service CTA Section -->
        <div id="service-cta-container"></div>
        
        <!-- Service Trust Signals Section -->
        <div id="service-trust-container"></div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Heartland Heating + Air</h3>
                    <p>Professional HVAC services in Indianapolis and surrounding areas.</p>
                    <div class="footer-contact">
                        <p><i class="fas fa-phone"></i> (317) 555-0123</p>
                        <p><i class="fas fa-envelope"></i> info@heartlandheatingair.com</p>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/services/ac-repair.html">AC Repair</a></li>
                        <li><a href="/services/furnace-installation.html">Furnace Installation</a></li>
                        <li><a href="/services/emergency-service.html">Emergency Service</a></li>
                        <li><a href="/services/maintenance-plans.html">Maintenance Plans</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Service Areas</h4>
                    <ul>
                        <li><a href="/locations/indianapolis/hvac-repair.html">Indianapolis</a></li>
                        <li><a href="/locations/carmel/hvac-repair.html">Carmel</a></li>
                        <li><a href="/locations/fishers/hvac-repair.html">Fishers</a></li>
                        <li><a href="/locations/westfield/hvac-repair.html">Westfield</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Heartland Heating + Air. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Emergency Float Button -->
    <div class="emergency-float">
        <a href="tel:(317) 555-0123" class="emergency-btn">
            <i class="fas fa-phone"></i>
            Emergency Call
        </a>
    </div>

    <!-- Chat Widget -->
    <div class="chat-widget">
        <div class="chat-toggle" id="chatToggle">
            <i class="fas fa-comments"></i>
            <div class="chat-badge">1</div>
        </div>
        
        <div class="chat-popup" id="chatPopup">
            <div class="chat-header">
                <div class="chat-company">
                    <i class="fas fa-snowflake"></i>
                    Heartland Heating + Air
                </div>
                <button class="chat-close" id="chatClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="chat-content">
                <div class="chat-greeting">
                    <div class="greeting-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="greeting-text">
                        <h4>Hi there! 👋</h4>
                        <p>How can we help you today?</p>
                    </div>
                </div>
                
                <div class="chat-options">
                    <div class="chat-option" data-action="call">
                        <i class="fas fa-phone"></i>
                        <span>Call Now</span>
                    </div>
                    <div class="chat-option" data-action="quote">
                        <i class="fas fa-calculator"></i>
                        <span>Get Quote</span>
                    </div>
                    <div class="chat-option" data-action="schedule">
                        <i class="fas fa-calendar"></i>
                        <span>Schedule Service</span>
                    </div>
                </div>
                
                <div class="chat-hours">
                    <p><i class="fas fa-clock"></i> Available 24/7 for emergencies</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Main JavaScript -->
    <script type="module" src="../main.js"></script>
</body>
</html>`;

// Service name mappings
const serviceNames = {
  'furnace-installation.html': 'Furnace Installation',
  'emergency-service.html': 'Emergency HVAC Service',
  'commercial-hvac.html': 'Commercial HVAC',
  'indoor-air-quality.html': 'Indoor Air Quality',
  'maintenance-plans.html': 'HVAC Maintenance Plans'
};

// Update service pages
servicePages.forEach(page => {
  const filePath = path.join(__dirname, '../public/services', page);
  const serviceName = serviceNames[page];

  if (serviceName) {
    const content = servicePageTemplate(serviceName);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${page}`);
  }
});

console.log('All service pages updated successfully!'); 