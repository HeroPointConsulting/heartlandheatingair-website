export function createGeneralApplicationPage() {
  return `
    <div class="general-application-page">
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
          <h1 class="job-hero-title">General Application</h1>
          <p class="job-hero-description">
            Don't see the perfect position for you? We're always looking for talented individuals to join our team. 
            Submit your resume and we'll keep you in mind for future opportunities.
          </p>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="job-apply-section" id="apply">
        <div class="job-apply-container">
          <h2 class="job-apply-title">Submit Your Resume</h2>
          <form id="general-application-form" class="job-apply-form">
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
                <label class="job-input-label" for="desiredPosition">Desired Position/Department</label>
                <select name="desiredPosition" id="desiredPosition">
                  <option value="">Select a position</option>
                  <option value="hvac-technician">HVAC Service Technician</option>
                  <option value="hvac-installer">HVAC Installer</option>
                  <option value="maintenance-technician">Maintenance Technician</option>
                  <option value="customer-service">Customer Service Representative</option>
                  <option value="sales-representative">Sales Representative</option>
                  <option value="office-administrator">Office Administrator</option>
                  <option value="other">Other (specify below)</option>
                </select>
              </div>

              <div class="job-field">
                <label class="job-input-label" for="otherPosition">Other Position (if selected above)</label>
                <input type="text" name="otherPosition" id="otherPosition" placeholder="Please specify..." />
              </div>

              <div class="job-field">
                <label class="job-input-label" for="previousExperience">Previous Experience</label>
                <textarea name="previousExperience" id="previousExperience" rows="4" placeholder="Describe your previous work experience, especially in HVAC or related fields..."></textarea>
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
                <textarea name="certifications" id="certifications" rows="3" placeholder="List any relevant certifications, licenses, or credentials..."></textarea>
              </div>

              <div class="job-field">
                <label class="job-input-label" for="referralSource">How did you hear about us?</label>
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

              <div class="job-field">
                <label class="job-input-label" for="additionalInfo">Additional Information</label>
                <textarea name="additionalInfo" id="additionalInfo" rows="3" placeholder="Any additional information you'd like us to know..."></textarea>
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
              <p>We've received your resume and will keep it on file for future opportunities. Our team will contact you if a suitable position becomes available.</p>
              <a href="/careers" data-route="/careers" class="back-to-careers">Back to Careers</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initGeneralApplicationPage() {
  // Form submission handler
  const form = document.getElementById('general-application-form');
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
        // Get form data
        const formData = new FormData(form);
        const data = {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          address: formData.get('address'),
          city: formData.get('city'),
          state: formData.get('state'),
          zipCode: formData.get('zipCode'),
          desiredPosition: formData.get('desiredPosition'),
          otherPosition: formData.get('otherPosition'),
          previousExperience: formData.get('previousExperience'),
          availableStartDate: formData.get('availableStartDate'),
          salaryExpectation: formData.get('salaryExpectation'),
          certifications: formData.get('certifications'),
          referralSource: formData.get('referralSource'),
          additionalInfo: formData.get('additionalInfo'),
          position: 'General Application',
          recaptchaResponse: recaptchaResponse
        };

        // Send to server
        const response = await fetch('/api/job-application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
          // Hide form and show success message
          form.classList.add('hidden');
          const successMsg = document.querySelector('.job-apply-success');
          if (successMsg) successMsg.classList.remove('hidden');
        } else {
          throw new Error(result.message || 'Submission failed');
        }

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

  // Handle "Other" position selection
  const desiredPositionSelect = document.getElementById('desiredPosition');
  const otherPositionField = document.getElementById('otherPosition');

  if (desiredPositionSelect && otherPositionField) {
    desiredPositionSelect.addEventListener('change', (e) => {
      if (e.target.value === 'other') {
        otherPositionField.style.display = 'block';
        otherPositionField.required = true;
      } else {
        otherPositionField.style.display = 'none';
        otherPositionField.required = false;
        otherPositionField.value = '';
      }
    });
  }
} 