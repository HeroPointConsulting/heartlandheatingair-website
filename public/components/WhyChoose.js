// WhyChoose Component for Heartland Heating & Air
// Trust signals and value propositions section

export function createWhyChoose() {
  const reasons = [
    {
      id: 'midwest-values',
      icon: 'fas fa-flag-usa',
      title: 'Midwest Values',
      description: 'Born and raised in the heartland, we understand the importance of treating customers like neighbors and standing behind our work.'
    },
    {
      id: 'expert-craftsmanship',
      icon: 'fas fa-award',
      title: 'Expert Craftsmanship',
      description: 'NATE-certified technicians with decades of combined experience. We prefer American-made equipment and back our work with comprehensive warranties.'
    },
    {
      id: 'reliable-service',
      icon: 'fas fa-clock',
      title: 'Reliable Service',
      description: 'When you need us, we\'re there. 24/7 emergency response, on-time appointments, and upfront pricing you can trust.'
    },
    {
      id: 'google-guaranteed',
      icon: 'fas fa-shield-alt',
      title: 'Google Guaranteed',
      description: 'Fully licensed, bonded, and insured. Background-checked technicians you can trust in your home and business.'
    }
  ];

  return `
    <section class="section bg-white">
      <div class="container">
        <div class="section-header text-center">
          <h2>Why Midwest Families Trust Heartland</h2>
          <p>American craftsmanship meets neighborly service in everything we do</p>
        </div>
        <div class="why-choose-grid">
          ${reasons.map(reason => `
            <div class="why-choose-card" data-reason="${reason.id}">
              <div class="why-icon">
                <i class="${reason.icon}"></i>
              </div>
              <h3>${reason.title}</h3>
              <p>${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initWhyChoose() {
  // Add hover animations to cards
  const whyChooseCards = document.querySelectorAll('.why-choose-card');

  whyChooseCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add intersection observer for scroll animations
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    whyChooseCards.forEach((card, index) => {
      // Initial state for animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

      observer.observe(card);
    });
  }
} 