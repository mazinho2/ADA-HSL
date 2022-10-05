const palavras = (phrase) => {
    let phr = phrase.split(' ');
    let new_phr = phr.reverse()

    return new_phr.join(' ')
}

let word = 'Anna Clara James';

console.log(palavras(word))
