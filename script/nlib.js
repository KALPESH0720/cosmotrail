document.getElementById('searchMedia').addEventListener('click', () => {
  const query = document.getElementById('searchQuery').value.trim();
  const resultsDiv = document.getElementById('mediaResults');

  if (!query) {
    alert('Please enter a mission name or keyword.');
    return;
  }

  const apiUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image,video`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      resultsDiv.innerHTML = ''; // Clear previous

      const items = data.collection.items;
      if (items.length === 0) {
        resultsDiv.innerHTML = '<p>No media found for this query.</p>';
        return;
      }

      items.slice(0, 10).forEach(item => {
        const title = item.data[0].title;
        const description = item.data[0].description || 'No description available.';
        const mediaType = item.data[0].media_type;
        const thumb = item.links?.[0]?.href;

        const card = document.createElement('div');
        card.style.border = '2px solid #FFD700';
        card.style.borderRadius = '10px';
        card.style.padding = '1rem';
        card.style.marginBottom = '1rem';
        card.style.background = '#1A1A1A';

        card.innerHTML = `
          <h3>${title}</h3>
          <p><strong>Type:</strong> ${mediaType}</p>
          <p>${description}</p>
          ${thumb ? `<img src="${thumb}" alt="${title}" style="max-width:100%; border-radius:8px;" />` : ''}
        `;

        resultsDiv.appendChild(card);
      });
    })
    .catch(err => {
      console.error('NASA Media API error:', err);
      resultsDiv.innerHTML = '<p>⚠️ Failed to fetch media. Try again later.</p>';
    });
});