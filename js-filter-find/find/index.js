const people = [{ id: 1, name: "Alice"}, { id: 2, name: "Anders"}, { id: 3, name: "Mari"}];


const person = people.find((person) => {
    if(person.id === 1) {
        return true;
    }
});


/*



const person = people.find(function(person) {
    if(person.id === 1) {
        return true;
    }
});





const person = people.find(findPerson);

function findPerson(person) {
    if(person.id === 2) {
        return true;
    }
}
*/
console.log(person);