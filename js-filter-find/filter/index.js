// filter function

const numbers = [1, 3, 6, 8, 10, 13, 16];

// greater than 9 

// const filteredNumbers = numbers.filter(filterNumbers);
//function filterNumbers(number) {
//  if(number > 2) {
//    return true;
//}
//}

// get even nr  
const filteredNumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true;
    }
});

/*
function filterNumbers(number) {
    if(number  % 2 === 0) {
        return true;
    }
}*/
console.log(numbers);

console.log(filteredNumbers);