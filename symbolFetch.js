fetch("https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/")
  .then((response) => response.json())
  .then((data) => {
    const odiumData = data.odium;
    const shangrilaData = data.shangrila;
    const currentValue = `${odiumData.currentValue}/${odiumData.currentLevelMaxValue}`;
    const shangrilaCurrentValue = `${shangrilaData.currentValue}/${shangrilaData.currentLevelMaxValue}`;

    document.getElementById(
      "odiumCurrentLevel"
    ).innerHTML = `Lv.${odiumData.currentLevel}`;
    document.getElementById("odiumCurrentValue").innerHTML = currentValue;

    document.getElementById(
      "shangrilaCurrentLevel"
    ).innerHTML = `Lv.${shangrilaData.currentLevel}`;
    document.getElementById("shangrilaCurrentValue").innerHTML =
      shangrilaCurrentValue;
  })
  .catch((error) => {
    console.error("Error occurred while fetching data:");
  });
