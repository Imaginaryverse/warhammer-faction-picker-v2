const races = {
  beastmen: {
    factions: [
      {
        name: 'Warherd of the One-Eye',
        race: 'Beastmen',
        banner: 'banners/warherd-of-the-one-eye.png',
      },
      {
        name: 'Warherd of the Shadowgrave',
        race: 'Beastmen',
        banner: 'banners/warherd-of-the-shadowgrave.png',
      },
    ],
    background: 'backgrounds/beastmen-bg.jpg',
  },
  bretonnia: {
    factions: [
      {
        name: 'Bordeleaux',
        race: 'Bretonnia',
        banner: 'banners/bordeleaux.png',
      },
      {
        name: 'Carcassonne',
        race: 'Bretonnia',
        banner: 'banners/carcassonne.png',
      },
      {
        name: 'Chevaliers de Lyonesse',
        race: 'Bretonnia',
        banner: 'banners/chevaliers-de-lyonesse.png',
      },
      {
        name: 'Couronne',
        race: 'Bretonnia',
        banner: 'banners/couronne.png',
      },
    ],
    background: 'backgrounds/bretonnia-bg.jpg',
  },
  darkElves: {
    factions: [
      {
        name: 'Cult of Pleasure',
        race: 'Dark Elves',
        banner: 'banners/cult-of-pleasure.png',
      },
      {
        name: 'Hag Graef',
        race: 'Dark Elves',
        banner: 'banners/hag-graef.png',
      },
      {
        name: 'Har Ganeth',
        race: 'Dark Elves',
        banner: 'banners/har-ganeth.png',
      },
      {
        name: 'Naggarond',
        race: 'Dark Elves',
        banner: 'banners/naggarond.png',
      },
      {
        name: 'The Blessed Dread',
        race: 'Dark Elves',
        banner: 'banners/the-blessed-dread.png',
      },
    ],
    background: 'backgrounds/dark-elves-bg.jpg',
  },
  dwarfs: {
    factions: [
      {
        name: 'Clan Angrund',
        race: 'Dwarfs',
        banner: 'banners/clan-angrund.png',
      },
      {
        name: 'Karak Kadrin',
        race: 'Dwarfs',
        banner: 'banners/karak-kadrin.png',
      },
      {
        name: 'Karaz-a-Karak',
        race: 'Dwarfs',
        banner: 'banners/karaz-a-karak.png',
      },
    ],
    background: 'backgrounds/dwarfs-bg.jpg',
  },
  empire: {
    factions: [
      {
        name: 'Reikland',
        race: 'Empire',
        banner: 'banners/reikland.png',
      },
      {
        name: 'The Golden Order',
        race: 'Empire',
        banner: 'banners/the-golden-order.png',
      },
      {
        name: "The Huntsmarshal's Expedition",
        race: 'Empire',
        banner: 'banners/the-huntmarshals-expedition.png',
      },
    ],
    background: 'backgrounds/empire-bg.png',
  },
  greenskins: {
    factions: [
      {
        name: 'Bonerattlaz',
        race: 'Greenskins',
        banner: 'banners/bonerattlaz.png',
      },
      {
        name: 'Broken Axe',
        race: 'Greenskins',
        banner: 'banners/broken-axe.png',
      },
      {
        name: 'Crooked Moon',
        race: 'Greenskins',
        banner: 'banners/crooked-moon.png',
      },
      {
        name: "Grimgor's 'Ardboyz",
        race: 'Greenskins',
        banner: 'banners/grimgors-ardboyz.png',
      },
      {
        name: 'The Bloody Handz',
        race: 'Greenskins',
        banner: 'banners/the-bloody-handz.png',
      },
    ],
    background: 'backgrounds/greenskins-bg.jpg',
  },
  highElves: {
    factions: [
      {
        name: 'Avelorn',
        race: 'High Elves',
        banner: 'banners/avelorn.png',
      },
      {
        name: 'Eataine',
        race: 'High Elves',
        banner: 'banners/eataine.png',
      },
      {
        name: 'Knights of Caledor',
        race: 'High Elves',
        banner: 'banners/knights-of-caledor.png',
      },
      {
        name: 'Order of Loremasters',
        race: 'High Elves',
        banner: 'banners/order-of-loremasters.png',
      },
      {
        name: 'Nagarythe',
        race: 'High Elves',
        banner: 'banners/nagarythe.png',
      },
      {
        name: 'Yvresse',
        race: 'High Elves',
        banner: 'banners/yvresse.png',
      },
    ],
    background: 'backgrounds/high-elves-bg.jpg',
  },
  lizardmen: {
    factions: [
      {
        name: 'Cult of Sotek',
        race: 'Lizardmen',
        banner: 'banners/cult-of-sotek.png',
      },
      {
        name: 'Hexoatl',
        race: 'Lizardmen',
        banner: 'banners/hexoatl.png',
      },
      {
        name: 'Itza',
        race: 'Lizardmen',
        banner: 'banners/itza.png',
      },
      {
        name: 'Last Defenders',
        race: 'Lizardmen',
        banner: 'banners/last-defenders.png',
      },
      {
        name: 'Spirit of the Jungle',
        race: 'Lizardmen',
        banner: 'banners/spirit-of-the-jungle.png',
      },
      {
        name: 'Tlaqua',
        race: 'Lizardmen',
        banner: 'banners/tlaqua.png',
      },
    ],
    background: 'backgrounds/lizardmen-bg.png',
  },
  norsca: {
    factions: [
      {
        name: 'Wintertooth',
        race: 'Norsca',
        banner: 'banners/wintertooth.png',
      },
      {
        name: 'World Walkers',
        race: 'Norsca',
        banner: 'banners/world-walkers.png',
      },
    ],
    background: 'backgrounds/norsca-bg.png',
  },
  skaven: {
    factions: [
      {
        name: 'Clan Eshin',
        race: 'Skaven',
        banner: 'banners/clan-eshin.png',
      },
      {
        name: 'Clan Mors',
        race: 'Skaven',
        banner: 'banners/clan-mors.png',
      },
      {
        name: 'Clan Moulder',
        race: 'Skaven',
        banner: 'banners/clan-moulder.png',
      },
      {
        name: 'Clan Pestilens',
        race: 'Skaven',
        banner: 'banners/clan-pestilens.png',
      },
      {
        name: 'Clan Skryre',
        race: 'Skaven',
        banner: 'banners/clan-skryre.png',
      },
      {
        name: 'Clan Rictus',
        race: 'Skaven',
        banner: 'banners/clan-rictus.png',
      },
    ],
    background: 'backgrounds/skaven-bg.jpg',
  },
  tombKings: {
    factions: [
      {
        name: 'Court of Lybaras',
        race: 'Tomb Kings',
        banner: 'banners/court-of-lybaras.png',
      },
      {
        name: 'Exhiles of Nehek',
        race: 'Tomb Kings',
        banner: 'banners/exhiles-of-nehek.png',
      },
      {
        name: 'Followers of Nagash',
        race: 'Tomb Kings',
        banner: 'banners/followers-of-nagash.png',
      },
      {
        name: 'Khemri',
        race: 'Tomb Kings',
        banner: 'banners/khemri.png',
      },
    ],
    background: 'backgrounds/tomb-kings-bg.jpg',
  },
  vampireCoast: {
    factions: [
      {
        name: 'Pirates of Sartosa',
        race: 'Vampire Coast',
        banner: 'banners/pirates-of-sartosa.png',
      },
      {
        name: 'The Awakened',
        race: 'Vampire Coast',
        banner: 'banners/the-awakened.png',
      },
      {
        name: 'The Dreadfleet',
        race: 'Vampire Coast',
        banner: 'banners/the-dreadfleet.png',
      },
      {
        name: 'The Drowned',
        race: 'Vampire Coast',
        banner: 'banners/the-drowned.png',
      },
    ],
    background: 'backgrounds/vampire-coast-bg.jpg',
  },
  vampireCounts: {
    factions: [
      {
        name: 'The Barrow Legion',
        race: 'Vampire Counts',
        banner: 'banners/the-barrow-legion.png',
      },
      {
        name: 'Sylvania',
        race: 'Vampire Counts',
        banner: 'banners/sylvania.png',
      },
      {
        name: 'Von Carstein',
        race: 'Vampire Counts',
        banner: 'banners/von-carstein.png',
      },
    ],
    background: 'backgrounds/vampire-counts-bg.jpg',
  },
  warriorsOfChaos: {
    factions: [
      {
        name: 'Warriors of Chaos',
        race: 'Warriors of Chaos',
        banner: 'banners/warriors-of-chaos.png',
      },
    ],
    background: 'backgrounds/warriors-of-chaos-bg.jpg',
  },
  woodElves: {
    factions: [
      {
        name: 'Argwylon',
        race: 'Wood Elves',
        banner: 'banners/argwylon.png',
      },
      {
        name: 'Heralds of Ariel',
        race: 'Wood Elves',
        banner: 'banners/heralds-of-ariel.png',
      },
      {
        name: 'Talsyn',
        race: 'Wood Elves',
        banner: 'banners/talsyn.png',
      },
      {
        name: 'Wargrove of Woe',
        race: 'Wood Elves',
        banner: 'banners/wargrove-of-woe.png',
      },
    ],
    background: 'backgrounds/wood-elves-bg.jpg',
  },
};

