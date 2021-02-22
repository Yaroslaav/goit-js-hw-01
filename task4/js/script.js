'use strich'

let credits = 23580;
let pricePerDroid = 3000;
let droids = Number(prompt('Введіть кількість дроідів'));
let totalsprice;

if(droids==0 || droids==null){
   console.log('Скасовано користувачем!');
}else{
   totalsprice = Number(pricePerDroid * droids);
   if(totalsprice>credits){
      console.log('Недостатньо коштів на рахунку!');
   }else{
      console.log('Ви купили', droids, 'дроїдів, на рахунку залишилося', credits-totalsprice)
   }
}