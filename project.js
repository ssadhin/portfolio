// Function to handle hover panel logic
function setupHoverPanels() {
    for (let i = 1; i <= 5; i++) {
        const trigger = document.getElementById(`trigger-${i}`);
        const hoverPanel = document.getElementById(`hover-panel-${i}`);

        if (!trigger || !hoverPanel) continue;

        trigger.addEventListener('mousemove', (e) => {
            hoverPanel.style.display = 'block';
            hoverPanel.style.left = `${e.pageX + 15}px`;
            hoverPanel.style.top = `${e.pageY + 15}px`;
        });

        trigger.addEventListener('mouseleave', () => {
            hoverPanel.style.display = 'none';
        });
    }
}

// Function to handle click panel logic
function setupClickPanels() {
    for (let i = 1; i <= 5; i++) {
        const trigger = document.getElementById(`trigger-${i}`);
        const clickPanel = document.getElementById(`click-panel-${i}`);
        const overlay = document.getElementById('overlay');
        const sections = clickPanel?.querySelectorAll('.section');
        const prevButton = clickPanel?.querySelector('.prev');
        const nextButton = clickPanel?.querySelector('.next');
        let activeIndex = 0;

        // Button to navigate sections
        const navButton = document.createElement('button');
        navButton.textContent = 'Prev/Next';
        navButton.className = 'nav-button';
        navButton.style.display = 'none'; // Hidden by default
        document.body.appendChild(navButton); // Appending button to body to make it fixed

        // Close button, also fixed position
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.className = 'close-btn';
        closeBtn.style.display = 'none'; // Hidden by default
        document.body.appendChild(closeBtn); // Appending button to body to make it fixed

        const updateSections = () => {
            sections.forEach((section, index) => {
                section.classList.toggle('active', index === activeIndex);
            });
        };

        trigger.addEventListener('click', () => {
            clickPanel.style.display = 'block';
            setTimeout(() => {
                clickPanel.classList.add('active');
                overlay.classList.add('active');
                navButton.style.display = 'block'; // Show the Next button when the panel is open
                closeBtn.style.display = 'block'; // Show the Close button when the panel is open
            }, 10);
            updateSections();
        });

        // Event listener for the close button to hide the panel
        closeBtn.addEventListener('click', () => {
            clickPanel.classList.remove('active');
            overlay.classList.remove('active');
            navButton.style.display = 'none'; // Hide the Next button when the panel closes
            closeBtn.style.display = 'none'; // Hide the Close button when the panel closes
            setTimeout(() => {
                clickPanel.style.display = 'none';
            }, 300);
        });

        overlay.addEventListener('click', () => {
            clickPanel.classList.remove('active');
            overlay.classList.remove('active');
            navButton.style.display = 'none'; // Hide the Next button when the panel closes
            closeBtn.style.display = 'none'; // Hide the Close button when the panel closes
            setTimeout(() => {
                clickPanel.style.display = 'none';
            }, 300);
        });

        prevButton?.addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + sections.length) % sections.length;
            updateSections();
        });

        nextButton?.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % sections.length;
            updateSections();
        });

        // Navigation button logic
        navButton.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % sections.length;
            updateSections();
        });

        // Style the navigation button (Next Button)
        navButton.style.position = 'fixed'; // Fix the position relative to the viewport
        navButton.style.top = '10px';  // Position it 10px from the top
        navButton.style.right = '1%';  // Position it 10px from the right
        navButton.style.padding = '1% 2%';  // Increase padding for bigger button
        navButton.style.fontSize = '18px';  // Larger font size
        navButton.style.backgroundColor = '#28a745';  // Green background color
        navButton.style.color = '#fff';  // White text color
        navButton.style.border = 'none';  // No border
        navButton.style.borderRadius = '8px';  // Rounded corners
        navButton.style.cursor = 'pointer';  // Change cursor to pointer
        navButton.style.zIndex = '1000';  // Ensure it's above other elements

        // Hover effect for the button
        navButton.addEventListener('mouseover', () => {
            navButton.style.backgroundColor = '#218838';  // Darker green on hover
        });

        navButton.addEventListener('mouseout', () => {
            navButton.style.backgroundColor = '#28a745';  // Reset to original color when not hovering
        });

        // Style the close button
        closeBtn.style.position = 'fixed'; // Fix the position relative to the viewport
        closeBtn.style.top = '10px';  // Position it 10px from the top
        closeBtn.style.right = '90%';  // Position it 90px from the right (adjust if needed)
        closeBtn.style.padding = '1% 2%';  // Increase padding for bigger button
        closeBtn.style.fontSize = '20px';  // Larger font size
        closeBtn.style.backgroundColor = '#dc3545';  // Red background color
        closeBtn.style.color = '#fff';  // White text color
        closeBtn.style.border = 'none';  // No border
        closeBtn.style.borderRadius = '8px';  // Rounded corners
        closeBtn.style.cursor = 'pointer';  // Change cursor to pointer
        closeBtn.style.zIndex = '1001';  // Ensure it's above other elements (even above the next button)

        // Hover effect for the close button
        closeBtn.addEventListener('mouseover', () => {
            closeBtn.style.backgroundColor = '#c82333';  // Darker red on hover
        });

        closeBtn.addEventListener('mouseout', () => {
            closeBtn.style.backgroundColor = '#dc3545';  // Reset to original color when not hovering
        });
    }
}

// Initialize the logic
setupHoverPanels();
setupClickPanels();
