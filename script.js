// Rules
// 3 alphabet word
// consonent vowel consonent
// avoid q w x y z
// no letter should be in alphabetic order
// should not end with H
const button = document.querySelector("#generate");

function generateRandomString() {
    const display = document.querySelector("#list")
    display.innerHTML = "";
    const consonants1 = 'bcdfghjklmnprstv';
    const consonants2 = 'bcdfgjklmnprstv';
    const vowel = "aeiou"
    const constantlength1 = consonants1.length;
    const consonantlength2 = consonants2.length;
    const vowellength = vowel.length;

    for (let i = 0; i <=10; i++) {
        const one = consonants1.charAt(Math.floor(Math.random()*constantlength1));
        const two = vowel.charAt(Math.floor(Math.random()*vowellength));
        const three = consonants2.charAt(Math.floor(Math.random()*consonantlength2));
        result = one+" "+two+" "+three;
        const item = document.createElement('p');
        item.innerText = result.toUpperCase();
        display.appendChild(item);
        console.log(result)
    }
    return "";
}
button.addEventListener('click',generateRandomString)
