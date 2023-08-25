const historyData = [
  { label: "230827 썬데이 메이플", listId: "symbolHistory" },
  { label: "230825 신입 디렉터 특별 선물", listId: "symbolHistory" },
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
    label: "3단계 (20)",
    symbol: "carcion",
    additionValue: "20",
    listId: "identiskFestival",
  },
  {
    label: "8단계 (20)",
    symbol: "carcion",
    additionValue: "20",
    listId: "identiskFestival",
  },
  {
    label: "13단계 (20)",
    symbol: "carcion",
    additionValue: "20",
    listId: "identiskFestival",
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
    const checkboxContainerElement = document.createElement("label");
    const checkboxElement = document.createElement("input");
    checkboxContainerElement.classList.add("checkbox-container");
    checkboxElement.type = "checkbox";
    checkboxElement.id = `checkbox${index}`;
    checkboxElement.setAttribute("symbol", symbol);
    checkboxElement.setAttribute("additionValue", additionValue);
    const labelElement = document.createElement("label");
    labelElement.htmlFor = `checkbox${index}`;
    labelElement.textContent = label;
    labelElement.classList.add("checkbox-label");
    const spanElement = document.createElement("span");
    spanElement.classList.add("checkmark");

    liElement.appendChild(checkboxContainerElement);
    checkboxContainerElement.appendChild(checkboxElement);
    checkboxContainerElement.appendChild(spanElement);
    checkboxContainerElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });
}

const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("open");
});
