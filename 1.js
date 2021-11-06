//Задание на рефакторинг
function findLastInneringInString(string, firstElem, secondElem){
    const usingString = string.substr(1);//т.к. первый символ игнорируется в изначальном коде
    return Math.max(usingString.lastIndexOf(firstElem[0]), usingString.lastIndexOf(secondElem[0]))
}