/* VARIABLES */

const hamburgerBtn = document.querySelector('.hamburger-btn');
const topBar = document.querySelector('.top-bar');
const midBar = document.querySelector('.mid-bar');
const bottomBar = document.querySelector('.bottom-bar');

const resultContainer = document.querySelector('.result-container');
const backgroundImg = document.querySelector('.background-img');
const resultImg = document.querySelector('.result-container__img');
const resultRace = document.querySelector('.result-container__race');
const resultFaction = document.querySelector('.result-container__faction');
const formContainer = document.querySelector('.form-container');
const formCheckbox = document.querySelectorAll('.form-checkbox');
const checkAllBtn = document.querySelector('.check-all-btn');
const uncheckAllBtn = document.querySelector('.uncheck-all-btn');
const searchBtnContainer = document.querySelector('.search-btn-container');
const searchBtn = document.querySelector('.search-btn');

/* EVENT LISTENERS */
// hamburgerBtn
hamburgerBtn.addEventListener('click', () => {
  toggleHamburger();
});

// formCheckbox
formCheckbox.forEach((box) => {
  box.addEventListener('click', () => {
    updateUncheckAllBtnState();
    updateSearchBtnState();
  });
});

// checkAllBtn
checkAllBtn.addEventListener('click', (e) => {
  checkAllCheckboxes(e);
  updateSearchBtnState();
});

