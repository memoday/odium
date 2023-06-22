const API_URL = "https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/";
const API_URL_CALCULATOR =
  "https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/calculator";

function fetchSymbol() {
  fetch(API_URL)
    .then((response) => response.json())
    .then(async (data) => {
      let odiumData = data.odium;
      let shangrilaData = data.shangrila;

      let additionData = getAddition();
      if (additionData.odiumAddition > 0) {
        odiumData = await fetchAdditionSymbol(
          "odium",
          additionData.odiumAddition
        );
        console.log(`odiumData: ${odiumData}`);
      }
      if (additionData.shangrilaAddition > 0) {
        shangrilaData = await fetchAdditionSymbol(
          "shangrila",
          additionData.shangrilaAddition
        );
        console.log(`shangrilaData: ${shangrilaData}`);
      }
      console.log("first finished");

      const odiumCurrentValue = `${odiumData.currentValue}/${odiumData.currentLevelMaxValue}`;
      const shangrilaCurrentValue = `${shangrilaData.currentValue}/${shangrilaData.currentLevelMaxValue}`;

      document.getElementById(
        "odiumCurrentLevel"
      ).innerHTML = `Lv.${odiumData.currentLevel}`;
      document.getElementById("odiumCurrentValue").innerHTML =
        odiumCurrentValue;

      document.getElementById(
        "shangrilaCurrentLevel"
      ).innerHTML = `Lv.${shangrilaData.currentLevel}`;
      document.getElementById("shangrilaCurrentValue").innerHTML =
        shangrilaCurrentValue;
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
}

function fetchAdditionSymbol(symbol, counts) {
  let postData = {
    symbolName: symbol,
    counts: counts,
  };

  return fetch(API_URL_CALCULATOR, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("fetchAdditionSymbol Finished");
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getAddition() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let odiumAddition = 0;
  let shangrilaAddition = 0;

  checkboxes.forEach((checkbox) => {
    const isChecked = checkbox.checked;
    let value = isChecked
      ? parseInt(checkbox.getAttribute("additionValue"))
      : 0;
    if (checkbox.getAttribute("symbol") == "odium") {
      odiumAddition += value;
    } else if (checkbox.getAttribute("symbol") == "shangrila") {
      shangrilaAddition += value;
    }
  });
  value = 0;
  return { odiumAddition: odiumAddition, shangrilaAddition: shangrilaAddition };
}

function saveCheckboxSettings() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkboxSettings = {};

  checkboxes.forEach((checkbox) => {
    const id = checkbox.id;
    const isChecked = checkbox.checked;

    checkboxSettings[id] = isChecked;
  });

  localStorage.setItem("checkboxSettings", JSON.stringify(checkboxSettings));
}

function loadCheckboxSettings() {
  const checkboxSettings = JSON.parse(localStorage.getItem("checkboxSettings"));

  if (checkboxSettings) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      const id = checkbox.id;
      const isChecked = checkboxSettings[id];

      checkbox.checked = isChecked;
    });
  }
}

// Event listener to save checkbox settings when any checkbox is changed
document.addEventListener("change", saveCheckboxSettings);
document.addEventListener("change", fetchSymbol);

// Load checkbox settings when the page loads
document.addEventListener("DOMContentLoaded", loadCheckboxSettings);
