console.log('перевірка підключеного файлу script.js')
let itemsDiv = document.getElementById("items")
if (itemsDiv) {
    console.log(itemsDiv)

 for(let i=0; i < 100; i++) {
itemsDiv.innerHTML+='<div class = "item"></div>'
 }

  
} else {
    console.log('Блок товарів не знайдено')
}



let itemsArray = ['мотокоса 43',
    'газонокосилка',
    'акумолятор 54',
    'машина часу v.2',]




for (let i = 0; i < temsArray.length; i++) {
    console.log(i + '-й елемент:', itemsArray[i]) 
} 