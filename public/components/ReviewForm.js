// ReviewForm Component
// Handles customer review submission through the chat widget

export class ReviewForm {
  constructor() {
    this.isFormOpen = false;
    this.currentRating = 0;
  }

  render() {
    return `
      <div class="review-form-overlay" id="reviewFormOverlay">
        <div class="review-form-modal" id="reviewFormModal">
          <div class="review-form-header">
            <h3>Share Your Experience</h3>
            <p>We'd love to hear about your experience with Heartland Heating + Air</p>
            <button class="review-form-close" id="reviewFormClose">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <form class="review-form" id="reviewForm">
            <div class="review-rating-section">
              <label class="rating-label">How would you rate your experience?</label>
              <div class="star-rating" id="starRating">
                <i class="fas fa-star" data-rating="1"></i>
                <i class="fas fa-star" data-rating="2"></i>
                <i class="fas fa-star" data-rating="3"></i>
                <i class="fas fa-star" data-rating="4"></i>
                <i class="fas fa-star" data-rating="5"></i>
              </div>
              <div class="rating-text" id="ratingText">Select a rating</div>
            </div>
            
            <div class="review-form-fields">
              <div class="form-field">
                <label for="reviewName">Your Name*</label>
                <input type="text" id="reviewName" name="name" required placeholder="Enter your name">
              </div>
              
              <div class="form-field">
                <label for="reviewLocation">Location</label>
                <input type="text" id="reviewLocation" name="location" placeholder="City, State">
              </div>
              
              <div class="form-field">
                <label for="reviewService">Service Received</label>
                <select id="reviewService" name="service">
                  <option value="">Select a service</option>
                  <option value="furnace-installation">Furnace Installation</option>
                  <option value="furnace-repair">Furnace Repair</option>
                  <option value="ac-installation">AC Installation</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="duct-cleaning">Duct Cleaning</option>
                  <option value="indoor-air-quality">Indoor Air Quality</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-field">
                <label for="reviewComment">Your Review*</label>
                <textarea id="reviewComment" name="comment" required rows="4" placeholder="Tell us about your experience with our service..."></textarea>
              </div>
              
              <div class="form-field">
                <label for="reviewEmail">Email (optional)</label>
                <input type="email" id="reviewEmail" name="email" placeholder="For follow-up questions">
              </div>
              
              <div class="form-field">
                <label class="consent-checkbox">
                  <input type="checkbox" name="consent" required>
                  <span class="checkbox-custom"></span>
                  <span class="consent-text">I agree to have my review published on our website and marketing materials.</span>
                </label>
              </div>
            </div>
            
            <div class="review-form-actions">
              <button type="button" class="btn btn-secondary" id="reviewFormCancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="reviewFormSubmit">
                <i class="fas fa-paper-plane"></i>
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  init() {
    // Add the review form to the page
    const reviewFormContainer = document.createElement('div');
    reviewFormContainer.id = 'review-form-container';
    reviewFormContainer.innerHTML = this.render();
    document.body.appendChild(reviewFormContainer);

    // Initialize review form functionality
    this.initializeReviewForm();
  }

  initializeReviewForm() {
    const overlay = document.getElementById('reviewFormOverlay');
    const modal = document.getElementById('reviewFormModal');
    const closeBtn = document.getElementById('reviewFormClose');
    const cancelBtn = document.getElementById('reviewFormCancel');
    const form = document.getElementById('reviewForm');
    const starRating = document.getElementById('starRating');
    const ratingText = document.getElementById('ratingText');

    if (!overlay || !modal || !closeBtn || !cancelBtn || !form || !starRating || !ratingText) return;

    // Star rating functionality
    const stars = starRating.querySelectorAll('.fas.fa-star');
    stars.forEach(star => {
      star.addEventListener('click', (e) => {
        const rating = parseInt(e.target.dataset.rating);
        this.setRating(rating);
      });

      star.addEventListener('mouseenter', (e) => {
        const rating = parseInt(e.target.dataset.rating);
        this.highlightStars(rating);
      });
    });

    starRating.addEventListener('mouseleave', () => {
      this.highlightStars(this.currentRating);
    });

    // Close form events
    const closeForm = () => {
      this.isFormOpen = false;
      overlay.classList.remove('show');
      this.resetForm();
    };

    closeBtn.addEventListener('click', closeForm);
    cancelBtn.addEventListener('click', closeForm);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeForm();
      }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleReviewSubmit(form);
    });
  }

  setRating(rating) {
    this.currentRating = rating;
    this.highlightStars(rating);
    this.updateRatingText(rating);
  }

  highlightStars(rating) {
    const stars = document.querySelectorAll('#starRating .fas.fa-star');
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  updateRatingText(rating) {
    const ratingText = document.getElementById('ratingText');
    if (!ratingText) return;

    const ratingMessages = {
      1: 'Poor - We need to improve',
      2: 'Fair - Room for improvement',
      3: 'Good - Satisfactory service',
      4: 'Very Good - Great experience',
      5: 'Excellent - Outstanding service!'
    };

    ratingText.textContent = ratingMessages[rating] || 'Select a rating';
  }

  resetForm() {
    const form = document.getElementById('reviewForm');
    if (form) {
      form.reset();
    }
    this.currentRating = 0;
    this.highlightStars(0);
    this.updateRatingText(0);
  }

  async handleReviewSubmit(form) {
    const submitBtn = document.getElementById('reviewFormSubmit');
    const originalText = submitBtn.innerHTML;

    // Validate rating
    if (this.currentRating === 0) {
      this.showError('Please select a rating');
      return;
    }

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    try {
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Add rating to data
      data.rating = this.currentRating;

      // Send to backend
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        this.showSuccess(result.message);
        this.resetForm();

        // Close form after success
        setTimeout(() => {
          const overlay = document.getElementById('reviewFormOverlay');
          if (overlay) {
            overlay.classList.remove('show');
          }
        }, 2000);
      } else {
        // Show error message
        this.showError(result.message || 'An error occurred. Please try again.');
      }

    } catch (error) {
      console.error('Review submission error:', error);
      this.showError('Network error. Please check your connection and try again.');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  showSuccess(message) {
    const modal = document.getElementById('reviewFormModal');
    if (!modal) return;

    const successDiv = document.createElement('div');
    successDiv.className = 'review-success';
    successDiv.innerHTML = `
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <h4>Thank You!</h4>
        <p>${message}</p>
      </div>
    `;

    modal.appendChild(successDiv);

    // Remove success message after 3 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.parentNode.removeChild(successDiv);
      }
    }, 3000);
  }

  showError(message) {
    const modal = document.getElementById('reviewFormModal');
    if (!modal) return;

    const errorDiv = document.createElement('div');
    errorDiv.className = 'review-error';
    errorDiv.innerHTML = `
      <div class="error-content">
        <i class="fas fa-exclamation-triangle"></i>
        <p>${message}</p>
      </div>
    `;

    modal.appendChild(errorDiv);

    // Remove error message after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 5000);
  }

  open() {
    this.isFormOpen = true;
    const overlay = document.getElementById('reviewFormOverlay');
    if (overlay) {
      overlay.classList.add('show');
    }
  }
}

// Export a function to create and initialize the component
export function createReviewForm() {
  return new ReviewForm();
} 