let date = parseInt(prompt(`Enter a date :`));
let month = prompt(`Enter a month :`);
let year = prompt(`Enter a year :`);
let output;
let code, div = 0, sum = year % 100;
// century codes
let cen = () => {
    if (year <= 1800) {
        code = 4;
    }
    else if (year <= 1900) {
        code = 2;
    }
    else if (year <= 2000) {
        code = 0;
    }
    else {
        code = 6;
    }
    return code;
}
// month codes
let mon = () => {
    if (month == 1) {
        return 0;
    }
    else if (month == 2) {
        return 3;
    }
    else if (month == 3) {
        return 3;
    }
    else if (month == 4) {
        return 6;
    }
    else if (month == 5) {
        return 1;
    }
    else if (month == 6) {
        return 4;
    }
    else if (month == 7) {
        return 6;
    }
    else if (month == 8) {
        return 2;
    }
    else if (month == 9) {
        return 5;
    }
    else if (month == 10) {
        return 0;
    }
    else if (month == 11) {
        return 3;
    }
    else if (month == 12) {
        return 5;
    }
}

let fun = () => {
    return div = parseInt(sum / 4);
}

output = sum + fun() + cen() + mon() + date;
let final = parseInt(output % 7);
// Day codes 
let day = () => {
    if (final == 0) {
        return "Sunday";
    }
    else if (final == 1) {
        return "Monday";
    }
    else if (final == 2) {
        return "Tuesday";
    }
    else if (final == 3) {
        return "Wednesday";
    }
    else if (final == 4) {
        return "Thursday";
    }
    else if (final == 5) {
        return "Friday";
    }
    else {
        return "Saturday";
    }
}

console.log(`The day of the given date ${date}/${month}/${year} is ${day()}`);