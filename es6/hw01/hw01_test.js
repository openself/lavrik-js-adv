import {wordsCount, getWords} from './hw01_module'

let str = '  Всем  привет! Ура ура! '

console.log(wordsCount(str)); // 4

for(let word of getWords(str)){
    console.log(word);			// выводит 4 слова
}