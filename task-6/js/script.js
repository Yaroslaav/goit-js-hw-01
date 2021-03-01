'use strich'

let total1 = 0;
let input = Number(prompt('Введіть число'));
while(input){
	total1 += input;
	alert('Загальна сума чисел дорівнює ' + total1);
	console.log('Загальна сума чисел дорівнює ' + total1);
	input = Number(prompt('Введіть число'));
};

