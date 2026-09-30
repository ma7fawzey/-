window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);

  }, 1300);

});


/* CURSOR */

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

});


/* MUSIC */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

  if (!playing) {

    music.play();
    playing = true;

    musicBtn.innerHTML = "♫ <span>Playing</span>";

  } else {

    music.pause();
    playing = false;

    musicBtn.innerHTML = "♫ <span>Music</span>";

  }

});


/* IMAGE PARALLAX */

const cards = document.querySelectorAll(".photo-card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const rect = card.getBoundingClientRect();

    const center =
      window.innerHeight / 2;

    const distance =
      rect.top + rect.height / 2 - center;

    const image =
      card.querySelector("img");

    if (Math.abs(distance) < window.innerHeight) {

      const movement =
        distance * -0.025;

      image.style.transform =
        `translateY(${movement}px) scale(1.03)`;

    }

  });

});


/* SURPRISE MESSAGE */

const surpriseBtn =
  document.getElementById("surpriseBtn");

const hiddenMessage =
  document.getElementById("hiddenMessage");

const closeMessage =
  document.getElementById("closeMessage");

surpriseBtn.addEventListener("click", () => {

  hiddenMessage.classList.add("active");

});

closeMessage.addEventListener("click", () => {

  hiddenMessage.classList.remove("active");

});


hiddenMessage.addEventListener("click", (e) => {

  if (e.target === hiddenMessage) {
    hiddenMessage.classList.remove("active");
  }

});


/* PARTICLES */

const particleContainer =
  document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

  const particle =
    document.createElement("span");

  particle.style.position = "fixed";
  particle.style.width = "2px";
  particle.style.height = "2px";
  particle.style.background = "rgba(255,255,255,.35)";
  particle.style.borderRadius = "50%";
  particle.style.left =
    Math.random() * 100 + "%";
  particle.style.top =
    Math.random() * 100 + "%";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "1";

  particle.style.animation =
    `floatParticle ${4 + Math.random() * 7}s infinite ease-in-out`;

  particleContainer.appendChild(particle);

}


const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

  0%,100% {
    transform: translateY(0);
    opacity: .2;
  }

  50% {
    transform: translateY(-60px);
    opacity: .8;
  }

}

`;

document.head.appendChild(style);