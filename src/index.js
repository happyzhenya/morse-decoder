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
    // write your solution here
   
   
  let newExpr=''
 
   let str='';
   let StrRes='';
for (let i=0; i<expr.length; i+=10)
{
    newExpr=expr.slice(i, i+10)


if (newExpr==='**********'){
    StrRes+=' ';
}else

{
for (let j=0; j<newExpr.length; j+=2){
    if(newExpr[j]+''+newExpr[j+1]==="10"){
        str+='.';
    }
    else {
        if(newExpr[j]+''+newExpr[j+1]==='11'){
            str+='-'
        }

    }
}
StrRes+=MORSE_TABLE[str];
str='';



}
}
return StrRes;
   
    

} 

module.exports = {
    decode
}