document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.querySelector('header button');
    const sidebar = document.querySelector('aside');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('fixed');
            sidebar.classList.toggle('z-50');
            sidebar.classList.toggle('top-0');
            sidebar.classList.toggle('left-0');
            sidebar.classList.toggle('h-full');
            sidebar.classList.toggle('w-64');
            
            // Toggle overlay
            if (overlay) {
                overlay.classList.toggle('hidden');
            }
        });
    }

    // Close sidebar when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('fixed', 'z-50', 'top-0', 'left-0', 'h-full', 'w-64');
            overlay.classList.add('hidden');
        });
    }

    // Game cards hover effect
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('transform', 'scale-105', 'transition-all', 'duration-200');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('transform', 'scale-105');
        });
    });

    // Implement tabs for content sections
    const tabs = document.querySelectorAll('.sidebar-item');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide sidebar on mobile after clicking a tab
            if (window.innerWidth < 768) {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('fixed', 'z-50', 'top-0', 'left-0', 'h-full', 'w-64');
                if (overlay) {
                    overlay.classList.add('hidden');
                }
            }
        });
    });

    // Implement search functionality
    const searchInput = document.querySelector('input[type="text"]');
    
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.classList.add('ring-2', 'ring-primary');
        });
        
        searchInput.addEventListener('blur', function() {
            this.classList.remove('ring-2', 'ring-primary');
        });
    }

    // Add touch effects for mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.classList.add('opacity-80');
            });
            
            button.addEventListener('touchend', function() {
                this.classList.remove('opacity-80');
            });
        });
    }
});

// Function to handle responsive layout adjustments
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('aside');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('hidden', 'fixed', 'z-50', 'top-0', 'left-0', 'h-full', 'w-64');
        sidebar.classList.add('md:block');
        
        if (overlay) {
            overlay.classList.add('hidden');
        }
    } else {
        if (!sidebar.classList.contains('hidden')) {
            sidebar.classList.add('hidden');
            
            if (overlay) {
                overlay.classList.add('hidden');
            }
        }
    }
}); 