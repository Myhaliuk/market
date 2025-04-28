
let itemsArray = ['мотокоса 43',
    'газонокосилка',
    'акумолятор 54',
    'машина часу v.2',]

let itemsDiv = document.getElementById("items")

if (itemsDiv) {

 itemsArray.forEach((item) => {

itemsDiv.innerHTML +=`<div class = "item">${item}</div>`

})

} else {
    console.log('Блок товарів не знайдено')
}
