 function countvowel(str) {

    let count = 0;

 for (const char of str) {
    console.log(char);

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }

 
 }
}

const countVOW = (str) => {
    let count = 0;

    for (const char of str) {
        console.log(char);

        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    return count;
}