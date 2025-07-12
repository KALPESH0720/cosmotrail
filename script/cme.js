let cmeChart; // chart instance

document.getElementById('btn').addEventListener('click', () => {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  if (!startDate || !endDate) {
    alert('Please select both start and end dates.');
    return;
  }

  const API_URL = `https://api.nasa.gov/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=3ujQYMsZLDGJ6uPg6EsFbeymdaiLI523zJG9QxMO`;

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const labels = data.map(event => event.startTime.split('T')[0]);
      const speeds = data.map(event => event.cmeAnalyses?.[0]?.speed || 0);

      const ctx = document.getElementById('cmeChart').getContext('2d');

      if (cmeChart) {
        // 🎯 Update existing chart
        cmeChart.data.labels = labels;
        cmeChart.data.datasets[0].data = speeds;
        cmeChart.options.plugins.title.text = `CME Speeds (${startDate} to ${endDate})`;
        cmeChart.update();
      } else {
        // 🚀 Create chart for the first time
        cmeChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'CME Speed (km/s)',
              data: speeds,
              backgroundColor: '#FFD700',
              borderColor: '#6A0DAD',
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              x: { title: { display: true, text: 'Event Date', color: '#F5F5F5' }, ticks: { color: '#F5F5F5' } },
              y: { title: { display: true, text: 'Speed (km/s)', color: '#F5F5F5' }, ticks: { color: '#F5F5F5' } }
            },
            plugins: {
              legend: { labels: { color: '#F5F5F5' } },
              title: {
                display: true,
                text: `CME Speeds (${startDate} to ${endDate})`,
                color: '#FFD700',
                padding: { top: 10, bottom: 20 }
              }
            }
          }
        });
      }
    })
    .catch(err => {
      console.error('API error:', err);
      alert('Failed to fetch CME data. Try a different date range.');
    });
});


document.getElementById('getEarth').addEventListener('click', () => {
  const date = document.getElementById('epicDate').value; // Format: YYYY-MM-DD
  const imageDiv = document.getElementById('earthImage');

  if (!date) {
    alert('Please select a date.');
    return;
  }

  const apiUrl = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      imageDiv.innerHTML = ''; // Clear previous

      if (data.length === 0) {
        imageDiv.innerHTML = '<p>No images found for this date.</p>';
        return;
      }

      const imageName = data[0].image;
      const [year, month, day] = date.split('-');
      const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageName}.png`;

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `EPIC Earth image on ${date}`;
      img.style.maxWidth = '100%';
      img.style.border = '2px solid #FFD700';
      img.style.borderRadius = '10px';

      imageDiv.appendChild(img);
    })
    .catch(err => {
      console.error('EPIC API error:', err);
      imageDiv.innerHTML = '<p>⚠️ Failed to fetch image. Try another date.</p>';
    });
});