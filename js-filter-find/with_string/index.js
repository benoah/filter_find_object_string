const names  = ["Alice", "Anders", "Ben",  "Mari", "Marie", "Xander"];



const filteredNames = names.filter((name) => name.toLowerCase().includes("a"));


/*
function filterNames(name) {
    if(name.toLowerCase().includes("a")) {
    return true;
    }
}
*/

console.log(names);
console.log(filteredNames);