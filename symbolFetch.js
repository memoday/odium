const API_URL = "https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/";
const API_URL_CALCULATOR =
  "https://port-0-odium-fastapi-6g2llfhttxjl.sel3.cloudtype.app/calculator/";

const symbols = [
  {
    name: "odium",
    currentValueId: "odiumCurrentValue",
    currentLevelId: "odiumCurrentLevel",
  },
  {
    name: "shangrila",
    currentValueId: "shangrilaCurrentValue",
    currentLevelId: "shangrilaCurrentLevel",
  },
  {
    name: "arteria",
    currentValueId: "arteriaCurrentValue",
    currentLevelId: "arteriaCurrentLevel",
  },
  {
    name: "carcion",
    currentValueId: "carcionCurrentValue",
    currentLevelId: "carcionCurrentLevel",
  },
];

function fetchSymbol() {
  fetch(API_URL)
    .then((response) => response.json())
    .then(async (data) => {
      const additionData = getAddition();
      const updatedSymbols = await Promise.all(
        symbols.map(async (symbol) => {
          let symbolData = data[symbol.name];
          if (additionData[symbol.name] > 0) {
            symbolData = await fetchAdditionSymbol(
              symbol.name,
              additionData[symbol.name]
            );
            // console.log(`${symbol.name}Data: ${symbolData}`);
          }

          const currentValue = `${symbolData.currentValue}/${symbolData.currentLevelMaxValue}`;
          document.getElementById(symbol.currentValueId).innerHTML =
            currentValue;
          document.getElementById(
            symbol.currentLevelId
          ).innerHTML = `Lv.${symbolData.currentLevel}`;

          return { ...symbol, data: symbolData };
        })
      );

      // You can access the updated symbols here for further processing
      // console.log(updatedSymbols);
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
}

function fetchAdditionSymbol(symbol, counts) {
  const postData = {
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
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getAddition() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const additionData = {};

  checkboxes.forEach((checkbox) => {
    const isChecked = checkbox.checked;
    const value = isChecked
      ? parseInt(checkbox.getAttribute("additionValue"))
      : 0;
    const symbol = checkbox.getAttribute("symbol");

    additionData[symbol] = (additionData[symbol] || 0) + value;
  });

  return additionData;
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

// Trigger fetchSymbol when checkbox state changes
document.addEventListener("change", () => {
  saveCheckboxSettings();
  fetchSymbol();
});

// Load checkbox settings and fetchSymbol on page load
document.addEventListener("DOMContentLoaded", () => {
  loadCheckboxSettings();
  fetchSymbol();
});
