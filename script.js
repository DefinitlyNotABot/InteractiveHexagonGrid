const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");


// When scrolling, move the glow accordingly
window.addEventListener('scroll', () => {
    // Get current mouse position, use zero if mouse position is unknown
    const mouseX = window.mouseX || 0;
    const mouseY = window.mouseY || 0;

    // Move the light based on the last known mouse position, add scroll height for Y offset
    light.style.left = `${mouseX}px`;
    light.style.top = `${mouseY + window.scrollY}px`;
});


// When the mouse moves, move the light accordingly
window.addEventListener("mousemove", function (e) {
    // Update mouse position
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;

    // Move the light based on the current mouse position, add scroll height for Y offset
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + window.scrollY}px`;
})