let currentPageUrl = 'https://swapi.dev/api/people/';
const characterImages = {
  "Luke Skywalker": "https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20131021194536&path-prefix=it",
  "C-3PO": "https://static.wikia.nocookie.net/ptstarwars/images/9/94/C3PO_EP3.jpg/revision/latest?cb=20100527202344",
  "R2-D2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Q309hyVpH2vBfLMDV7Z8cZj_QHKbT_6_-Q&s",
  "Darth Vader": "https://sociedadejedi.com.br/wp-content/uploads/2016/01/Vader1.jpg",
  "Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
  "Owen Lars": "https://assets.mycast.io/actor_images/actor-owen-lars-360790_large.jpg?1644316847",
  "Beru Whitesun lars": "https://static.wikia.nocookie.net/ptstarwars/images/2/2a/528px-Beru_headshot2.jpg/revision/latest?cb=20090113170251",
  "R5-D4": "https://static.wikia.nocookie.net/ptstarwars/images/2/2c/R5d4.jpg/revision/latest?cb=20060701231838",
  "Biggs Darklighter": "https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406",
  "Obi-Wan Kenobi": "https://upload.wikimedia.org/wikipedia/pt/9/94/Obi-wan_headshot.jpg",
  "Anakin Skywalker": "https://static.wikia.nocookie.net/disney/images/5/50/Profile_-_Anakin_Skywalker.png/revision/latest?cb=20230907235703&path-prefix=pt-br",
  "Wilhuff Tarkin": "https://static.wikia.nocookie.net/ptstarwars/images/a/a9/250px-Tarkininfobox.jpg/revision/latest?cb=20110312234756",
  "Chewbacca": "https://static.wikia.nocookie.net/ptstarwars/images/7/7f/ChewbaccaTFAHS-Fathead.png/revision/latest?cb=20151218200951",
  "Han Solo": "https://static.wikia.nocookie.net/ptstarwars/images/0/01/Hansoloprofile.jpg/revision/latest?cb=20120222133702",
  "Greedo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cj8Wz-mxzk-1DCO-EJCLcpvZzBbaGcYyQg&s",
  "Jabba Desilijic Tiure": "https://static.wikia.nocookie.net/ptstarwars/images/7/7f/Jabba_SWSB.png/revision/latest?cb=20131130141607",
  "Wedge Antilles": "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
  "Jek Tono Porkins": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYViTmfzyWKFEb0vQR7s8CAZWsGFV1Yx20CA&s",
  "Yoda": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Cdb11EY02i7RGx-byeurbK10bVVLJYkvAA&s",
  "Palpatine": "https://upload.wikimedia.org/wikipedia/pt/8/8f/Emperor_RotJ.png",
  "Boba Fett": "https://static.wikia.nocookie.net/ptstarwars/images/5/58/BobaFettMain2.jpg/revision/latest?cb=20160131161035",
  "IG-88": "https://static.wikia.nocookie.net/starwars/images/f/fe/IG-88B-TESB40.png/revision/latest?cb=20211224193425",
  "Bossk": "https://static.wikia.nocookie.net/ptstarwars/images/d/d2/Bossk.jpg/revision/latest?cb=20091228170433",
  "Lando Calrissian": "https://static.wikia.nocookie.net/ptstarwars/images/7/7d/Lando_WoSW.jpg/revision/latest?cb=20160426234010",
  "Lobot": "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg?region=0%2C0%2C1560%2C878",
  "Ackbar": "https://cdn11.bigcommerce.com/s-2zs1uo/images/stencil/1280x1280/products/2124/13322/SW_Ackbar_Milestone_10__86347.1667854836.jpg?c=2",
  "Mon Mothma": "https://static.wikia.nocookie.net/ptstarwars/images/a/a7/Mon_Mothma.jpg/revision/latest?cb=20100108193656",
  "Arvel Crynyd": "https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349",
  "Wicket Systri Warrick": "https://static.wikia.nocookie.net/starwarsofthecaribbean/images/0/06/Wicket_wosw.jpg/revision/latest?cb=20101230232340",
  "Nien Nunb": "https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg?region=253%2C55%2C799%2C799",
  "Qui-Gon Jinn": "https://upload.wikimedia.org/wikipedia/en/a/ad/Qui-Gon_Jinn.png",
  "Nute Gunray": "https://static.wikia.nocookie.net/clonearmy/images/b/b6/Nutegunraygeonosis.jpg/revision/latest?cb=20120525200249",
  "Finis Valorum": "https://static.wikia.nocookie.net/ptstarwars/images/8/89/Valorum.jpg/revision/latest?cb=20060726033857",
  "Padmé Amidala": "https://static.wikia.nocookie.net/ptstarwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20100112010743",
  "Jar Jar Binks": "https://static.wikia.nocookie.net/ptstarwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest?cb=20110831204507",
  "Roos Tarpals": "https://static.wikia.nocookie.net/ptstarwars/images/8/86/Tarpals.jpg/revision/latest?cb=20100108212048",
  "Rugor Nass": "https://www.giantbomb.com/a/uploads/scale_medium/27/273442/2755987-1638768183-Bossn.jpg",
  "Ric Olié": "https://static.wikia.nocookie.net/starwars/images/6/6f/RicOlie1.png/revision/latest?cb=20130129043831",
  "Watto": "https://static.wikia.nocookie.net/ptstarwars/images/9/9d/WattoHS.png/revision/latest?cb=20210103042934",
  "Sebulba": "https://static.wikia.nocookie.net/star-wars-canon/images/f/f4/Sebulba-SWISE2010.jpg/revision/latest?cb=20181026125930",
  "Quarsh Panaka": "https://static.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png/revision/latest/scale-to-width/360?cb=20130126044005",
  "Shmi Skywalker": "https://static.wikia.nocookie.net/ptstarwars/images/5/55/Shim_Skywalker_1.jpg/revision/latest?cb=20150406193928",
  "Darth Maul": "https://upload.wikimedia.org/wikipedia/pt/5/50/Darth_Maul_profile.png",
  "Bib Fortuna": "https://static.wikia.nocookie.net/ptstarwars/images/3/33/BibFortunaHS-ROTJ.png/revision/latest?cb=20170809032301",
  "Ayla Secura": "https://static.wikia.nocookie.net/ptstarwars/images/4/4d/Aayla_Secura_SWE.png/revision/latest?cb=20190710143154",
  "Ratts Tyerel": "https://rpggamer.org/uploaded_images/RattsHS.jpg",
  "Dud Bolt": "https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg/revision/latest/thumbnail/width/360/height/360?cb=20061130092516",
  "Gasgano": "https://static.wikia.nocookie.net/ptstarwars/images/5/57/GasganoHS-SWE.jpg/revision/latest?cb=20130415170003",
  "Ben Quadinaros": "https://preview.redd.it/mzt2c4dyrjvy.png?auto=webp&s=def7b27e14ea619feeb48acc8d8c5104bde283ec",
  "Mace Windu": "https://static.wikia.nocookie.net/ptstarwars/images/4/4a/C%C3%A2non_Mace_Windu.jpg/revision/latest?cb=20160119173154",
  "Ki-Adi-Mundi": "https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg?region=0%2C0%2C1560%2C878",
  "Kit Fisto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkTt0UKEKmGNmmEXbvvI4QyScxwUDfe9fxA&s",
  "Eeth Koth": "https://static.wikia.nocookie.net/starwars/images/2/28/Eeth_Koth_TPM.png/revision/latest?cb=20131103212106",
  "Adi Gallia": "https://www.giantbomb.com/a/uploads/scale_medium/0/118/557015-adigallia.jpg",
  "Saesee Tiin": "https://static.wikia.nocookie.net/ptstarwars/images/6/68/Saesee_Tiin_Card_Trader.jpg/revision/latest?cb=20200129210959",
  "Yarael Poof": "https://static.wikia.nocookie.net/ptstarwars/images/8/83/YaraelPoof.jpg/revision/latest?cb=20120219200756",
  "Plo Koon": "https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg?region=0%2C49%2C1560%2C780",
  "Mas Amedda": "https://static.wikia.nocookie.net/ptstarwars/images/3/3f/Mas12432.jpg/revision/latest?cb=20090207141752",
  "Gregar Typho": "https://static.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg/revision/latest?cb=20090903192036",
  "Cordé": "https://static.wikia.nocookie.net/starwars/images/9/95/Corde-SWCTP.png/revision/latest?cb=20230908024847",
  "Cliegg Lars": "https://static.wikia.nocookie.net/ptstarwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20120731234539",
  "Poggle the Lesser": "https://static.wikia.nocookie.net/starwars/images/7/79/Poggle_Geo.jpg/revision/latest?cb=20080118201719",
  "Luminara Unduli": "https://static.wikia.nocookie.net/ptstarwars/images/7/7c/Luminara.jpg/revision/latest?cb=20081209084108",
  "Barriss Offee": "https://static.wikia.nocookie.net/ptstarwars/images/3/37/Barrisprofile2.jpg/revision/latest?cb=20090605051015",
  "Dormé": "https://static.wikia.nocookie.net/star-wars-legends/images/8/8a/Dorme-SWCT.png/revision/latest?cb=20200817035354",
  "Dooku": "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808",
  "Bail Prestor Organa": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/a/ad/Bail_organa_bio_pic.jpeg",
  "Jango Fett": "https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg?region=0%2C0%2C1560%2C878",
  "Zam Wesell": "https://www.starwarsnewsnet.com/wp-content/uploads/2025/01/Zam-Wesell.jpg",
  "Dexter Jettster": "https://static.wikia.nocookie.net/ptstarwars/images/8/83/Dexter_Jettster_%28Besalisk%29_FF44.jpg/revision/latest?cb=20100716180249",
  "Lama Su": "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest?cb=20080117165735",
  "Taun We": "https://static.wikia.nocookie.net/starwars/images/3/30/Taun_We-Databank.jpg/revision/latest?cb=20200902052514",
  "Jocasta Nu": "https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg?region=294%2C0%2C1656%2C1242",
  "R4-P17": "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg?region=314%2C0%2C1181%2C665",
  "Wat Tambor": "https://lumiere-a.akamaihd.net/v1/images/1-wat-tambor-bio-1_copy_279d4f2b.jpeg?region=0,0,1280,547",
  "San Hill": "https://static.wikia.nocookie.net/ptstarwars/images/4/4f/San_hill.jpg/revision/latest?cb=20060513142623",
  "Shaak Ti": "https://static.wikia.nocookie.net/ptstarwars/images/d/db/Shaak_Ti_Promo.jpg/revision/latest?cb=20090509230742",
  "Grievous": "https://static.wikia.nocookie.net/ptstarwars/images/d/de/Grievoushead.jpg/revision/latest?cb=20200709192001",
  "Tarfful": "https://static.wikia.nocookie.net/starwars/images/d/d9/Tarfful-TSWB.png/revision/latest?cb=20201025195948",
  "Raymus Antilles": "https://i.namu.wiki/i/-98QjnMQt2WRYD-lTzdKqqLwsKnz1QaiPpAxWSo5eVmk5XZEH6SX6bf6LDO7JSp80c1DG-mntzbtCPY9fAN64Q.webp",
  "Sly Moore": "https://i.pinimg.com/736x/11/e6/a9/11e6a919f6dffd082c0c5248fd43ee24.jpg",
  "Tion Medon": "https://static.wikia.nocookie.net/ptstarwars/images/4/43/Tion_Medon.jpg/revision/latest?cb=20120812124235"
};



