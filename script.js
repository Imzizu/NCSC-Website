
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.querySelector('.search-button');

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            alert('Search functionality would open here');
        });
    }
    
    // Add staggered animation to sector cards
    const sectorCards = document.querySelectorAll('.sector-card');
    
    if (sectorCards.length) {
        sectorCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
            
            // Add ripple effect on click
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                this.appendChild(ripple);
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${e.clientX - rect.left - size/2}px`;
                ripple.style.top = `${e.clientY - rect.top - size/2}px`;
                
                ripple.classList.add('active');
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Job application functionality
    const jobCards = document.querySelectorAll('.job-card');
    if (jobCards.length) {
        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h2').textContent;
            const applyButton = card.querySelector('.apply-button');
            if (applyButton) {
                const positionValue = jobTitle.toLowerCase().replace(/\s+/g, '-');
                applyButton.href = `form.html?position=${encodeURIComponent(positionValue)}`;
            }
        });
    }

    // Form position selection
    const positionSelect = document.getElementById('position');
    if (positionSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const position = urlParams.get('position');
        if (position) {
            positionSelect.value = position;
        }
    }
});
