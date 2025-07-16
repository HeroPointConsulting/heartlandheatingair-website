export function createAboutComponent() {
  return `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-intro">
          <div class="section-badge">
            <i class="fas fa-flag-usa"></i>
            <span>American Values</span>
          </div>
          <h2>Meet Forrest Landis</h2>
          <p class="about-subtitle">Founder & Lead Technician</p>
        </div>

        <div class="about-main">
          <div class="about-story">
            <div class="story-content">
              <p class="story-lead">
                <strong>Born and raised in America's heartland,</strong> I founded Heartland Heating + Air on the values that built this nation: hard work, honest dealing, and treating every customer like family.
              </p>
              
              <p>
                With 20+ years of experience and NATE certification, I believe in American-made equipment and standing behind every job with our satisfaction guarantee. We serve the entire Midwest region, from single-family homes to multi-property portfolios and commercial projects.
              </p>

              <button class="story-video-btn" id="playStoryVideo">
                <i class="fas fa-play"></i>
                Watch Our Story
              </button>
            </div>

            <div class="credentials-inline">
              <div class="credential-group">
                <h3>Trusted Expertise</h3>
                <div class="credential-list">
                  <div class="credential">
                    <i class="fas fa-certificate"></i>
                    <span><strong>NATE Certified</strong> • Industry-leading certification</span>
                  </div>
                  <div class="credential">
                    <i class="fas fa-shield-alt"></i>
                    <span><strong>Licensed & Insured</strong> • Complete protection</span>
                  </div>
                  <div class="credential">
                    <i class="fas fa-users"></i>
                    <span><strong>Local Team</strong> • Veterans & community members</span>
                  </div>
                  <div class="credential">
                    <i class="fas fa-flag-usa"></i>
                    <span><strong>American Equipment</strong> • Carrier • Trane • Lennox</span>
                  </div>
                  <div class="credential">
                    <i class="fas fa-map-marked-alt"></i>
                    <span><strong>Midwest Regional</strong> • Multi-state service coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-cta">
          <div class="cta-content">
            <h3>Ready for the Heartland Difference?</h3>
            <div class="cta-actions">
              <a href="#schedule" class="btn btn-primary">
                <i class="fas fa-calendar-check"></i>
                Schedule Service
              </a>
              <a href="tel:+13175550123" class="btn btn-secondary">
                <i class="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Story Modal -->
      <div class="story-modal" id="storyModal">
        <div class="story-modal-content">
          <button class="story-close" id="storyClose">
            <i class="fas fa-times"></i>
          </button>
          <div class="story-video-container">
            <div class="story-video-player">
              <video 
                id="storyVideo"
                width="100%" 
                height="240"
                controls
                preload="metadata"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                <p>Your browser doesn't support HTML5 video. <a href="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">Download the video</a> instead.</p>
              </video>
            </div>
          </div>
          <div class="story-content">
            <h3>Why We Do What We Do</h3>
            <blockquote>
              "Growing up in the heartland, I learned that your word is your bond and your neighbors are your family. 
              When I started Heartland Heating + Air, I wanted to bring those same values to every home and business we serve."
            </blockquote>
            <div class="story-signature">
              <span>- Forrest Landis, Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initAboutComponent() {
  setTimeout(() => {
    const playButton = document.getElementById('playStoryVideo');
    const storyModal = document.getElementById('storyModal');
    const closeButton = document.getElementById('storyClose');
    const video = document.getElementById('storyVideo');

    if (playButton && storyModal) {
      playButton.addEventListener('click', (e) => {
        e.preventDefault();
        storyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeButton && storyModal) {
      closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        storyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }

    // Close modal when clicking outside
    if (storyModal) {
      storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) {
          storyModal.classList.remove('active');
          document.body.style.overflow = 'auto';
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && storyModal && storyModal.classList.contains('active')) {
        storyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, 100);
} 