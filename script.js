let currentPageUrl = "https://swapi.dev/api/people/";

window.onload = async () => {
  try {
    await loadCharacters(currentPageUrl);
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar cards");
  }
};

async function loadCharacters(url) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = ""; //limpar os resultados anteriores

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    responseJson.results.forEach((character) => {
      const card = document.createElement("div");
      card.style.backgroundImage = `url('https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20131021194536&path-prefix=it')`;
      card.className = "cards";

      const characterNameBG = document.createElement("div");
      characterNameBG.classList = "character-name-bg";

      const characterName = document.createElement("span");
      characterName.className = "character-name";
      characterName.innerHTML = `${character.name}`;

      characterNameBG.appendChild(characterName);
      card.appendChild(characterNameBG);

      mainContent.appendChild(card);
    });

    currentPageUrl = url;

  } catch (error) {
    console.log(error);
    alert("Erro ao carregar os personagens");
  }
}
