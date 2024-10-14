function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string and compare with the original cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Test the function
const input = prompt("Enter a string: ");
if (isPalindrome(input)) {
    console.log(`${input} is a palindrome.`);
} else {
    console.log(`${input} is not a palindrome.`);
}
