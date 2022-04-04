function reverseString(str){
    let newString = "";
    for (let i = str.length -1; i>=0; i--) {
        newString = newString + str[i];
        console.log(str[i]);
    }
    return newString;
}
const string = 'sujith';
const result = reverseString(string);
console.log(result);