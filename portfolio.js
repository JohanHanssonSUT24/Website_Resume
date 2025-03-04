fetch("https://api.github.com/users/JohanHanssonSUT24/repos")
  .then((response) => response.json())
  .then((repos) => {
    let portfolioHTML = "<h1>Tidigare projekt</h1>";
    repos.forEach((repo) => {
      portfolioHTML += `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>

        `;
    });
    document.querySelector(".portfolio-box").innerHTML = portfolioHTML;
  })
  .catch((error) => {
    console.log("Error fetching GitHub repos", error);
    document.querySelector(".portfolio-box").innerHTML =
      "<p>Fel vid hämtning av projekt</p>";
  });
