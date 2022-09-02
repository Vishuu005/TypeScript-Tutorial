function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'Vishal',
    lastName: 'Pandey'
};
console.log(getFullName(person));
