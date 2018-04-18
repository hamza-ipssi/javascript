/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */
function leet(input) {
    var output = input.split('');
    var count = output.length - 1;
    var outputText = '';
    for (var i = 0; i < output.length; i++) {
        output[0] = output[i].replace(' ', '');
        if (output[i] === output[count]) {
            output[count] = output[i].replace(' ', '');
        }
        output[i] = output[i].replace('t', '7');
        output[i] = output[i].replace('i', '1');
        output[i] = output[i].replace('s', '5');
        output[i] = output[i].replace('e', '3');
        output[i] = output[i].replace('g', '6');
        output[i] = output[i].replace('o', '0');
        output[i] = output[i].replace('b', '8');
        output[i] = output[i].replace('a', '4');
        outputText = outputText+output[i];
    }
    return outputText;
}
var str1 = ' this is the 42 string'
/* Testing Part */

var str1 = ' this is the 42 string'
var str2 = 'this is the string containing foo bar '

if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}
