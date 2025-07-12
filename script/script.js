const container = document.getElementById('news-container');

fetch('https://api.spaceflightnewsapi.net/v4/articles?_limit=6')
  .then(res => res.json())
  .then(data => {
    data.results.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.summary.slice(0, 100)}...</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = `<p>🚨 Failed to load news. Try again later!</p>`;
    console.error('API Error:', err);
  });

  const newsLink = document.getElementById('news-link');
  newsLink.addEventListener('click', () => {
    container.scrollIntoView({ behavior: 'smooth' });
  });



const option=document.getElementById("where")
const isssec=document.getElementById("iss")

option.addEventListener('click',()=>{
    isssec.scrollIntoView({behavior:'smooth'})
})

  document.getElementById('trackISS').addEventListener('click', () => {
  const output = document.getElementById('issLocation');

  fetch('http://api.open-notify.org/iss-now.json')
    .then(res => res.json())
    .then(data => {
      const { latitude, longitude } = data.iss_position;
      output.innerHTML = `
        <strong>Latitude:</strong> ${latitude}<br>
        <strong>Longitude:</strong> ${longitude}<br>
        <strong>Timestamp:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}
      `;
    })
    .catch(err => {
      console.error('ISS API error:', err);
      output.innerHTML = '⚠️ Failed to fetch ISS location.';
    });
});