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

function navigateToSection(targetId) {
  const sections = document.querySelectorAll('section.main-category');
  sections.forEach(function (section) {
    if (section.id === targetId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('data-target');
    navigateToSection(targetId);
  });
});
