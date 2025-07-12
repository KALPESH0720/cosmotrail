 document.addEventListener("DOMContentLoaded", () => {
  const centerDiv = document.getElementById("isroCenters");
  const launcherDiv = document.getElementById("isroLaunchers");

  const centers = [
    { name: "Vikram Sarabhai Space Centre (VSSC)", location: "Thiruvananthapuram", role: "Launch vehicle design & development", emoji: "🧪" },
    { name: "Satish Dhawan Space Centre (SDSC)", location: "Sriharikota", role: "Launch site & vehicle integration", emoji: "🚀" },
    { name: "Liquid Propulsion Systems Centre (LPSC)", location: "Thiruvananthapuram & Bengaluru", role: "Liquid & cryogenic propulsion", emoji: "💧" },
    { name: "ISRO Propulsion Complex (IPRC)", location: "Mahendragiri", role: "Engine testing & assembly", emoji: "🔧" },
    { name: "Space Applications Centre (SAC)", location: "Ahmedabad", role: "Payloads for communication & remote sensing", emoji: "📡" },
    { name: "U R Rao Satellite Centre (URSC)", location: "Bengaluru", role: "Satellite design & integration", emoji: "🛰️" }
  ];

  const launchers = [
    { name: "PSLV", full: "Polar Satellite Launch Vehicle", payload: "Up to 1.75 tons to Sun-synchronous orbit", emoji: "📦" },
    { name: "GSLV", full: "Geosynchronous Satellite Launch Vehicle", payload: "Up to 2.5 tons to GTO", emoji: "🛰️" },
    { name: "LVM3", full: "Launch Vehicle Mark-3", payload: "Up to 4 tons to GTO / 10 tons to LEO", emoji: "🚀" },
    { name: "SSLV", full: "Small Satellite Launch Vehicle", payload: "Up to 500 kg to LEO", emoji: "📦" },
    { name: "RLV-TD", full: "Reusable Launch Vehicle – Tech Demo", payload: "Experimental winged vehicle", emoji: "♻️" },
    { name: "HRLV", full: "Human Rated LVM3", payload: "Crewed missions (Gaganyaan)", emoji: "👨‍🚀" }
  ];

  centers.forEach(center => {
    const card = document.createElement("div");
    card.className = "infra-card";
    card.innerHTML = `
      <h3>${center.emoji} ${center.name}</h3>
      <p><strong>Location:</strong> ${center.location}</p>
      <p><strong>Role:</strong> ${center.role}</p>
    `;
    centerDiv.appendChild(card);
  });

  launchers.forEach(launcher => {
    const card = document.createElement("div");
    card.className = "infra-card";
    card.innerHTML = `
      <h3>${launcher.emoji} ${launcher.name}</h3>
      <p><strong>Full Name:</strong> ${launcher.full}</p>
      <p><strong>Payload Capacity:</strong> ${launcher.payload}</p>
    `;
    launcherDiv.appendChild(card);
  });

  gsap.to(".infra-card", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
  });
});


