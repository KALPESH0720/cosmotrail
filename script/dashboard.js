document.getElementById('loadNeo').addEventListener('click', () => {
  const start = document.getElementById('startNeo').value;
  const end = document.getElementById('endNeo').value;
  const neoList = document.getElementById('neoList');

  if (!start || !end) {
    alert('Please select both start and end dates.');
    return;
  }

  const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=DEMO_KEY`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      neoList.innerHTML = ''; // Clear previous

      const neoData = data.near_earth_objects;
      const dates = Object.keys(neoData);

      dates.forEach(date => {
        neoData[date].forEach(asteroid => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>${asteroid.name}</strong> - 
            Approach Date: ${date} - 
            Velocity: ${parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h - 
            Miss Distance: ${parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km
          `;
          neoList.appendChild(li);
        });
      });
    })
    .catch(err => {
      console.error('NeoWs API error:', err);
      neoList.innerHTML = '<li>⚠️ Failed to fetch asteroid data.</li>';
    });
});