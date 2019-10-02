const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decodedWord = "";
    let binWord = "";

    for(let i = 0; i < expr.length; i += 10){
        binWord = expr.substr(i,10);

        if(binWord == "**********"){
            decodedWord += " "; 
        } else{
        decodedWord += decodeSymbol(binWord);
        }   
        
    }
    return decodedWord;
}


function decodeSymbol(codeLet){
    let decodedLet;
    let binSymbol;
    let morseLet = "";

    for(let i = 0; i < 10; i += 2){
        binSymbol = codeLet.substr(i, 2);
        if(binSymbol == "10"){
            morseLet += ".";
        }else if(binSymbol == "11"){
            morseLet += "-";
        }
        decodedLet = MORSE_TABLE[morseLet];
    }

    return decodedLet;
}


module.exports = {
    decode
}