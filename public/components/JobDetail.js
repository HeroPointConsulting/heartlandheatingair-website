import { getJobBySlug } from '../data/careers.js';

// Utility to generate slug from a job title
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function createJobDetailPage(slug) {
  const job = getJobBySlug(slug);

  if (!job) {
    return `
      <div class="job-not-found">
        <div class="job-not-found-container text-center">
          <h1>Position Not Found</h1>
          <p>The career opportunity you're looking for doesn't exist.</p>
          <a href="/careers" data-route="/careers" class="job-back-link">Back to Careers</a>
        </div>
      </div>
    `;
  }

  const requirementsHtml = job.requirements.map(req => `
    <li class="job-requirement-item"><i class="fas fa-check"></i>${req}</li>
  `).join('');

  const responsibilitiesHtml = job.responsibilities.map(resp => `
    <li class="job-responsibility-item"><i class="fas fa-check"></i>${resp}</li>
  `).join('');

  return `
    <div class="job-detail-page">
      <!-- Navigation -->
      <div class="job-detail-nav">
        <a href="/careers" data-route="/careers" class="job-back-link">
          <i class="fas fa-arrow-left"></i>
          Back to Careers
        </a>
      </div>

      <!-- Hero Section -->
      <section class="job-hero">
        <div class="job-hero-container">
          <h1 class="job-hero-title">${job.title}</h1>
          <p class="job-hero-description">${job.description}</p>

          <div class="job-hero-meta">
            <div class="job-hero-info">
              <span class="job-hero-type"><i class="fas fa-briefcase"></i> ${job.type}</span>
              <span class="job-hero-dept"><i class="fas fa-building"></i> ${job.department}</span>
              <span class="job-hero-salary"><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
              <span class="job-hero-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Job Details Section -->
      <section class="job-details-section">
        <div class="job-details-container">
          <div class="job-details-grid">
            <div class="job-requirements">
              <h3 class="job-details-subtitle">Requirements</h3>
              <ul>
                ${job.requirements.map(req => `<li><i class="fas fa-check"></i>${req}</li>`).join('')}
              </ul>
            </div>
            <div class="job-responsibilities">
              <h3 class="job-details-subtitle">Responsibilities</h3>
              <ul>
                ${job.responsibilities.map(resp => `<li><i class="fas fa-check"></i>${resp}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="job-apply-section" id="apply">
        <div class="job-apply-container">
          <h2 class="job-apply-title">Apply for ${job.title}</h2>
          <form id="job-application-form" class="job-apply-form">
            <!-- Personal Information -->
            <div class="job-form-grid">
              <div class="job-field">
                <label class="job-input-label">First Name <span class="required">*</span></label>
                <input type="text" name="firstName" required />
              </div>
              <div class="job-field">
                <label class="job-input-label">Last Name <span class="required">*</span></label>
                <input type="text" name="lastName" required />
              </div>
              <div class="job-field">
                <label class="job-input-label">Email Address <span class="required">*</span></label>
                <input type="email" name="email" required />
              </div>
              <div class="job-field">
                <label class="job-input-label">Phone Number <span class="required">*</span></label>
                <input type="tel" name="phone" required />
              </div>
              <div class="job-field">
                <label class="job-input-label">Address</label>
                <input type="text" name="address" />
              </div>
              <div class="job-field">
                <label class="job-input-label">City</label>
                <input type="text" name="city" />
              </div>
              <div class="job-field">
                <label class="job-input-label">State</label>
                <input type="text" name="state" />
              </div>
              <div class="job-field">
                <label class="job-input-label">ZIP Code</label>
                <input type="text" name="zipCode" />
              </div>
            </div>

            <!-- Professional Information -->
            <div class="job-form-section">
              <h3 class="job-form-section-title">Professional Information</h3>
              
              <div class="job-field">
                <label class="job-input-label" for="previousExperience">Previous HVAC Experience</label>
                <textarea name="previousExperience" id="previousExperience" rows="4" placeholder="Describe your previous experience in the HVAC industry..."></textarea>
              </div>

              <div class="job-form-grid">
                <div class="job-field">
                  <label class="job-input-label">Available Start Date</label>
                  <input type="date" name="availableStartDate" />
                </div>
                <div class="job-field">
                  <label class="job-input-label">Salary Expectation</label>
                  <input type="text" name="salaryExpectation" placeholder="e.g., $45,000 - $55,000" />
                </div>
              </div>

              <div class="job-field">
                <label class="job-input-label" for="certifications">Certifications & Licenses</label>
                <textarea name="certifications" id="certifications" rows="3" placeholder="List any HVAC certifications, EPA licenses, or other relevant credentials..."></textarea>
              </div>

              <div class="job-field">
                <label class="job-input-label" for="referralSource">How did you hear about this position?</label>
                <select name="referralSource" id="referralSource">
                  <option value="">Select an option</option>
                  <option value="website">Company Website</option>
                  <option value="indeed">Indeed</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="glassdoor">Glassdoor</option>
                  <option value="referral">Employee Referral</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <!-- Documents -->
            <div class="job-form-section">
              <h3 class="job-form-section-title">Documents</h3>
              <div class="job-form-grid">
                <div class="job-file-field">
                  <label class="job-file-label">Resume <span class="required">*</span></label>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                  <small class="job-file-help">Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                </div>
                <div class="job-file-field">
                  <label class="job-file-label">Cover Letter</label>
                  <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" />
                  <small class="job-file-help">Optional - Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                </div>
                <div class="job-file-field">
                  <label class="job-file-label">Supporting Documents</label>
                  <input type="file" name="supportingDocs" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" multiple />
                  <small class="job-file-help">Certificates, licenses, references, etc. (Max 10MB total)</small>
                </div>
              </div>
            </div>

            <!-- reCAPTCHA -->
            <div class="job-form-section">
              <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"></div>
              <small class="recaptcha-help">Please complete the reCAPTCHA to verify you're human.</small>
            </div>

            <button type="submit" class="job-apply-submit">Submit Application</button>
          </form>
          <div class="job-apply-success hidden">
            <div class="success-message">
              <i class="fas fa-check-circle"></i>
              <h3>Thank you for your application!</h3>
              <p>We've received your application for the ${job.title} position. Our team will review your information and contact you within 3-5 business days if we'd like to move forward with your candidacy.</p>
              <a href="/careers" data-route="/careers" class="back-to-careers">Back to Careers</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initJobDetailPage() {
  // Form submission handler
  const form = document.getElementById('job-application-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Check if reCAPTCHA is completed
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA verification.');
        return;
      }

      // Show loading state
      const submitButton = form.querySelector('.job-apply-submit');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;

      try {
        // Here you would typically send the form data to your server
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Hide form and show success message
        form.classList.add('hidden');
        const successMsg = document.querySelector('.job-apply-success');
        if (successMsg) successMsg.classList.remove('hidden');

      } catch (error) {
        console.error('Error submitting application:', error);
        alert('There was an error submitting your application. Please try again.');

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }

  // File size validation
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size must be less than 5MB. Please choose a smaller file.');
        e.target.value = '';
      }
    });
  });
} 