/* ------------ Heart Count -------------- */
const allHearts = document.getElementsByClassName("heart");

function getInnerText(id) {
    const getEl = document.getElementById(id);
    const getText = parseInt(getEl.innerText);
    return getText;
}

for (const heart of allHearts) {
    heart.addEventListener("click", function(){
        const heartCount = getInnerText("heart-count");
        const newCount = heartCount + 1;
        document.getElementById("heart-count").innerText = newCount; 
    })
}