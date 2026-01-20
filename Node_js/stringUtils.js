function capitalize(str) {
    if (!str || typeof str !== "string") return "";
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if (!str || typeof str !== "string") return "";
    return str.split("").reverse().join("");
}

function countVowels(str) {
    if (!str || typeof str !== "string") return 0;
    return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = {
    capitalize,
    reverseString,
    countVowels
};
