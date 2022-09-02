function getFullName(person: 
    {
    firstName: string;
    lastName: string;
}) 
{
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'Vishal',
    lastName: 'Pandey',
};

console.log(getFullName(person));