window.onload = async () => {
  try {
    await loadCharacters(currentPageUrl);
  } catch (error) {
    console.log(error);
    alert('Erro ao carregar cards');
  }

  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', loadNextPage);

  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', loadPreviousPage);
};

async function loadCharacters(url) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Limpa os resultados anteriores

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    responseJson.results.forEach((character) => {
      const card = document.createElement("div");
      const imageUrl = characterImages[character.name] || 'https://via.placeholder.com/200x300?text=No+Image';
      card.style.backgroundImage = `url('${imageUrl}')`;
      
      card.className = "cards"
      const characterNameBG = document.createElement("div")
      characterNameBG.className = "character-name-bg"
      const characterName = document.createElement("span")
      characterName.className = "character-name"
      characterName.innerText = `${character.name}`
      characterNameBG.appendChild(characterName)
      card.appendChild(characterNameBG)
      card.onclick = () => {
        const modal = document.getElementById("modal")
        modal.style.visibility = "visible"
        const modalContent = document.getElementById("modal-content")
        modalContent.innerHTML = ''

        const characterImage = document.createElement("div")
        characterImage.style.backgroundImage = `url('${imageUrl}')`;

        characterImage.className = "character-image"

        const name = document.createElement("span")
        name.className = "character-details"
        name.innerText = `Nome: ${character.name}`

        const characterHeight = document.createElement("span")
        characterHeight.className = "character-details"
        characterHeight.innerText = `Altura: ${convertHeight(character.height)}`

        const mass = document.createElement("span")
        mass.className = "character-details"
        mass.innerText = `Peso: ${convertMass(character.mass)}`

        const eyeColor = document.createElement("span")
        eyeColor.className = "character-details"
        eyeColor.innerText = `Cor dos olhos: ${convertEyeColor(character.eye_color)}`

        const birthYear = document.createElement("span")
        birthYear.className = "character-details"
        birthYear.innerText = `Nascimento: ${convertBirthYear(character.birth_year)}`

        modalContent.appendChild(characterImage)
        modalContent.appendChild(name)
        modalContent.appendChild(characterHeight)
        modalContent.appendChild(mass)
        modalContent.appendChild(eyeColor)
        modalContent.appendChild(birthYear)
      }
      const mainContent = document.getElementById('main-content');
      mainContent.appendChild(card);

    });

    // Habilita ou desabilita os botões de acordo com a presença de URLs de próxima e página anterior
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');
    nextButton.disabled = !responseJson.next;
    backButton.disabled = !responseJson.previous;

    backButton.style.visibility = responseJson.previous ? "visible" : "hidden";

    currentPageUrl = url;
  } catch (error) {
    throw new Error('Erro ao carregar personagens');
  }
}

