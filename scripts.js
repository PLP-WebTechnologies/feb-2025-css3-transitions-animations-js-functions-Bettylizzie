document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('preferredTheme');
    const feedbackMessage = document.querySelector('.feedback-message');
    
    if (savedTheme) {
        // Apply the saved theme
        document.body.className = savedTheme + '-theme';
        
        // Highlight the selected button
        const selectedBtn = document.querySelector(`[data-theme="${savedTheme}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected-theme');
        }
    }
    
    // Set up event listeners for theme buttons
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove existing selected-theme classes
            themeButtons.forEach(btn => {
                btn.classList.remove('selected-theme');
            });
            
            // Add to clicked button
            this.classList.add('selected-theme');
            
            // Change the body class
            document.body.className = theme + '-theme';
            
            // Save to localStorage
            localStorage.setItem('preferredTheme', theme);
            
            // Show feedback
            feedbackMessage.classList.add('show-feedback');
            
            // Hide feedback after delay
            setTimeout(() => {
                feedbackMessage.classList.remove('show-feedback');
            }, 2000);
            
            // Animate decorations
            const decorations = document.querySelectorAll('.decoration');
            decorations.forEach(dec => {
                dec.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    dec.style.transform = 'scale(1)';
                }, 800);
            });
        });
    });
    
    // Initial animation
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
    }, 100);
});