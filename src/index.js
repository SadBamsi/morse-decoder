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
        let length = expr.length;
        let res = []
        expr = expr.split('');
        for (let i = 0; i < length; i += 10) {
            let letter = [];
            let substring = expr.splice(0, 10);
            if (substring.join('') == '**********') {
                res.push(' ');
                continue
            };
            for (let j = 0; j < 10; j += 2) {
                let symbol = substring.splice(0, 2).join('');
                if (symbol != '00') {
                    symbol == '10' ? letter.push('.') : letter.push('-')
                }
            }
            res.push(MORSE_TABLE[letter.join('')])
        }
        return res.join('');
}

module.exports = {
    decode
}