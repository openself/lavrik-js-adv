import 'babel-polyfill'

export function wordsCount(str) {
    const strCleared = cleanText(str)
    return strCleared.split(' ').length;
}

export function* getWords(str) {
    const strCleared = cleanText(str)
    let start = 0;
    let current = strCleared.indexOf(' ', start);

    while(current !== -1){
        yield strCleared.substr(start, current - start);
        start = current + 1;
        current = strCleared.indexOf(' ', start);
    }
}

const cleanText = str => {
    str = str.trim() // exclude  start and end white-space
    str = str.replace(/[ ]{2,}/gi, ' ') // 2 or more space to 1
    str = str.replace(/\n /, '\n') // exclude newline with a start spacing

    return str
}