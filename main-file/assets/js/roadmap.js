

function toggleDropdown(id) {
  var dropdown = document.getElementById(id + '-content');

  // Close any other open dropdowns
  var allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(function (item) {
    if (item !== dropdown) {
      item.style.display = 'none';
    }
  });

  // Toggle the selected dropdown
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
}

function selectOption(event, buttonId) {
  event.preventDefault();
  var button = document.getElementById(buttonId);
  var selectedOption = event.target.textContent;
  button.textContent = selectedOption;

  // Close the dropdown after selection
  var dropdown = event.target.closest('.dropdown-content');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}


function showSearchResults() {
  var currentRole = document.getElementById('dropdown1-btn').textContent.trim();
  var futureRole = document.getElementById('dropdown2-btn').textContent.trim();

  // Hide all content boxes initially
  var contentBox1 = document.getElementById('contentBox1');
  var contentBox2 = document.getElementById('contentBox2');
  var contentBox3 = document.getElementById('contentBox3');
  var contentBox4 = document.getElementById('contentBox4');

  contentBox1.style.display = 'none';
  contentBox2.style.display = 'none';
  contentBox3.style.display = 'none';
  contentBox4.style.display = 'none';

  // Display the appropriate content box based on selections
  if (currentRole === "-Fresher" && futureRole === "-SOC Analyst") {
    contentBox1.style.display = 'block';
  } else if (currentRole === "-Network Engineer" && futureRole === "-GRC Analyst") {
    contentBox2.style.display = 'block';
  } else if (currentRole === "-Software Engineer" && futureRole === "-Security Engineer") {
    contentBox3.style.display = 'block';

  } else if (currentRole === "-System Admin" && futureRole === "-Security Architect") {
    contentBox4.style.display = 'block';
  } else {
    alert('Please select the correct roles to view the appropriate roadmap.');
  }
}
