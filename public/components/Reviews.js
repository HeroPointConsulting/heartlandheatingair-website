// Reviews Component - Testimonial Carousel with Google Rating
// Clean, minimal implementation following Myers-Vanilla Pattern

let currentSlide = 0;
let autoScrollInterval = null;
let isTransitioning = false;

export function createReviews() {
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
              <span class="rating-number">4.9</span>
              <div class="rating-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <span class="rating-subtitle">150+ verified reviews</span>
          </div>
          
          <!-- Testimonial Area -->
          <div class="testimonial-area">
            <div class="testimonial-wrapper">
              <div class="testimonial-slide active">
                <p>"Heartland fixed our furnace in the middle of a blizzard – within two hours of calling! Professional, knowledgeable, and fair pricing. We won't call anyone else."</p>
                <span class="author">Sarah M., Indianapolis</span>
              </div>
              
              <div class="testimonial-slide">
                <p>"Outstanding service from start to finish. They installed our new AC system quickly and efficiently, cleaned up everything, and the price was very competitive. True Midwestern hospitality."</p>
                <span class="author">Mike R., Carmel</span>
              </div>
              
              <div class="testimonial-slide">
                <p>"We've been using Heartland for our property management company for 3 years. They're reliable, honest, and always provide excellent service to our tenants. Highly recommend."</p>
                <span class="author">Jennifer L., Fishers</span>
              </div>
              
              <div class="testimonial-slide">
                <p>"Emergency repair on Sunday morning - they actually answered and had someone here within an hour. The technician was courteous and got our heat working perfectly."</p>
                <span class="author">Robert K., Westfield</span>
              </div>
            </div>
            
            <div class="testimonial-nav">
              <div class="nav-dots">
                <button class="dot active" data-slide="0"></button>
                <button class="dot" data-slide="1"></button>
                <button class="dot" data-slide="2"></button>
                <button class="dot" data-slide="3"></button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="reviews-cta">
          <a href="#schedule" class="cta-button">Schedule Service</a>
          <a href="https://g.page/r/CQfKjB6VHxWXEB0/review" target="_blank" class="more-reviews-button">
            <i class="fab fa-google"></i>
            More Reviews
          </a>
        </div>
      </div>
    </section>
  `;
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