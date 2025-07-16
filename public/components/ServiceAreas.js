// Service Areas Component - Streamlined with Embedded Map
// Embracing the Japanese concept of Ma (negative space)

export function createServiceAreas() {
  return `
    <section id="service-areas" class="section bg-white">
      <div class="container">
        <div class="section-header text-center">
          <h2>Serving the Heart of Indiana</h2>
          <p>Proudly providing expert HVAC services throughout the greater Indianapolis metropolitan area</p>
        </div>
        
        <div class="service-area-content">
          <div class="service-area-map">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392927.87744788054!2d-86.56413618859688!3d39.76838320340178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1704750000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Heartland Heating + Air Service Area Map">
              </iframe>
              <div class="map-overlay">
                <div class="service-radius">
                  <i class="fas fa-circle-dot"></i>
                  <span>50+ Mile Service Radius</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="service-area-summary">
            <h3>Comprehensive Coverage</h3>
            <div class="coverage-stats">
              <div class="stat">
                <i class="fas fa-map-marked-alt"></i>
                <strong>50+ Mile Radius</strong>
                <span>from Indianapolis</span>
              </div>
              <div class="stat">
                <i class="fas fa-city"></i>
                <strong>25+ Cities</strong>
                <span>served regularly</span>
              </div>
              <div class="stat">
                <i class="fas fa-clock"></i>
                <strong>24/7 Emergency</strong>
                <span>anywhere in service area</span>
              </div>
            </div>
            
            <div class="primary-areas">
              <h4>Primary Service Areas Include:</h4>
              <div class="area-tags">
                <span class="area-tag">Indianapolis Metro</span>
                <span class="area-tag">Carmel</span>
                <span class="area-tag">Fishers</span>
                <span class="area-tag">Noblesville</span>
                <span class="area-tag">Westfield</span>
                <span class="area-tag">Greenwood</span>
                <span class="area-tag">Avon</span>
                <span class="area-tag">Plainfield</span>
                <button class="show-all-areas" id="showAllAreas">+ View All Areas</button>
              </div>
            </div>
            
            <div class="extended-areas" id="extendedAreas">
              <div class="area-tags">
                <span class="area-tag">Franklin</span>
                <span class="area-tag">Brownsburg</span>
                <span class="area-tag">Lawrence</span>
                <span class="area-tag">Mooresville</span>
                <span class="area-tag">Danville</span>
                <span class="area-tag">Beech Grove</span>
                <span class="area-tag">Speedway</span>
                <span class="area-tag">Zionsville</span>
                <span class="area-tag">McCordsville</span>
                <span class="area-tag">Fortville</span>
                <span class="area-tag">Pendleton</span>
                <span class="area-tag">Greenfield</span>
                <span class="area-tag">Bargersville</span>
                <span class="area-tag">Whiteland</span>
                <span class="area-tag">New Whiteland</span>
                <span class="area-tag">Shelbyville</span>
                <span class="area-tag">Anderson</span>
              </div>
            </div>
            
            <div class="service-area-note">
              <p><strong>Don't see your city?</strong> We serve a 50+ mile radius from Indianapolis. Call us at <a href="tel:+13175550123">(317) 555-0123</a> to confirm service to your area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initServiceAreas() {
  const showAllBtn = document.getElementById('showAllAreas');
  const extendedAreas = document.getElementById('extendedAreas');

  if (showAllBtn && extendedAreas) {
    showAllBtn.addEventListener('click', () => {
      const isExpanded = extendedAreas.classList.contains('show');

      if (isExpanded) {
        extendedAreas.classList.remove('show');
        showAllBtn.textContent = '+ View All Areas';
      } else {
        extendedAreas.classList.add('show');
        showAllBtn.textContent = 'Show Less';
      }
    });
  }
} 