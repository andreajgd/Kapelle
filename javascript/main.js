const vinylCovers = [
  { slot: 1, file: "../assets/Billie.jpg", label: "Billie" },
  { slot: 2, file: "../assets/Bocanada.jpg", label: "Bocanada" },
  { slot: 3, file: "../assets/charm clairo album.jpg", label: "Charm" },
  { slot: 4, file: "../assets/CULTS Static.jpg", label: "Cults" },
  { slot: 5, file: "../assets/Evanescence.jpg", label: "Evanescence" },
  { slot: 6, file: "../assets/Lana del Rey.jpg", label: "Lana" },
  {
    slot: 7,
    file: "../assets/Sleep Token - 2021 This Place Will Become Your Tomb (Vinyl).jpg",
    label: "Sleep Token",
  },
  { slot: 8, file: "../assets/SZA - SOS (Vinyl).jpg", label: "SZA" },
  {
    slot: 9,
    file: "../assets/The Mar\u00edas - Submarine.jpg",
    label: "Mar\u00edas",
  },
  { slot: 10, file: "../assets/wave to earth.jpg", label: "Wave" },
  { slot: 11, file: "../assets/Zoe - Azul.jpg", label: "Zo\u00e9" },
  { slot: 12, file: "../assets/\u02d9 twilight \u02d9.jpg", label: "Twilight" },
];

const vinylCards = document.querySelectorAll(".vinyl");

const decorateVinyl = (vinylElement, src, label) => {
  const labelNode = vinylElement.querySelector(".vinyl__label");
  const hintNode = vinylElement.querySelector(".vinyl__hint");

  if (!labelNode) return;

  if (src) {
    labelNode.style.backgroundImage = `url("${src}")`;
    labelNode.textContent = "";
    labelNode.classList.add("vinyl__label--has-cover");
    if (hintNode) {
      hintNode.textContent = "";
      hintNode.style.opacity = "0";
    }
  } else if (label) {
    labelNode.textContent = label;
  }
};

vinylCards.forEach((vinyl) => {
  const presetCover = vinyl.getAttribute("data-cover");
  if (presetCover) {
    decorateVinyl(vinyl, presetCover.trim(), "");
  }
});

vinylCovers.forEach(({ slot, file, label }) => {
  if (!slot || !file) return;
  const card = document.querySelector(`.vinyl-card[data-slot="${slot}"] .vinyl`);
  if (!card) return;
  decorateVinyl(card, file, label ?? "");
});
