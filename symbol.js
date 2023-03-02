var addition100 = 0; //코인샵, 심볼 선택권 등 이벤트를 통해 획득한 심볼. 이벤트 종료 후 etc로 이동
var addition80 = 0;
const etc = 180;

function setValue() {
  var xmlHttpRequests;
  if(window.XMLHttpRequest){// code for Firefox, Mozilla, IE7, etc.
    xmlHttpRequest = new XMLHttpRequest();
  }else{
    return;
  }

  xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
  xmlHttpRequest.setRequestHeader("ContentType", "text/html");
  xmlHttpRequest.send('');

  var serverDate = xmlHttpRequest.getResponseHeader("Date");
  var today = new Date(serverDate); //오늘 날짜

  var nowValue = 742; //2022.12.09 기준 성장치 742개
  var i = 0;
  let maxLevel = [0, 29, 76, 141, 224, 325, 444, 581, 736, 909, 1100]; //레벨별 필요 성장치
  var nowLevel = i; //심볼 레벨
  let publishedDate = new Date("2022/12/09");

  var dd = today.getDate();
  var mm = today.getMonth() + 1; //1월 = 0
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = new Date(yyyy + "/" + mm + "/" + dd);

  var difference = Math.abs(today - publishedDate);
  difference = difference / (1000 * 3600 * 24);

  var dailyCount = difference * 5; //일퀘 5개 //10개로 언제 늘어남?

  if (mm == "04" && dd == "01"){ //해당 코드 보신 분들은 비밀로 부탁드립니다!! 협조 감사드립니다 (_ _)
    var fool = 5;
  } else {
    var fool = 0;
  }

  var addition = addition100 + addition80 + etc + fool;
  nowValue = nowValue + dailyCount + addition;
  // console.log(nowValue);

  while (nowValue > maxLevel[i]) {
    nowValue = nowValue - maxLevel[i];
    i++;
    nowLevel = i;
  }

  document.getElementById("level").innerHTML = "Lv." + nowLevel;
  if (i >= 11) {
    var result = "COMPLETE!";
    document.getElementById("nowValue").style.color = "yellow";
    document.getElementById("nowValue").style.fontWeight = "bold";
    document.getElementById("nowValue").innerHTML = result;
    return;
  } else {
    var result = nowValue + "/" + maxLevel[i];
  }
  document.getElementById("nowValue").innerHTML = result;
}

oneHundred = document.getElementById("oneHundred");
eighty = document.getElementById("eighty");

valueBool = localStorage.getItem("valueToggle100");
valueBool = valueBool == "true";

valueBool2 = localStorage.getItem("valueToggle80");
valueBool2 = valueBool2 == "true";

if (valueBool == null){
  console.log('valueBool = null')
  valueBool = false;
}

if (valueBool2 == null){
  console.log('valueBool2 = null')
  valueBool2 = false;
}

valueBool = !valueBool;
valueToggle100();

valueBool2 = !valueBool2;
valueToggle80();

function valueToggle100() {
  valueBool = valueBool ? false : true;

  if (valueBool == true){
    addition100 = 100;
    oneHundred.classList.add("btn_focus");
    setValue();
    localStorage.setItem("valueToggle100",true);
  }
  if (valueBool == false){
    addition100 = 0;
    oneHundred.classList.remove("btn_focus");
    setValue();
    localStorage.setItem("valueToggle100",false);
  }
}

function valueToggle80() {
  valueBool2 = valueBool2 ? false : true;

  if (valueBool2 == true){
    addition80 = 80;
    eighty.classList.add("btn_focus");
    setValue();
    localStorage.setItem("valueToggle80",true);
  }
  if (valueBool2 == false){
    addition80 = 0;
    eighty.classList.remove("btn_focus");
    setValue();
    localStorage.setItem("valueToggle80",false);
  }
}