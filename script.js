const $ = element => document.querySelector(element)
const $all = element => document.querySelectorAll(element)

let btn = $(".boekButton")
let begin = $("#containerBegintijd")
let eind = $("#containerEindtijd")
let arrow = $(".more2")
let btnText = $(".reserveer")
let tijden = $all(".timeAvailable")
let tijden2 = $all(".timeAvailable2")
let tijdenAlle = $all(".time")

btn.addEventListener("click", showTijd)
for (tijd of tijden) {tijd.addEventListener('click', buttonComesDown)}
for (tijd2 of tijden2) {tijd2.addEventListener('click', buttonComesDown2)}

function showTijd(){
    if(btnText.innerHTML == "Ga verder"){
        eind.style.height = "6rem"
        arrow.style.rotate = "90deg"
        eind.style.marginBottom = "1rem"
    } else {
        begin.style.height = "5rem"
        arrow.style.rotate = "90deg"
    }
}

function buttonComesDown(){
    if(btnText.innerHTML == "Reserveer"){
        btnText.innerHTML = "Ga verder"
        arrow.style.rotate = "0deg"
        btn.style.top = "4.2rem"
        btn.style.backgroundColor = "rgb(245, 245, 245)"
        btn.style.boxShadow = "inset 0px 0px 4px 0px black"
        btnText.style.color = "black"
        arrow.style.fill = "black"
    }
}

function buttonComesDown2(){
    arrow.style.rotate = "0deg"
    btnText.innerHTML = "Reserveer!"
    btn.style.top = "10.75rem"
}

function tijdStyle(){
    tijdenAlle.style.border = "solid 1px black"
}

function done(){
    if(btnText.innerHTML == "Reserveer!"){
    } 
}

function timeStyle(arrayNum){
    tijdenAlle[arrayNum].style.backgroundColor = "rgb(40, 40, 40)"
    tijdenAlle[arrayNum].style.color = "white"
    tijdenAlle[arrayNum].style.boxShadow = "inset 0px 0px 5px 2px black"
}

for (let index = 0; index < tijdenAlle.length; index++) {
    tijdenAlle[index].addEventListener("click", () => { timeStyle(index) })
}










// function checkboxCountAndHighlight(checkbox, parentElement, rl, naam, color) {
//     let progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;

//     if(parentElement === rl) {
//             checkbox.closest(".rl-card").classList.toggle("rl-card-border");
//             countHighlighter(naam, parentElement, progress, color);
//     }
// }

// checkboxCountAndHighlight(checkbox, parentElement, "rl-waarneembaar", "waarneembaar", "countColor")

