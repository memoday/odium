const historyData = [
  { label: "230616 일일퀘스트 보상", listId: "symbolHistory" },
  { label: "230610 쇼케이스 보상", listId: "symbolHistory" },
];

const symbolData = [
  {
    label: "오디움 교환권 (70)",
    symbol: "odium",
    additionValue: "70",
    listId: "bossCoinShop",
  },
  {
    label: "도원경 교환권 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "bossCoinShop",
  },
  {
    label: "6일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "8일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "13일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "15일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "20일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "22일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "27일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "34일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "36일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "38일차 (10)",
    symbol: "shangrila",
    additionValue: "10",
    listId: "identisk",
  },
  {
    label: "41일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "43일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "48일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
  {
    label: "50일차 (20)",
    symbol: "shangrila",
    additionValue: "20",
    listId: "identisk",
  },
  {
    label: "52일차 (10)",
    symbol: "shangrila",
    additionValue: "10",
    listId: "identisk",
  },
  {
    label: "55일차 (40)",
    symbol: "shangrila",
    additionValue: "40",
    listId: "identisk",
  },
];

function updateSidebar() {
  historyData.forEach((item, index) => {
    const { label, symbol, additionValue, listId } = item;
    const ulElement = document.getElementById(listId);
    const liElement = document.createElement("li");
    const labelElement = document.createElement("label");
    labelElement.textContent = label;

    liElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });

  symbolData.forEach((item, index) => {
    const { label, symbol, additionValue, listId } = item;
    const ulElement = document.getElementById(listId);
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.id = `checkbox${index}`;
    checkboxElement.setAttribute("symbol", symbol);
    checkboxElement.setAttribute("additionValue", additionValue);
    const labelElement = document.createElement("label");
    labelElement.htmlFor = `checkbox${index}`;
    labelElement.textContent = label;
    labelElement.classList.add("checkbox-label");

    liElement.appendChild(checkboxElement);
    liElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });
}

const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("open");
});
