// Purchase Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('#buyButton, #buyButtonHero');
    const purchaseModal = document.getElementById('purchaseModal');
    const modalClose = document.getElementById('modalClose');
    const purchaseForm = document.getElementById('purchaseForm');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('totalPrice');
    const totalValueElement = totalPriceElement.querySelector('.total-value');
    const pricePerItem = 30;
    
    // Open modal when buy button is clicked
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            purchaseModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateTotalPrice();
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        closeModal();
    });
    
    // Close modal when clicking outside
    purchaseModal.addEventListener('click', function(e) {
        if (e.target === purchaseModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && purchaseModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Update total price when quantity changes
    quantityInput.addEventListener('input', function() {
        updateTotalPrice();
    });
    
    // Calculate and update total price
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value) || 1;
        
        if (quantity > 1) {
            const total = quantity * pricePerItem;
            totalValueElement.textContent = total + ' JOD';
            totalPriceElement.classList.remove('hidden');
        } else {
            totalPriceElement.classList.add('hidden');
        }
    }
    
    // Handle form submission
    purchaseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const jerseyNumber = document.getElementById('jerseyNumber').value;
        const playerName = document.getElementById('playerName').value;
        const quantity = document.getElementById('quantity').value;
        const total = parseInt(quantity) * pricePerItem;
        
        // Show confirmation (you can replace this with actual order processing)
        alert(`تم تأكيد طلبك!\n\nرقم القميص: ${jerseyNumber}\nاسم اللاعب: ${playerName}\nالكمية: ${quantity}\nالسعر الإجمالي: ${total} JOD`);
        
        // Close modal and reset form
        closeModal();
        purchaseForm.reset();
        updateTotalPrice();
    });
    
    // Close modal function
    function closeModal() {
        purchaseModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Auto-scrolling Gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryScrollContainer');
    const galleryWrapper = galleryContainer.querySelector('.gallery-images-wrapper');
    const galleryItems = galleryWrapper.querySelectorAll('.gallery-item');
    
    if (!galleryContainer || galleryItems.length === 0) return;
    
    let scrollPosition = 0;
    let scrollSpeed = 1; // pixels per frame
    let isScrolling = true;
    let scrollDirection = 1; // 1 for right, -1 for left
    let animationFrameId = null;
    
    // Calculate total width
    const totalWidth = galleryWrapper.scrollWidth - galleryContainer.clientWidth;
    
    // Pause scrolling on hover
    galleryContainer.addEventListener('mouseenter', function() {
        isScrolling = false;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });
    
    // Resume scrolling on mouse leave
    galleryContainer.addEventListener('mouseleave', function() {
        isScrolling = true;
        startAutoScroll();
    });
    
    // Function to handle auto-scroll
    function startAutoScroll() {
        function animate() {
            if (!isScrolling) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }
            
            scrollPosition += scrollSpeed * scrollDirection;
            
            // Reverse direction at boundaries
            if (scrollPosition >= totalWidth) {
                scrollDirection = -1;
            } else if (scrollPosition <= 0) {
                scrollDirection = 1;
            }
            
            // Apply scroll
            galleryContainer.scrollLeft = scrollPosition;
            
            animationFrameId = requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Reset scroll position when user manually scrolls
    let userScrollTimeout;
    galleryContainer.addEventListener('scroll', function() {
        if (!isScrolling) {
            scrollPosition = galleryContainer.scrollLeft;
        } else {
            // If user scrolls manually, pause auto-scroll temporarily
            clearTimeout(userScrollTimeout);
            const wasScrolling = isScrolling;
            isScrolling = false;
            
            userScrollTimeout = setTimeout(function() {
                scrollPosition = galleryContainer.scrollLeft;
                isScrolling = wasScrolling;
                startAutoScroll();
            }, 2000); // Resume after 2 seconds of no manual scrolling
        }
    });
});
