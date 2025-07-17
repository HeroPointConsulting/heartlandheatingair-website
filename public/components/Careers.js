import { careersData } from '../data/careers.js';

// Utility to generate slug from a job title
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function createCareersPage() {
  const { benefits = [], jobOpenings = [], applicationProcess = [] } = careersData;

  const benefitsHtml = benefits.map((benefit, index) => {
    return `
      <div class="career-benefit-card" data-benefit-index="${index}">
        <div class="career-benefit-icon-wrapper">
          <i class="${benefit.icon} career-benefit-icon"></i>
        </div>
        <h3 class="career-benefit-title">${benefit.title}</h3>
        <p class="career-benefit-description">${benefit.description}</p>
      </div>
    `;
  }).join('');

  const openingsHtml = jobOpenings.map((job, index) => {
    const slug = slugify(job.title);

    return `
      <div class="career-opening-card">
        <div class="career-opening-header">
          <h3 class="career-opening-title">${job.title}</h3>
          <div class="career-opening-meta">
            <span class="career-opening-type">${job.type}</span>
            <span class="career-opening-dept">${job.department}</span>
          </div>
          <p class="career-opening-description">${job.description}</p>
          <div class="career-opening-details">
            <span class="career-opening-salary"><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
            <span class="career-opening-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
          </div>
          <a href="/careers/${slug}" class="career-opening-apply" data-route="/careers/${slug}">
            Apply Now
          </a>
        </div>
        <div class="career-opening-details-grid">
          <div class="career-opening-requirements">
            <h4 class="career-opening-subtitle">Requirements:</h4>
            <ul>
              ${job.requirements.map(req => `<li><i class="fas fa-check"></i>${req}</li>`).join('')}
            </ul>
          </div>
          <div class="career-opening-responsibilities">
            <h4 class="career-opening-subtitle">Responsibilities:</h4>
            <ul>
              ${job.responsibilities.map(resp => `<li><i class="fas fa-check"></i>${resp}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const processHtml = applicationProcess.map(step => {
    return `
      <div class="career-process-step text-center">
        <div class="career-process-number ${step.color}">${step.step}</div>
        <h3 class="career-process-title">${step.title}</h3>
        <p class="career-process-description">${step.description}</p>
      </div>
    `;
  }).join('');

  return `
    <div class="careers-page">
      <!-- Hero Section -->
      <section class="careers-hero">
        <div class="careers-hero-container">
          <h1 class="careers-hero-title">Join Our Team</h1>
          <p class="careers-hero-subtitle">
            Be part of a dynamic team that's passionate about providing exceptional HVAC services and keeping our community comfortable year-round. Discover your next career opportunity with Heartland Heating + Air.
          </p>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="careers-benefits-section">
        <div class="careers-benefits-container">
          <h2 class="careers-section-title text-center">Why Work at Heartland Heating + Air?</h2>
          <p class="careers-section-subtitle text-center">
            We believe in investing in our team members and creating an environment where everyone can thrive and grow.
          </p>
          <div class="careers-benefits-grid">
            ${benefitsHtml}
          </div>
        </div>
      </section>

      <!-- Openings Section -->
      <section class="careers-openings-section">
        <div class="careers-openings-container">
          <h2 class="careers-section-title text-center">Current Openings</h2>
          <p class="careers-section-subtitle text-center">
            Explore our available positions and find your perfect fit in the HVAC industry.
          </p>
          <div class="careers-openings-list">
            ${openingsHtml}
          </div>
        </div>
      </section>

      <!-- Application Process -->
      <section class="careers-process-section">
        <div class="careers-process-container">
          <div class="careers-process-header">
            <h2 class="careers-section-title">Application Process</h2>
            <p class="careers-section-subtitle">
              Our hiring process is designed to be thorough yet efficient, ensuring the best fit for both our team and candidates.
            </p>
          </div>
          <div class="careers-process-grid">
            ${processHtml}
          </div>
        </div>
      </section>

      <!-- General Application CTA -->
      <section class="careers-cta-section">
        <div class="careers-cta-container text-center">
          <h2 class="careers-cta-title">Don't See the Right Position?</h2>
          <p class="careers-cta-subtitle">We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <a href="/careers/general-application" class="careers-cta-button" data-route="/careers/general-application">
            Send Resume
          </a>
        </div>
      </section>
    </div>
  `;
}

export function initCareersPage() {
  // Simple hover effect for benefit cards
  const benefitCards = document.querySelectorAll('.career-benefit-card');
  benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });

  // Debug: Log all career links
  const careerLinks = document.querySelectorAll('.career-opening-apply');
  careerLinks.forEach(link => {

    // Add click event listener for client-side routing
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');

      // Update browser URL without page reload
      window.history.pushState({}, '', route);

      // Trigger the careers page initialization to load job detail
      const pathParts = route.split('/');
      const jobSlug = pathParts[pathParts.length - 1];

      // Load the job detail page
      const mainContent = document.querySelector('main');
      if (mainContent) {
        import('./JobDetail.js').then(({ createJobDetailPage, initJobDetailPage }) => {
          mainContent.innerHTML = createJobDetailPage(jobSlug);
          initJobDetailPage();
        }).catch(error => {
          console.error('Error loading job detail page:', error);
        });
      }
    });
  });
} 