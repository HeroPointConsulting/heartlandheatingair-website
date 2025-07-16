// Contact Component
function createContactComponent() {
  return `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Header -->
          <div class="contact-header">
            <h2>Get Your Free Estimate</h2>
            <p>From single-family homes to multi-property portfolios and commercial projects—we handle installations, major repairs, and custom HVAC solutions across the Midwest. Get your personalized quote today.</p>
          </div>
          
          <!-- Main Content -->
          <div class="contact-content">
            <!-- Contact Methods -->
            <div class="contact-methods-modern">
              <div class="method-card primary">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-details">
                  <h4>Call or Text</h4>
                  <a href="tel:+13175550123" class="method-link">(317) 555-0123</a>
                  <span class="method-note">24/7 Emergency • Commercial Priority</span>
                </div>
              </div>
              
              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-details">
                  <h4>Email</h4>
                  <a href="mailto:info@heartlandheatingair.com" class="method-link">info@heartlandheatingair.com</a>
                  <span class="method-note">Detailed project specs welcome</span>
                </div>
              </div>
              
              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-details">
                  <h4>Service Area</h4>
                  <span class="method-link">Indianapolis & Midwest Region</span>
                  <span class="method-note">Multi-property portfolios</span>
                </div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="contact-form-modern">
              <div class="form-header">
                <h3>Request Your Quote</h3>
                <div class="trust-indicators">
                  <span class="trust-item">
                    <i class="fas fa-shield-check"></i>
                    Google Guaranteed
                  </span>
                  <span class="trust-item">
                    <i class="fas fa-star"></i>
                    4.9/5 Stars
                  </span>
                  <span class="trust-item">
                    <i class="fas fa-certificate"></i>
                    Licensed & Insured
                  </span>
                  <span class="trust-item">
                    <i class="fas fa-building"></i>
                    Commercial Experience
                  </span>
                  <span class="trust-item">
                    <i class="fas fa-handshake"></i>
                    Property Manager Trusted
                  </span>
                </div>
              </div>
              
              <form class="modern-form" action="#" method="POST">
                <div class="form-grid">
                  <div class="form-field">
                    <label for="name">Your Name*</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div class="form-field">
                    <label for="phone">Phone Number*</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>
                
                <div class="form-grid">
                  <div class="form-field">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div class="form-field">
                    <label for="customer_type">I Am A*</label>
                    <select id="customer_type" name="customer_type" required>
                      <option value="">Select customer type...</option>
                      <option>Homeowner</option>
                      <option>Property Manager</option>
                      <option>Project Manager</option>
                      <option>Business Owner</option>
                      <option>Facilities Manager</option>
                      <option>General Contractor</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-grid">
                  <div class="form-field">
                    <label for="service">Service Needed*</label>
                    <select id="service" name="service" required>
                      <option value="">Select a service...</option>
                      <option>Furnace Installation</option>
                      <option>Furnace Repair</option>
                      <option>AC Installation</option>
                      <option>AC Repair</option>
                      <option>Commercial HVAC Installation</option>
                      <option>Commercial HVAC Repair</option>
                      <option>Multi-Property Maintenance</option>
                      <option>Indoor Air Quality</option>
                      <option>Emergency Service</option>
                      <option>Custom Project Consultation</option>
                      <option>Free Estimate</option>
                    </select>
                  </div>
                  <div class="form-field">
                    <label for="project_scope">Project Scope</label>
                    <select id="project_scope" name="project_scope">
                      <option value="">Select scope...</option>
                      <option>Single Property</option>
                      <option>Multiple Properties (2-5)</option>
                      <option>Large Portfolio (6+)</option>
                      <option>Commercial Building</option>
                      <option>Industrial Facility</option>
                      <option>New Construction</option>
                      <option>Retrofit/Upgrade</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-grid">
                  <div class="form-field">
                    <label for="timeline">Project Timeline</label>
                    <select id="timeline" name="timeline">
                      <option value="">When do you need this done?</option>
                      <option>Emergency/ASAP</option>
                      <option>Within 1 week</option>
                      <option>Within 1 month</option>
                      <option>Within 3 months</option>
                      <option>Planning ahead (6+ months)</option>
                      <option>Seasonal (spring/summer)</option>
                      <option>Seasonal (fall/winter)</option>
                    </select>
                  </div>
                  <div class="form-field">
                    <label for="preferred_time">Preferred Contact Time</label>
                    <select id="preferred_time" name="preferred_time">
                      <option value="">Any time works...</option>
                      <option>Morning (8-11 AM)</option>
                      <option>Afternoon (12-3 PM)</option>
                      <option>Evening (3-6 PM)</option>
                      <option>After Hours (Property Emergency)</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-field">
                  <label for="details">Project Details & Special Requirements</label>
                  <textarea id="details" name="details" rows="4" placeholder="Tell us about your project, number of units, special requirements, existing systems, or any other details that help us provide an accurate estimate..."></textarea>
                </div>
                
                <div class="form-consent">
                  <label class="consent-checkbox">
                    <input type="checkbox" name="consent" required />
                    <span class="checkbox-custom"></span>
                    <span class="consent-text">I agree to receive text messages and calls from Heartland Heating + Air regarding my service request.</span>
                  </label>
                </div>
                
                <button type="submit" class="submit-btn">
                  <i class="fas fa-paper-plane"></i>
                  Get My Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export { createContactComponent }; 