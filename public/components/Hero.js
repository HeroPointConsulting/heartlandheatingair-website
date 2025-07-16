let currentSlide = 0;
let slideshowInterval = null;
let touchStartX = 0;
let touchEndX = 0;

export function createHero() {
  return `
    <section class="hero">
      <div class="hero-background">
        <!-- Video for largest screens only -->
        <video class="hero-video" autoplay muted loop playsinline>
          <source src="video/hha_hero_video - Made with Clipchamp.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        
        <!-- Slideshow for smaller screens -->
        <div class="hero-slideshow">
          <div class="slide active">
            <img src="img/slideshow-1.png" alt="Professional HVAC Installation">
          </div>
          <div class="slide">
            <img src="img/slideshow-2.png" alt="24/7 Emergency Service">
          </div>
          <div class="slide">
            <img src="img/slideshow-3.png" alt="Midwest Comfort Experts">
          </div>
          <div class="slide">
            <img src="img/slideshow-4.png" alt="Neighborly Service">
          </div>
          
          <!-- Slideshow controls -->
          <div class="slideshow-nav">
            <button class="slide-btn active" data-slide="0" aria-label="Show slide 1"></button>
            <button class="slide-btn" data-slide="1" aria-label="Show slide 2"></button>
            <button class="slide-btn" data-slide="2" aria-label="Show slide 3"></button>
            <button class="slide-btn" data-slide="3" aria-label="Show slide 4"></button>
          </div>
        </div>
        
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-layout">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-headline">
              Comfort You Can Count On
            </h1>
            <div class="hero-meta">
              <p class="hero-subtitle">
                American-Made, Midwestern Craftsmanship
              </p>
              <p class="hero-tagline">
                24/7 Emergency Service • Licensed & Insured<br>Google Guaranteed
              </p>
            </div>
          </div>
          
          <div class="hero-actions">
            <a href="tel:+13175550123" class="btn btn-secondary btn-hero">
              Call Now: (317) 555-0123
            </a>
            <a href="#services" class="btn btn-outline btn-hero">
              Residential & Commercial
            </a>
            <div class="hero-location">
              <span>Serving Indianapolis & Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  const slideshow = document.querySelector('.hero-slideshow');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slide');
  const navButtons = slideshow.querySelectorAll('.slide-btn');

  // Ensure we have slides to work with
  if (slides.length === 0) return;

  // Setup event listeners
  setupHeroEventListeners(slideshow, slides, navButtons);

  // Start slideshow
  startHeroSlideshow(slides, navButtons);
}

function setupHeroEventListeners(slideshow, slides, navButtons) {
  // Navigation button clicks
  navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stopHeroSlideshow();
      showHeroSlide(index, slides, navButtons);
      // Restart slideshow after manual interaction
      setTimeout(() => startHeroSlideshow(slides, navButtons), 5000);
    });
  });

  // Pause slideshow on hover
  slideshow.addEventListener('mouseenter', () => stopHeroSlideshow());
  slideshow.addEventListener('mouseleave', () => startHeroSlideshow(slides, navButtons));

  // Touch events for mobile
  slideshow.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopHeroSlideshow();
  });

  slideshow.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleHeroSwipe(slides, navButtons);
    // Restart slideshow after swipe
    setTimeout(() => startHeroSlideshow(slides, navButtons), 5000);
  });
}

function showHeroSlide(index, slides, navButtons) {
  // Ensure index is within bounds
  if (index < 0 || index >= slides.length) return;

  // Remove active class from all slides and buttons
  slides.forEach(slide => slide.classList.remove('active'));
  navButtons.forEach(btn => btn.classList.remove('active'));

  // Add active class to current slide and button
  slides[index].classList.add('active');
  if (navButtons[index]) {
    navButtons[index].classList.add('active');
  }

  currentSlide = index;
}

function nextHeroSlide(slides, navButtons) {
  const next = (currentSlide + 1) % slides.length;
  showHeroSlide(next, slides, navButtons);
}

function prevHeroSlide(slides, navButtons) {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showHeroSlide(prev, slides, navButtons);
}

function startHeroSlideshow(slides, navButtons) {
  slideshowInterval = setInterval(() => nextHeroSlide(slides, navButtons), 6000); // 6 seconds for comfortable viewing
}

function stopHeroSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
}

function handleHeroSwipe(slides, navButtons) {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      nextHeroSlide(slides, navButtons);
    } else {
      // Swipe right - previous slide
      prevHeroSlide(slides, navButtons);
    }
  }
}

export function destroyHero() {
  stopHeroSlideshow();

  // Reset state
  currentSlide = 0;
  touchStartX = 0;
  touchEndX = 0;
} 