document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('soil-moisture-chart').getContext('2d');

  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Aloe Vera', 'Snake Plant', 'Fiddle Leaf Fig'],
      datasets: [
        {
          label: 'Soil Moisture',
          data: [60, 90, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 3,
          tension: 0.5, // Set tension to 0 for straight lines
          fill: true
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });
});

const navItems = document.querySelectorAll("nav ul li a");
const contentSections = document.querySelectorAll(".main-category-content");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    contentSections.forEach((section) => {
      if (section.id === `content-${targetId}`) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});



function showSection(targetId) {
  const contentSections = document.querySelectorAll("section");

  contentSections.forEach((section) => {
    if (section.id === `content-${targetId}`) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

const navButtons = document.querySelectorAll("nav ul li button");

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = event.target.dataset.target;
    showSection(targetId);
  });
});
