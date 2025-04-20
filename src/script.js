/************carte maps*************/
window.addEventListener('load', () => {
    if (document.getElementById('map')._leaflet_id) {
      return; // La carte est déjà initialisée, on ne refait rien
    }
  
    const map = L.map('map').setView([45.0542367, 3.9665064], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    L.marker([45.0542367, 3.9665064]).addTo(map)
      .bindPopup('On est là!')
      .openPopup();
  });
  

/***********gallery**********/
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("closeModal");
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


