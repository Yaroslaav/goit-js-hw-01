'use strich'
let countryprice;
let countryName = (prompt('Введіть назву країни в яку хочете відправити товар: ')).toLowerCase();
console.log(countryName);


switch(countryName){

   case 'китай':
      countryprice = 100;
      console.log('Доставка в', countryName, 'буде коштувати', countryprice, 'кредитів');
      break
   case 'чилі':
      countryprice = 250;
      console.log('Доставка в', countryName, 'буде коштувати', countryprice, 'кредитів');
      break
   
   case 'австралія':
      countryprice = 170;
      console.log('Доставка в', countryName, 'буде коштувати', countryprice, 'кредитів');
      break

   case 'індія':
      countryprice = 80;
      console.log('Доставка в', countryName, 'буде коштувати', countryprice, 'кредитів');
      break

   case 'ямайка':
      countryprice = 120;
      console.log('Доставка в', countryName, 'буде коштувати', countryprice, 'кредитів');
      break

   default:
      alert('У вашій країні доставка недоступна');
}