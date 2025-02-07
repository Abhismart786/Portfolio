
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
function showScreenshot(event, projects) {
    // Prevent the default action of the anchor tag (scrolling to the top)
    event.preventDefault();

    // Define your screenshots based on the project type
    let screenshots = {
        'android-project-1': './assets/Screenshot 2025-01-21 at 9.08.47 PM Small 2.jpeg',
        'android-project-2': 'assets/Screenshot 2025-01-21 at 9.10.42 PM Small.jpeg',
        'ios-project-1': 'assets/Screenshot 2025-01-22 at 9.09.23 PM Small 2.jpeg',
        'ios-project-2': 'assets/Screenshot 2025-01-21 at 9.27.08 PM Small.jpeg',
        'flutter-project-1': './assets/flutter-screenshot-1.png',
        'flutter-project-2': './assets/flutter-screenshot-2.png',
        'reactjs-project-1': 'assets/Screenshot 2025-02-07 at 1.37.19 PM Small.jpeg',
        'reactjs-project-2': 'assets/Screenshot 2025-02-07 at 1.37.32 PM Small.jpeg',
        'web-project-1': 'assets/Screenshot 2025-02-07 at 1.31.27 PM Small.jpeg',
        'web-project-2': 'assets/Screenshot 2025-02-07 at 1.31.42 PM Small.jpeg',
        'major-project-1': './assets/major-screenshot-1.png',
        'major-project-2': './assets/major-screenshot-2.png',
    };

    // Get the container to display the screenshot
    let container = document.getElementById('screenshot-container');

    // Clear any previously shown images
    container.innerHTML = '';

    // Loop through the array of projects and display their images
    projects.forEach(project => {
        // Get the screenshot URL for the clicked project
        let screenshotUrl = screenshots[project];

        // Create a new image element
        let img = document.createElement('img');
        img.src = screenshotUrl;
        img.alt = project + ' Screenshot';
        img.classList.add('screenshot'); // Optionally add a class for styling

        // Append the image to the container
        container.appendChild(img);
    });
}
