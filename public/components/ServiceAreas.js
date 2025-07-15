// Service Areas Component - Minimalist Enhancement
// Embracing the Japanese concept of Ma (negative space)

export function createServiceAreas() {
  return `
    <section class="service-areas-banner">
      <div class="container">
        <h2>Serving the Greater Indianapolis Area</h2>
        <div class="service-cities">
          <span class="city">Indianapolis</span>
          <span class="city">Carmel</span>
          <span class="city">Fishers</span>
          <span class="city">Greenwood</span>
          <span class="city">Noblesville</span>
          <span class="city">Zionsville</span>
          <span class="city">Westfield</span>
          <span class="city">Brownsburg</span>
          <span class="city">Avon</span>
          <span class="city">Plainfield</span>
          <button class="city-more" id="showMore">+ 15 More Cities</button>
        </div>
        <div class="extended-cities" id="extendedCities">
          <span class="city">Lawrence</span>
          <span class="city">Beech Grove</span>
          <span class="city">Speedway</span>
          <span class="city">Franklin</span>
          <span class="city">Mooresville</span>
          <span class="city">Danville</span>
          <span class="city">Shelbyville</span>
          <span class="city">Anderson</span>
          <span class="city">Muncie</span>
          <span class="city">Columbus</span>
          <span class="city">Greenfield</span>
          <span class="city">McCordsville</span>
          <span class="city">Pendleton</span>
          <span class="city">Fortville</span>
          <span class="city">Bargersville</span>
        </div>
      </div>
    </section>
  `;
}

export function initServiceAreas() {
  const showMoreBtn = document.getElementById('showMore');
  const extendedCities = document.getElementById('extendedCities');

  if (showMoreBtn && extendedCities) {
    showMoreBtn.addEventListener('click', () => {
      const isExpanded = extendedCities.classList.contains('show');

      if (isExpanded) {
        extendedCities.classList.remove('show');
        showMoreBtn.textContent = '+ 15 More Cities';
      } else {
        extendedCities.classList.add('show');
        showMoreBtn.textContent = 'Show Less';
      }
    });
  }

  console.log('Service Areas component initialized');
} 