// 1. mehsullarin ucuzdan bahaya siralanmasi

// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin

// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin

// 4. Json, fetch, api bunlar nedir nece isleyir



// .....TASK--1..... //
// 1. mehsullarin ucuzdan bahaya siralanmasi


let products = [
  {
     Id: "Pc",
   qiymet: 3500 
  },

  { 
    Id: "Iphone",
   qiymet: 2000 
  },

  {
     Id: "Lcd",
   qiymet: 700 
  },

  { 
    Id: "Telephone",
   qiymet: 800 
  },

];

products.sort((cox, az) => cox.qiymet - az.qiymet);
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].Id}: ${products[i].qiymet}`);
}






// .....TASK--2..... //
// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin

let cem = 0;
for (let i = 0; i < 5; i++) {

    let reqem = parseInt(Math.random() * 200);
    cem += reqem;
    console.log("Random reqemler:", reqem);
    
}

console.log("Random reqemlerin  cemi:", cem);







