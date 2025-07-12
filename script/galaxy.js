document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("galaxyTimeline");
  if (!container) {
    console.warn("Element #galaxyTimeline not found.");
    return;
  }

  const galaxyEvents = [
    { era: "13.8 Billion Years Ago", title: "💥 Big Bang", description: "The universe begins with a rapid expansion of space and energy." },
    { era: "13.7 Billion Years Ago", title: "🌌 Density Fluctuations", description: "Tiny quantum ripples become seeds for future galaxies." },
    { era: "13.6 Billion Years Ago", title: "🕳️ Dark Matter Clumping", description: "Invisible matter begins to cluster, pulling in gas via gravity." },
    { era: "13.5 Billion Years Ago", title: "🌠 Proto-Galaxies Form", description: "Gas collapses into rotating clouds, igniting the first stars." },
    { era: "13.2 Billion Years Ago", title: "🔁 Galaxy Mergers Begin", description: "Small galaxies collide and merge, forming larger structures." },
    { era: "12 Billion Years Ago", title: "🌪️ Spiral Arms Emerge", description: "Angular momentum shapes galaxies into spirals and ellipticals." },
    { era: "Present Day", title: "🧬 Galaxy Evolution Continues", description: "Galaxies grow, collide, and host supermassive black holes." }
  ];

  galaxyEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "galaxy-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.border = "2px solid #48D1CC";
    card.style.borderRadius = "10px";
    card.style.padding = "1rem";
    card.style.marginBottom = "1rem";
    card.style.background = "#1A1A1A";
    card.style.color = "#F5F5F5";
    card.style.fontFamily = "'Orbitron', sans-serif";

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>${event.era}</strong></p>
      <p>${event.description}</p>
    `;
    container.appendChild(card);
  });

  // Animate with GSAP
  gsap.to(".galaxy-card", {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out"
  });
});