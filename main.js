/* =========================
   VIDEO LOOP (INDEX ONLY)
========================= */
const video = document.getElementById("heroVideo");

if (video) {
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });

  const playPause = document.getElementById("playPause");
  const muteBtn = document.getElementById("muteUnmute");

  if (playPause && muteBtn) {
    playPause.onclick = () => {
      if (video.paused) {
        video.play();
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        playPause.innerHTML = '<i class="fas fa-play"></i>';
      }
    };

    muteBtn.onclick = () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
    };
  }
}

/* =========================
   MOBILE MENU TOGGLE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});

/* =========================
   PROJECT SLIDER (INDEX)
========================= */
const slider = document.querySelector(".projects-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const cards = document.querySelectorAll(".property-card");

if (slider && nextBtn && prevBtn && cards.length > 0) {
  const cardWidth = cards[0].offsetWidth + 20;
  let index = 0;
  const total = cards.length;

  function goToSlide(i) {
    index = (i + total) % total;
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }

  nextBtn.addEventListener("click", () => goToSlide(index + 1));
  prevBtn.addEventListener("click", () => goToSlide(index - 1));

  setInterval(() => {
    goToSlide(index + 1);
  }, 3000);
}
