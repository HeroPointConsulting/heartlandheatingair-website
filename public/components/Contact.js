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
              
              <form class="modern-form" id="contactForm" novalidate>
                <div class="form-grid">
                  <div class="form-field">
                    <label for="name">Your Name*</label>
                    <input type="text" id="name" name="name" required />
                    <div class="error-message" id="name-error"></div>
                  </div>
                  <div class="form-field">
                    <label for="phone">Phone Number*</label>
                    <input type="tel" id="phone" name="phone" required />
                    <div class="error-message" id="phone-error"></div>
                  </div>
                </div>
                
                <div class="form-grid">
                  <div class="form-field">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                    <div class="error-message" id="email-error"></div>
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
                    <div class="error-message" id="customer_type-error"></div>
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
                    <div class="error-message" id="service-error"></div>
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
                  <div class="error-message" id="consent-error"></div>
                </div>
                
                <div class="form-field recaptcha-field">
                  <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"></div>
                  <div class="error-message" id="recaptcha-error"></div>
                </div>
                
                <button type="submit" class="submit-btn" id="submitBtn">
                  <i class="fas fa-paper-plane"></i>
                  <span class="submit-text">Get My Custom Quote</span>
                  <span class="submit-loading" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i>
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Initialize contact form functionality
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', handleContactSubmit);

  // Add real-time validation
  const requiredFields = ['name', 'phone', 'customer_type', 'service'];
  requiredFields.forEach(fieldName => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => clearFieldError(field));
    }
  });

  // Handle consent checkbox
  const consentCheckbox = form.querySelector('input[name="consent"]');
  if (consentCheckbox) {
    consentCheckbox.addEventListener('change', () => clearFieldError(consentCheckbox));
  }

  // Handle reCAPTCHA
  const recaptchaElement = form.querySelector('.g-recaptcha');
  if (recaptchaElement) {
    // Clear reCAPTCHA error when user interacts with it
    recaptchaElement.addEventListener('click', () => {
      clearFieldError({ name: 'recaptcha' });
    });
  }
}

// Handle form submission
async function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  const submitText = submitBtn.querySelector('.submit-text');
  const submitLoading = submitBtn.querySelector('.submit-loading');

  // Clear previous errors
  clearAllErrors();

  // Validate form
  if (!validateForm(form)) {
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoading.style.display = 'inline';

  try {
        // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Add reCAPTCHA response
    data.recaptchaResponse = grecaptcha.getResponse();
    
    // Send to backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      // Show success message
      showSuccessMessage(result.message);
      form.reset();
    } else {
      // Show error message
      showErrorMessage(result.message || 'An error occurred. Please try again.');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    showErrorMessage('Network error. Please check your connection and try again.');
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoading.style.display = 'none';
  }
}

// Validate individual field
function validateField(field) {
  const fieldName = field.name;
  const value = field.value.trim();
  const errorElement = document.getElementById(`${fieldName}-error`);

  if (!errorElement) return true;

  let isValid = true;
  let errorMessage = '';

  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required.';
  }

  // Email validation
  if (fieldName === 'email' && value && !isValidEmail(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid email address.';
  }

  // Phone validation
  if (fieldName === 'phone' && value && !isValidPhone(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid phone number.';
  }

  // Consent validation
  if (fieldName === 'consent' && !field.checked) {
    isValid = false;
    errorMessage = 'You must agree to receive communications from us.';
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError(field);
  }

  return isValid;
}

// Validate entire form
function validateForm(form) {
  const requiredFields = ['name', 'phone', 'customer_type', 'service'];
  let isValid = true;

  // Validate required fields
  requiredFields.forEach(fieldName => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field && !validateField(field)) {
      isValid = false;
    }
  });

  // Validate consent
  const consentCheckbox = form.querySelector('input[name="consent"]');
  if (consentCheckbox && !validateField(consentCheckbox)) {
    isValid = false;
  }

  // Validate reCAPTCHA
  if (!validateRecaptcha()) {
    isValid = false;
  }

  return isValid;
}

// Show field error
function showFieldError(field, message) {
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    field.classList.add('error');
  }
}

// Clear field error
function clearFieldError(field) {
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    field.classList.remove('error');
  }
}

// Clear all errors
function clearAllErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.textContent = '';
    element.style.display = 'none';
  });

  const errorFields = document.querySelectorAll('.form-field input.error, .form-field select.error');
  errorFields.forEach(field => {
    field.classList.remove('error');
  });
}

// Show success message
function showSuccessMessage(message) {
  // Create success message element
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.innerHTML = `
    <div class="success-content">
      <i class="fas fa-check-circle"></i>
      <h3>Thank You!</h3>
      <p>${message}</p>
      <p>We'll contact you within 2 hours during business hours.</p>
    </div>
  `;

  // Insert after form
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(successDiv, form.nextSibling);

  // Scroll to success message
  successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Remove after 10 seconds
  setTimeout(() => {
    if (successDiv.parentNode) {
      successDiv.parentNode.removeChild(successDiv);
    }
  }, 10000);
}

// Show error message
function showErrorMessage(message) {
  // Create error message element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.innerHTML = `
    <div class="error-content">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>Oops!</h3>
      <p>${message}</p>
      <p>Please try again or call us directly at <a href="tel:+13175550123">(317) 555-0123</a></p>
    </div>
  `;

  // Insert after form
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(errorDiv, form.nextSibling);

  // Scroll to error message
  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Remove after 8 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.parentNode.removeChild(errorDiv);
    }
  }, 8000);
}

// Validation helpers
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Validate reCAPTCHA
function validateRecaptcha() {
  const recaptchaResponse = grecaptcha.getResponse();
  const errorElement = document.getElementById('recaptcha-error');

  if (!recaptchaResponse) {
    if (errorElement) {
      errorElement.textContent = 'Please complete the reCAPTCHA verification.';
      errorElement.style.display = 'block';
    }
    return false;
  }

  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  return true;
}

export { createContactComponent, initContactForm }; 