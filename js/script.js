console.log('перевірка підключеного файлу script.js')
let itemsDiv = document.getElementById("items")
if (itemsDiv) {
    console.log(itemsDiv)

 for(let i=0; i < 100; i++) {
itemsDiv.innerHTML+='<div class = "item"></div>'
 }

    itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
} else {
    console.log('Блок товарів не знайдено')
}