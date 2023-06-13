function setValue() {
  fetch("https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/")
    .then((response) => response.json())
    .then((data) => {
      const odiumData = data.odium;
      const shangrilaData = data.shangrila;
      const currentValue = `${odiumData.currentValue}/${odiumData.currentLevelMaxValue}`;
      document.getElementById(
        "currentLevel"
      ).innerHTML = `Lv.${odiumData.currentLevel}`;
      document.getElementById("nowValue").innerHTML = currentValue;
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:");
    });
}
