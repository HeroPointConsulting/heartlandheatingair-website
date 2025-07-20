// FloatingButtons Component
// Handles emergency call button and interactive chat widget

export class FloatingButtons {
  constructor() {
    this.isChatOpen = false;
    this.init();
  }

  render() {
    return `
      <!-- Emergency Floating Button -->
      <a href="tel:+13175550123" class="floating-emergency">
        <i class="fas fa-phone"></i>
        <span>24/7 Emergency</span>
      </a>

      <!-- Interactive Chat Widget -->
      <div class="chat-widget">
        <div class="chat-toggle" id="chatToggle">
          <i class="fas fa-comments"></i>
          <span class="chat-badge">1</span>
        </div>
        
        <div class="chat-popup" id="chatPopup">
          <div class="chat-header">
            <div class="chat-company">
              <i class="fas fa-house-chimney-window"></i>
              <span>Heartland Heating + Air</span>
            </div>
            <button class="chat-close" id="chatClose">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="chat-content">
            <div class="chat-greeting">
              <div class="greeting-avatar">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="greeting-text">
                <h4>Hi! How can we help you today?</h4>
                <p>Choose an option below to get started:</p>
              </div>
            </div>
            
            <div class="chat-options">
              <a href="#schedule" class="chat-option">
                <i class="fas fa-calendar-check"></i>
                <span>Schedule Service</span>
              </a>
              <a href="tel:+13175550123" class="chat-option">
                <i class="fas fa-phone"></i>
                <span>Call Now</span>
              </a>
              <a href="/contact.html" class="chat-option">
                <i class="fas fa-envelope"></i>
                <span>Send Message</span>
              </a>
              <a href="#reviews" class="chat-option">
                <i class="fas fa-star"></i>
                <span>Leave Review</span>
              </a>
            </div>
            
            <div class="chat-hours">
              <p><strong>Available 24/7</strong> for emergencies</p>
              <p>Business hours: Mon-Fri 7AM-7PM</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init() {
    // Add the floating buttons to the page
    const floatingButtonsContainer = document.createElement('div');
    floatingButtonsContainer.id = 'floating-buttons-container';
    floatingButtonsContainer.innerHTML = this.render();
    document.body.appendChild(floatingButtonsContainer);

    // Initialize chat widget functionality
    this.initializeChatWidget();
  }

  initializeChatWidget() {
    const chatToggle = document.getElementById('chatToggle');
    const chatPopup = document.getElementById('chatPopup');
    const chatClose = document.getElementById('chatClose');

    if (chatToggle && chatPopup && chatClose) {
      // Toggle chat popup
      chatToggle.addEventListener('click', () => {
        this.isChatOpen = !this.isChatOpen;
        chatPopup.classList.toggle('show', this.isChatOpen);
      });

      // Close chat popup
      chatClose.addEventListener('click', () => {
        this.isChatOpen = false;
        chatPopup.classList.remove('show');
      });

      // Close chat when clicking outside
      document.addEventListener('click', (e) => {
        if (this.isChatOpen &&
          !chatPopup.contains(e.target) &&
          !chatToggle.contains(e.target)) {
          this.isChatOpen = false;
          chatPopup.classList.remove('show');
        }
      });

      // Handle chat option clicks
      const chatOptions = document.querySelectorAll('.chat-option');
      chatOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          // Close chat after option selection
          setTimeout(() => {
            this.isChatOpen = false;
            chatPopup.classList.remove('show');
          }, 100);
        });
      });
    }
  }

  // Method to update chat options based on page context
  updateChatOptions(options) {
    const chatOptionsContainer = document.querySelector('.chat-options');
    if (chatOptionsContainer && options) {
      chatOptionsContainer.innerHTML = options;
      // Re-attach event listeners to new options
      this.initializeChatWidget();
    }
  }
}

// Export a function to create and initialize the component
export function createFloatingButtons() {
  return new FloatingButtons();
} 