// uncheckAllBtn
uncheckAllBtn.addEventListener('click', (e) => {
  uncheckAllCheckboxes(e);
  updateSearchBtnState();
});

// resultContainer
resultContainer.addEventListener('click', () => {
  toggleHamburger(true);
});

// resultRace
resultRace.addEventListener('click', () => {
  toggleHamburger(true);
});

// resultFaction
resultFaction.addEventListener('click', () => {
  toggleHamburger(true);
});

// resultImg
resultImg.addEventListener('click', () => {
  toggleHamburger(true);
});

// searchBtnContainer
searchBtnContainer.addEventListener('click', () => {
  toggleHamburger(true);
});

// searchBtn
searchBtn.addEventListener('click', () => {
  updateAppLayout();
  toggleHamburger(true);

  const filteredRaces = filterRaces();

  getRandomResult(filteredRaces);
});

/* FUNCTIONS */
// toggleHamburgerBtn
const toggleHamburger = (forceClose) => {
  if (forceClose) {
    hamburgerBtn.classList.remove('active');
    topBar.classList.remove('active');
    midBar.classList.remove('active');
    bottomBar.classList.remove('active');
    formContainer.classList.remove('active');
  } else {
    hamburgerBtn.classList.toggle('active');
    topBar.classList.toggle('active');
    midBar.classList.toggle('active');
    bottomBar.classList.toggle('active');
    formContainer.classList.toggle('active');
  }
};

// updateUncheckAllBtnState
const updateUncheckAllBtnState = () => {
  uncheckAllBtn.disabled = true;

  formCheckbox.forEach((box) => {
    if (box.checked === true) {
      uncheckAllBtn.disabled = false;
    }
  });
};

// checkAllCheckboxes
const checkAllCheckboxes = (e) => {
  formCheckbox.forEach((box) => {
    box.checked = true;
  });

  updateUncheckAllBtnState();

  e.preventDefault();
};

// updateSearchBtnState
const updateSearchBtnState = () => {
  searchBtn.disabled = true;

  formCheckbox.forEach((box) => {
    if (box.checked === false) {
      searchBtn.disabled = false;
    }
  });
};

// uncheckAllCheckboxes
const uncheckAllCheckboxes = (e) => {
  formCheckbox.forEach((box) => {
    box.checked = false;
  });

  updateUncheckAllBtnState();

  e.preventDefault();
};

// filterRaces
const filterRaces = () => {
  const racesFiltered = { ...races };

  formCheckbox.forEach((box) => {
    const race = box.value;

    if (box.checked === true) {
      delete racesFiltered[race];
    }
  });

  return racesFiltered;
};

// updateAppLayout
const updateAppLayout = () => {
  resultContainer.classList.remove('start');
  searchBtnContainer.classList.remove('start');
};

// getRandomResult
const getRandomResult = (obj) => {
  const raceKeys = Object.keys(obj);
  const randomRace = raceKeys[Math.floor(Math.random() * raceKeys.length)];

  const randomRaceFactions = obj[randomRace].factions;
  const factionKeys = Object.keys(randomRaceFactions);
  const randomFactionKey =
    factionKeys[Math.floor(Math.random() * factionKeys.length)];
  const randomFaction = randomRaceFactions[randomFactionKey];

  const currentRace = randomFaction.race;
  const currentBanner = randomFaction.banner;
  const currentFaction = randomFaction.name;
  const currentBackground = obj[randomRace].background;

  resultContainer.classList.add('animation');
  backgroundImg.classList.add('animation');
  setTimeout(() => {
    resultContainer.classList.remove('animation');

    // Render Results
    resultImg.src = `${currentBanner}`;
    resultRace.innerHTML = `${currentRace}`;
    resultFaction.innerHTML = `${currentFaction}`;
    backgroundImg.src = `${currentBackground}`;
  }, 1200);
  setTimeout(() => {
    backgroundImg.classList.remove('animation');
  }, 1700);
};
