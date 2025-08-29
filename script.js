/* ------------ Heart Count Functionality -------------- */
const allHearts = document.getElementsByClassName("heart");

function getInnerText(id) {
  const getEl = document.getElementById(id);
  const getText = parseInt(getEl.innerText);
  return getText;
}

for (const heart of allHearts) {
  heart.addEventListener("click", function () {
    const heartCount = getInnerText("heart-count");
    const newCount = heartCount + 1;
    document.getElementById("heart-count").innerText = newCount;
  });
}

/* ------------ Call Button Functionality -------------- */
const callData = [];

const callBtns = document.getElementsByClassName("call-btn");

for (const btn of callBtns) {
  btn.addEventListener("click", function () {
    const card = btn.parentNode.parentNode;

    const serviceName = card.querySelector(".service-name").innerText;
    const hotlineNumber = card.querySelector(".hotline").innerText;

    const coinCount = getInnerText("coin-count");

    if (coinCount < 20) {
      alert(
        "⚠You don't have enough coins. At least 20 coins are needed to make a call"
      );
      return;
    }

    const newCoinNum = coinCount - 20;
    alert("📞 Calling " + serviceName + " " + hotlineNumber + "...");
    document.getElementById("coin-count").innerText = newCoinNum;

    const allData = {
      name: serviceName,
      hotline: hotlineNumber,
      time: new Date().toLocaleTimeString(),
    };
    callData.push(allData);

    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of callData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
            class="bg-gray-100 p-3 flex justify-between items-center rounded-lg mt-2"
          >
            <div>
              <h1 class="font-semibold">${data.name}</h1>
              <p class="text-[#5c5c5c]">${data.hotline}</p>
            </div>
            <p class="text-sm font-medium">${data.time}</p>
          </div>
        `;
      historyContainer.appendChild(div);
    }
  });
}

/* ------------ Clear History -------------- */
document.getElementById("clear-history").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
});

/* ------------ Copy Number -------------- */
const copyBtns = document.getElementsByClassName("copy-btn");

for (const btn of copyBtns) {
  btn.addEventListener("click", function () {
    const card = btn.parentNode.parentNode;

    const hotlineNumber = card.querySelector(".hotline").innerText.trim();

    navigator.clipboard.writeText(hotlineNumber)
    .then(function () {
          alert("📋 Copied: " + hotlineNumber);
        });

    const copyCount = getInnerText("copy-count");
    const newCount = copyCount + 1;
    document.getElementById("copy-count").innerText = newCount;
  })
}
