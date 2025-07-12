document.addEventListener('DOMContentLoaded', () => {
  const roverSelect = document.getElementById('rover-select');
  const gallery = document.getElementById('gallery');

  function loadPhotos(rover) {
    gallery.innerHTML = '<p class="message">📡 Fetching photos from Mars...</p>';

    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=3ujQYMsZLDGJ6uPg6EsFbeymdaiLI523zJG9QxMO`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        gallery.innerHTML = ''; // Clear previous
        if (data.photos.length === 0) {
          gallery.innerHTML = `<p class="message">🚫 No photos found for ${rover} on Sol 1000.</p>`;
          return;
        }

        data.photos.forEach(photo => {
          const img = document.createElement('img');
          img.src = photo.img_src;
          img.alt = `Photo from ${rover} on Sol 1000`;
          img.className = 'rover-photo';
          gallery.appendChild(img);
        });
      })
      .catch(err => {
        console.error('API error:', err);
        gallery.innerHTML = `<p class="message">⚠️ Error fetching data. Try again later.</p>`;
      });
  }

  roverSelect.addEventListener('change', () => {
    const selectedRover = roverSelect.value;
    loadPhotos(selectedRover);
  });

  // Load Curiosity by default
  loadPhotos(roverSelect.value);
});