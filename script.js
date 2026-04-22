document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('action-btn');
    const statusText = document.getElementById('status');

    mainButton.addEventListener('click', () => {
        // Change text when clicked
        statusText.innerText = "Deployment Successful!";
        statusText.style.color = "#00ff88";
        
        // Log to console for debugging
        console.log("Button clicked! Scripts are working.");
        
        // Basic animation effect
        mainButton.style.transform = "scale(0.95)";
        setTimeout(() => {
            mainButton.style.transform = "scale(1)";
        }, 100);
    });
});
