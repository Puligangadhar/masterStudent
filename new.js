let userInputEl = document.getElementById("userInput");
let errorMessage = "*Please Provide Valid Number";
let arr = [];
var localData = JSON.parse(localStorage.getItem("storeData")) || [];
arr = localData || [];
console.log("arr", arr);
function save() {
  let text = "";
  for (let i = 0; i < localData.length; i++) {
    text += `<div >
  
    <div>${localData[i].user}-${localData[i].userData} </div>
    </div>
    `;
  }
  document.getElementById("ouptput").innerHTML = text;
}

function sendMsgToStudent() {
  let inputValue = userInputEl.value;
  var regex = /^[0-9\%*+=\-]+$/.test(inputValue);
  var regex2 = /^[a-zA-z]+$/.test(inputValue);

  arr.push({ user: "MASTER", userData: inputValue });
  localStorage.setItem("storeData", JSON.stringify(arr));
  save();
  if (regex) {
    getReplyFromStudent(eval(inputValue));
    save(localData);
  } else {
    if (regex2) {
      // getReplyFromStudent(inputValue)
    } else {
      getReplyFromStudent(errorMessage);
      save(localData);
    }
  }

  userInputEl.value = "";
}
function getReplyFromStudent(data) {
  arr.push({ user: "STUDENT", userData: data });
  localStorage.setItem("storeData", JSON.stringify(arr));
}
