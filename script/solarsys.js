document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("solarTimeline");
  if (!container) {
    console.warn("Element #solarTimeline not found.");
    return;
  }

  const solarEvents = [
    { date: "4.6 Billion Years Ago", title: "🌌 Molecular Cloud Collapse", description: "Triggered by a nearby supernova shockwave." },
    { date: "4.55 Billion Years Ago", title: "🌀 Protoplanetary Disk Forms", description: "Dust and gas flatten around the early Sun." },
    { date: "4.5 Billion Years Ago", title: "☀️ Solar Fusion Begins", description: "The Sun ignites and begins solar wind emission." },
    { date: "4.48 Billion Years Ago", title: "🪨 Planetesimals Grow", description: "Rocky bodies merge via accretion into proto-planets." },
    { date: "4.47 Billion Years Ago", title: "🪐 Gas Giants Emerge", description: "Jupiter and Saturn capture massive atmospheres." },
    { date: "4.4–4.0 Billion Years Ago", title: "☄️ Late Heavy Bombardment", description: "Asteroids reshape planet surfaces via intense collisions." },
    { date: "3.8 Billion Years Ago", title: "🌊 Water on Earth", description: "Comets and hydrated minerals deliver essential water." },
    { date: "Today", title: "🧭 Stable Solar System", description: "8 planets, moons, asteroids, and space missions explore it all." }
  ];

  solarEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
    card.style.border = "2px solid #FFD700";
    card.style.borderRadius = "10px";
    card.style.padding = "1rem";
    card.style.marginBottom = "1rem";
    card.style.background = "#1A1A1A";
    card.style.color = "#F5F5F5";
    card.style.fontFamily = "'Orbitron', sans-serif";

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>${event.date}</strong></p>
      <p>${event.description}</p>
    `;
    container.appendChild(card);
  });

  // Animate with GSAP after all cards are rendered
  gsap.to(".event-card", {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out"
  });
});