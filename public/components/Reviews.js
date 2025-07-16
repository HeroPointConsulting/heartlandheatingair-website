// Reviews Component - Testimonial Carousel with Google Rating
// Clean, minimal implementation following Myers-Vanilla Pattern

import { getFeaturedTestimonials, getRatingData } from '../data/testimonials.js';

let currentSlide = 0;
let autoScrollInterval = null;
let isTransitioning = false;

export function createReviews() {
  const featuredTestimonials = getFeaturedTestimonials(12);
  const ratingData = getRatingData();

  return `
    <section id="reviews" class="reviews-section">
      <div class="container">
        <div class="reviews-grid">
          <!-- Google Rating -->
          <div class="google-rating">
            <div class="google-badge">
              <i class="fab fa-google"></i>
              <span>Google</span>
            </div>
            <div class="rating-display">
              <span class="rating-number">${ratingData.rating}</span>
              <div class="rating-stars">
                ${generateStars(ratingData.rating)}
              </div>
            </div>
            <span class="rating-subtitle">${ratingData.reviews_text}</span>
          </div>
          
          <!-- Testimonial Area -->
          <div class="testimonial-area">
            <div class="testimonial-wrapper">
              ${featuredTestimonials.map((testimonial, index) => `
                <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
                  <p>"${testimonial.text}"</p>
                  <span class="author">${testimonial.author_name}, ${testimonial.location}</span>
                </div>
              `).join('')}
            </div>
            
            <div class="testimonial-nav">
              <div class="nav-dots">
                ${featuredTestimonials.map((_, index) => `
                  <button class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        
        <div class="reviews-cta">
          <a href="#schedule" class="cta-button">Schedule Service</a>
          <a href="https://g.page/r/CQfKjB6VHxWXEB0/review" target="_blank" rel="noopener" class="more-reviews-button">
            <i class="fab fa-google"></i>
            Read All Reviews
          </a>
          <a href="https://g.page/r/CQfKjB6VHxWXEB0/review" target="_blank" rel="noopener" class="leave-review-button">
            <i class="fas fa-star"></i>
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  `;
}

// Helper function to generate star ratings
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = '';

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }

  // Half star
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars to make 5 total
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

export function initReviews() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const wrapper = document.querySelector('.testimonial-wrapper');

  if (!slides.length || !dots.length) return;

  function showSlide(index) {
    if (isTransitioning) return;

    isTransitioning = true;

    // Remove active classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active to current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;

    setTimeout(() => isTransitioning = false, 800);
  }

  function nextSlide() {
    if (isTransitioning) return;
    showSlide((currentSlide + 1) % slides.length);
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoScroll();
      showSlide(index);
      startAutoScroll();
    });
  });

  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoScroll);
    wrapper.addEventListener('mouseleave', startAutoScroll);
  }

  // Initialize
  showSlide(0);
  setTimeout(startAutoScroll, 1000);
} 