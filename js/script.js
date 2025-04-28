
let itemsArray = [
    {
      title: "Мотокоса 9000",
      image: "img/83106-22-1000x1000_1-600x600.jpg",
      partsPay: [
        { img: "img/4427420521_w600_h600_4427420521.webp", count: 6 },
        { img: "img/4d15326d3a1a5432186d384d396cb85421a4dd82.png", count: 8 }
      ],
      priceOld: 9000,
      priceNew: 7999,
      priceCoupon: 7654
    },
    {
      title: "Газонокосарка ",
      image: "img/",
      partsPay: [
        { img: "img/monobank.png", count: 3 },
        { img: "img/privatbank.png", count: 6 }
      ],
      priceOld: 6500,
      priceNew: 5999,
      priceCoupon: 5700
    },
    {
      title: "Акумуляторна дриль ",
      image: "img/",
      partsPay: [
        { img: "img/monobank.png", count: 2 },
        { img: "img/privatbank.png", count: 4 }
      ],
      priceOld: 4800,
      priceNew: 4299,
      priceCoupon: 4100
    },
    {
      title: "Шуруповерт ",
      image: "img/",
      partsPay: [
        { img: "img/monobank.png", count: 5 },
        { img: "img/privatbank.png", count: 7 }
      ],
      priceOld: 7200,
      priceNew: 6599,
      priceCoupon: 6400
    },
    {
      title: "Електропила STIGA",
      image: "img/",
      partsPay: [
        { img: "img/monobank.png", count: 4 },
        { img: "img/privatbank.png", count: 6 }
      ],
      priceOld: 8200,
      priceNew: 7499,
      priceCoupon: 7200
    }
  ];
  
  let itemsDiv = document.getElementById("items");
  
  
  itemsArray.forEach(item => {
    itemsDiv.innerHTML += `
      <div class="item">
        <div class="item-title">${item.title}</div>
  
        <div class="item-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
  
        <div class="parts-pay">
          <div><img src="${item.partsPay[0].img}" alt="">${item.partsPay[0].count}</div>
          <div><img src="${item.partsPay[1].img}" alt="">${item.partsPay[1].count}</div>
        </div>
  
        <div class="price">
          <div><span>${item.priceOld} </span><sup>грн</sup></div>
          <div><span>${item.priceNew} </span><sup>грн</sup></div>
        </div>
  
        <div class="price bonus">
          <div>ціна за купоном</div>
          <div><span>${item.priceCoupon} </span><sup>грн</sup></div>
        </div>
      </div>
    `;
  });
