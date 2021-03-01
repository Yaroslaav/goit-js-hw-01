'use strich'

const ADMIN_PASSWORD = 'parol';
let message;
 message = prompt('Введіть пароль: ');
//  console.log(message);

 if(message==null){
   console.log('Скасовано користувачем!');
 }
 if(message=='parol'){
    console.log('Ласкаво просимо!');
 }else{
   console.log('Доступ заборонений, невірний пароль!');
 }
 alert(message)