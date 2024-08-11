document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.services-item-link');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            
            // Hide all award containers
            const awardContainers = document.querySelectorAll('.award-container');
            awardContainers.forEach(container => {
                container.style.display = 'none';
            });

            // Show the clicked award container
            const targetId = this.getAttribute('href').substring(1);
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.style.display = 'block';
            }

            // Optionally, scroll to the award container smoothly
            window.scrollTo({
                top: targetContainer.offsetTop, 
                behavior: 'smooth'
            });
        });
    });
});


$(document).ready(function () {
    $('.services-item-link').on('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Hide all award containers
        $('.award-container').hide();
        
        // Show the clicked award container
        const targetId = $(this).attr('href').substring(1);
        $('#' + targetId).show();

        // Optionally, scroll to the award container smoothly
        $('html, body').animate({
            scrollTop: $('#' + targetId).offset().top
        }, 500);
    });
});





// Get the modal
const modal = document.getElementById('submitModal');

// Open modal when the first submit button is clicked
document.getElementById('openModal').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link action
    modal.style.display = 'block'; // Show the modal
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});

// Collect and display input data in a new window when the second submit button is clicked
document.getElementById('submitLab').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link action

    // Collect input values
    const labData = {
        heading: document.getElementById('heading').value,
        introduction: document.getElementById('introduction').value,
        requirements: document.getElementById('requirements').value,
        exercises: [
            document.getElementById('exercise1').value,
            document.getElementById('exercise2').value,
            document.getElementById('exercise3').value,
            document.getElementById('exercise4').value,
            document.getElementById('exercise5').value
        ],
        conclusion: document.getElementById('conclusion').value
    };

    // Open a new window
    const newWindow = window.open('', '_blank');

    // Write the collected data into the new window
    newWindow.document.write('<h1>Submitted Lab Data</h1>');
    newWindow.document.write('<p><strong>Heading:</strong> ' + labData.heading + '</p>');
    newWindow.document.write('<p><strong>Introduction:</strong> ' + labData.introduction + '</p>');
    newWindow.document.write('<p><strong>Requirements:</strong> ' + labData.requirements + '</p>');
    for (let i = 0; i < labData.exercises.length; i++) {
        newWindow.document.write('<p><strong>Exercise-' + (i+1) + ':</strong> ' + labData.exercises[i] + '</p>');
    }
    newWindow.document.write('<p><strong>Conclusion:</strong> ' + labData.conclusion + '</p>');

    // Close the modal after submission
    modal.style.display = 'none';
});

