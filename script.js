
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
// Adding an event listener to make the arrow clickable
document.querySelector('.arrow').addEventListener('click', function() {
    // You can add an animation or scrolling effect here. Example:
    window.scrollBy({
        top: window.innerHeight,  // scroll by the height of the window
        behavior: 'smooth'
    });
});
