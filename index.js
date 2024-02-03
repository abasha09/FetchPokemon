const fetchData = async () => {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const imgElement = document.getElementById("pokemonSprite");
    if (!response.ok) {
      const errorMessageElement = document.getElementById("error");
      errorMessageElement.textContent = "Pokemon name is incorrect!";
      errorMessageElement.style.display = "block";

      // Clear the image

      imgElement.src = "";
      imgElement.style.display = "none";
    }

    const data = await response.json();

    document.getElementById("error").style.display = "none";
    const pokemonSprite = data.sprites.front_default;

    // Display the image
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
};
