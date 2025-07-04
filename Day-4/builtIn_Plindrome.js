function ispalindrome(str){
    const cleaned=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
    const reversed=cleaned.split("").reverse().join("");
    return cleaned===reversed;
}
console.log(ispalindrome("madam"));
console.log(ispalindrome("12334333"))
