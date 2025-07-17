// Scheduling Widget Component
class SchedulingWidget {
  constructor() {
    this.activeTab = 'call'; // Default to Call Us
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const container = document.getElementById('schedule-widget');
    if (!container) return;

    container.innerHTML = `
      <div class="schedule-header">
        <h2>Ready to Get Comfortable?</h2>
        <p>Choose how you'd like to connect with our team</p>
      </div>
      
      <div class="schedule-tabs">
        <button class="tab-btn active" data-tab="call">
          <i class="fas fa-phone"></i>
          <span>Call Us</span>
        </button>
        <button class="tab-btn" data-tab="book">
          <i class="fas fa-calendar-check"></i>
          <span>Book Online</span>
        </button>
        <button class="tab-btn" data-tab="quote">
          <i class="fas fa-file-text"></i>
          <span>Get Quote</span>
        </button>
      </div>

      <div class="schedule-content">
        <div class="tab-content active" data-content="call">
          <div class="call-content">
            <div class="call-main">
              <h3>Speak with Our Team</h3>
              <p>Get immediate help from our HVAC experts</p>
              <div class="call-options">
                <a href="tel:+13175550123" class="call-btn primary">
                  <i class="fas fa-phone"></i>
                  <span>Call Now</span>
                  <small>(317) 555-0123</small>
                </a>
                <a href="sms:+13175550123" class="call-btn secondary">
                  <i class="fas fa-sms"></i>
                  <span>Text Us</span>
                  <small>Same number</small>
                </a>
              </div>
            </div>
            <div class="call-features">
              <div class="feature">
                <i class="fas fa-clock"></i>
                <span>24/7 Emergency Service</span>
              </div>
              <div class="feature">
                <i class="fas fa-user-tie"></i>
                <span>Licensed Technicians</span>
              </div>
              <div class="feature">
                <i class="fas fa-shield-alt"></i>
                <span>Google Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" data-content="book">
          <div class="book-content">
            <h3>Schedule Your Appointment</h3>
            <p>Choose a convenient time that works for you</p>
            <button class="book-btn" id="openCalendly">
              <i class="fas fa-calendar-plus"></i>
              <span>View Available Times</span>
            </button>
            <div class="book-features">
              <div class="feature">✓ Real-time availability</div>
              <div class="feature">✓ Instant confirmation</div>
              <div class="feature">✓ Appointment reminders</div>
            </div>
          </div>
        </div>

        <div class="tab-content" data-content="quote">
          <div class="quote-content">
            <h3>Request Your Free Estimate</h3>
            <p>Get detailed pricing for your project</p>
            <form class="quote-form" id="quoteForm">
              <div class="form-group">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="tel" name="phone" placeholder="Phone Number" required>
              </div>
              <div class="form-group">
                <input type="email" name="email" placeholder="Email Address">
                <select name="service" required>
                  <option value="">Select Service</option>
                  <option>Furnace Installation</option>
                  <option>AC Installation</option>
                  <option>HVAC Repair</option>
                  <option>Maintenance Plan</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea name="details" placeholder="Tell us about your project..." rows="3"></textarea>
              <div class="recaptcha-field">
                <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
              </div>
              <button type="submit" class="quote-submit">
                <i class="fas fa-paper-plane"></i>
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = btn.dataset.tab;
        this.switchTab(tabId);
      });
    });

    // Calendly integration - add small delay to ensure DOM is ready
    setTimeout(() => {
      const calendlyBtn = document.getElementById('openCalendly');
      if (calendlyBtn) {
        calendlyBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openCalendly();
        });
      }
    }, 100);

    // Quote form
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleQuoteSubmit(e);
      });
    }
  }

  switchTab(tabId) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelector(`[data-content="${tabId}"]`).classList.add('active');

    this.activeTab = tabId;
  }

  openCalendly() {
    this.showCalendlyModal();
  }

  showCalendlyModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('calendly-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'calendly-modal';
      modal.className = 'calendly-modal';
      modal.innerHTML = `
        <div class="calendly-modal-overlay">
          <div class="calendly-modal-content">
            <div class="calendly-modal-header">
              <h3>Schedule Your Appointment</h3>
              <button class="calendly-modal-close" id="closeCalendlyModal">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="calendly-modal-body">
              <div class="calendly-embed-container" id="calendly-embed-container">
                <div class="calendly-loading">
                  <i class="fas fa-spinner fa-spin"></i>
                  <p>Loading booking calendar...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      // Add close event listener
      document.getElementById('closeCalendlyModal').addEventListener('click', () => {
        this.closeCalendlyModal();
      });

      // Close on overlay click
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('calendly-modal-overlay')) {
          this.closeCalendlyModal();
        }
      });
    }

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Load Calendly widget
    this.loadCalendlyWidget();
  }

  loadCalendlyWidget() {
    const container = document.getElementById('calendly-embed-container');

    // For demo purposes, show a preview of what the booking interface would look like
    // Replace this entire section with actual Calendly integration
    this.showBookingDemo();

    /* 
    // PRODUCTION CODE: Uncomment this section when you have your actual Calendly URL
    if (typeof Calendly !== 'undefined') {
      try {
        // Clear loading state
        container.innerHTML = '';
        
        // Initialize Calendly inline widget
        // Replace 'YOUR_CALENDLY_URL' with your actual Calendly URL
        Calendly.initInlineWidget({
          url: 'https://calendly.com/your-username/30min',
          parentElement: container,
          prefill: {},
          utm: {}
        });
        
      } catch (error) {
        this.showCalendlyError();
      }
    } else {
      this.waitForCalendly();
    }
    */
  }

  showBookingDemo() {
    const container = document.getElementById('calendly-embed-container');
    container.innerHTML = `
      <div class="booking-demo">
        <div class="booking-demo-header">
          <h4>🎉 Booking Demo - Replace with Your Calendly URL</h4>
          <p>This is a preview of what your booking interface will look like</p>
        </div>
        <div class="booking-demo-content">
          <div class="demo-calendar">
            <h5>Select a Date & Time</h5>
            <div class="demo-time-slots">
              <div class="demo-day">
                <h6>Today</h6>
                <button class="demo-time-slot">9:00 AM</button>
                <button class="demo-time-slot">11:00 AM</button>
                <button class="demo-time-slot">2:00 PM</button>
                <button class="demo-time-slot">4:00 PM</button>
              </div>
              <div class="demo-day">
                <h6>Tomorrow</h6>
                <button class="demo-time-slot">8:00 AM</button>
                <button class="demo-time-slot">10:00 AM</button>
                <button class="demo-time-slot">1:00 PM</button>
                <button class="demo-time-slot">3:00 PM</button>
              </div>
            </div>
          </div>
          <div class="demo-setup-info">
            <h5>📋 Setup Instructions</h5>
            <ol>
              <li>Create your Calendly account at <a href="https://calendly.com" target="_blank">calendly.com</a></li>
              <li>Set up your HVAC service booking page</li>
              <li>Replace the demo URL in <code>SchedulingWidget.js</code></li>
              <li>Update the booking options to match your services</li>
            </ol>
            <div class="demo-actions">
              <button class="demo-btn-primary" onclick="window.open('https://calendly.com', '_blank')">
                <i class="fas fa-external-link-alt"></i>
                Get Calendly
              </button>
              <button class="demo-btn-secondary" onclick="alert('For now, please call (317) 555-0123 to schedule!')">
                <i class="fas fa-phone"></i>
                Call to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  showCalendlyError() {
    const container = document.getElementById('calendly-embed-container');
    container.innerHTML = `
      <div class="calendly-error">
        <i class="fas fa-exclamation-triangle"></i>
        <h4>Booking Temporarily Unavailable</h4>
        <p>We're having trouble loading the booking calendar.</p>
        <p>Please call us directly at <a href="tel:+13175550123">(317) 555-0123</a> to schedule your appointment.</p>
        <div class="calendly-error-actions">
          <button class="btn-close-modal" onclick="document.getElementById('calendly-modal').querySelector('.calendly-modal-close').click()">
            Close
          </button>
          <a href="tel:+13175550123" class="btn-call-now">
            <i class="fas fa-phone"></i> Call Now
          </a>
        </div>
      </div>
    `;
  }

  closeCalendlyModal() {
    const modal = document.getElementById('calendly-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  waitForCalendly() {
    let attempts = 0;
    const maxAttempts = 10;

    const checkCalendly = () => {
      attempts++;

      if (typeof Calendly !== 'undefined') {
        this.loadCalendlyWidget();
      } else if (attempts < maxAttempts) {
        setTimeout(checkCalendly, 500);
      } else {
        this.showCalendlyError();
      }
    };

    checkCalendly();
  }



  async handleQuoteSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('.quote-submit');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

        try {
      // Validate reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        this.showQuoteError('Please complete the reCAPTCHA verification.');
        return;
      }
      
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Add reCAPTCHA response
      data.recaptchaResponse = recaptchaResponse;
      
      // Send to backend
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
        submitBtn.style.background = '#10b981';
        form.reset();

        // Show success notification
        this.showQuoteSuccess(result.message);
      } else {
        // Show error message
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
        submitBtn.style.background = '#ef4444';
        this.showQuoteError(result.message || 'An error occurred. Please try again.');
      }

    } catch (error) {
      console.error('Quote submission error:', error);
      submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
      submitBtn.style.background = '#ef4444';
      this.showQuoteError('Network error. Please check your connection and try again.');
    }

    // Reset button after delay
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  }

  showQuoteSuccess(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'quote-notification success';
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-check-circle"></i>
        <div>
          <h4>Quote Request Sent!</h4>
          <p>${message}</p>
        </div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  showQuoteError(message) {
    // Create error notification
    const notification = document.createElement('div');
    notification.className = 'quote-notification error';
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <h4>Oops!</h4>
          <p>${message}</p>
          <p>Please try again or call us directly at <a href="tel:+13175550123">(317) 555-0123</a></p>
        </div>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 8 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 8000);
  }
}

export default SchedulingWidget; 