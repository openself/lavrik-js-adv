import {watchObj, EmailParser} from './hw02_module';

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
/* 
    в консоли: 
    innerHTML <strong>HTML</strong><em>Changed</em
*/

cleverDiv.style.color = 'red';
/* 
    весь текст стал красным
    в консоли: 
    color red
*/

console.log(cleverDiv.innerHTML)

cleverDiv.querySelector('em').style.color = 'green';
/* 
    em стал зелёным
    в консоли ничего не добавилось

    // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/

cleverDiv.classList.add('some')