function hideModal() {
  const modal = document.getElementById("modal")
  modal.style.visibility = "hidden"
}

function convertEyeColor(eyeColor) {
  const cores = {
    blue: "azul",
    brown: "castanho",
    green: "verde",
    yellow: "amarelo",
    black: "preto",
    pink: "rosa",
    red: "vermelho",
    orange: "laranja",
    hazel: "avela",
    unknown: "desconhecida"
  };

  return cores[eyeColor.toLowerCase()] || eyeColor;
}

function convertHeight(height) {
  if (height === "unknown") {
    return "desconhecida";
  }
  
  return (height / 100).toFixed(2);
}

function convertMass(mass) {
  if (mass === "unknown") {
    return "desconhecido";
  }
  
  return `${mass} kg`;
}

function convertBirthYear(birthYear) {
  if (birthYear === "unknown") {
    return "desconhecido";
  }
  
  return birthYear;
}

async function loadNextPage() {
  if (!currentPageUrl) return;

  try {
    const response = await fetch(currentPageUrl);
    const responseJson = await response.json();

    await loadCharacters(responseJson.next);
  } catch (error) {
    console.log(error);
    alert('Erro ao carregar a próxima página');
  }
}

async function loadPreviousPage() {
  if (!currentPageUrl) return;

  try {
    const response = await fetch(currentPageUrl);
    const responseJson = await response.json();

    await loadCharacters(responseJson.previous);
  } catch (error) {
    console.log(error);
    alert('Erro ao carregar a página anterior');
  }
}
