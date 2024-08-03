

// This is the button that takes you back to the top of the home screen

// Create the button element

// get ready for too much code

var backToTopButton = document.createElement('button');

// Set initial content and styles for the button

// close 

//I USED INNER HTML WHOOO





backToTopButton.innerText = 'Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none'; // Hidden by default (cool)
backToTopButton.style.padding = '10px';
backToTopButton.style.backgroundColor = 'gray';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';




// Append the button to the body
//that was easeir than it looked
document.body.appendChild(backToTopButton);

// Function to show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
};

// Function to scroll to the top when the button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//END OF THE Button that takes you back to the top of the home screen.





//THIS IS WHERE YOU CAN TURN ON DARK MODE

// Create the button element
var toggleDarkModeButton = document.createElement('button');

// Set initial content and styles for the button
toggleDarkModeButton.innerText = 'Toggle Dark Mode';
toggleDarkModeButton.style.position = 'fixed';
toggleDarkModeButton.style.top = '20px';
toggleDarkModeButton.style.right = '20px';
toggleDarkModeButton.style.padding = '10px';
toggleDarkModeButton.style.backgroundColor = 'black';
toggleDarkModeButton.style.color = 'white';
toggleDarkModeButton.style.border = 'none';
toggleDarkModeButton.style.borderRadius = '5px';
toggleDarkModeButton.style.cursor = 'pointer';

// Append the button to the body
document.body.appendChild(toggleDarkModeButton);

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add an event listener to the button to toggle dark mode on click
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

// Add some basic styles for dark mode
var style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: white;
    }
    .dark-mode button {
        background-color: white;
        color: black;
    }
`;
document.head.appendChild(style);



//THIS SHOWS YOU THE REAL TIME (COOOOOOOOOLLL)


// Create a div element to display the date and time

var dateTimeDisplay = document.createElement('div');

// Set initial styles for the date and time display
dateTimeDisplay.style.position = 'fixed';
dateTimeDisplay.style.bottom = '20px';
dateTimeDisplay.style.left = '20px';
dateTimeDisplay.style.padding = '10px';
dateTimeDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
dateTimeDisplay.style.color = 'white';
dateTimeDisplay.style.borderRadius = '5px';
dateTimeDisplay.style.fontFamily = 'Arial, sans-serif';
dateTimeDisplay.style.fontSize = '14px';

// Append the date and time display to the body
document.body.appendChild(dateTimeDisplay);

// Function to update the date and time

//I JUST USED A LOOP, WHATTTTTTT
function updateDateTime() {
    var now = new Date();
    var dateString = now.toLocaleDateString();
    var timeString = now.toLocaleTimeString();
    dateTimeDisplay.innerText = dateString + ' ' + timeString;
}

// Initial call to display the current date and time

//WAIT THATS IT?
updateDateTime();

// Update the date and time every second

//WHY DOES IT NEED TO BE 1000 idk it just works
setInterval(updateDateTime, 1000);




















