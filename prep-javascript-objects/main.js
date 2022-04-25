const person = {
  firstName: 'Shrek',
  lastName: 'Ogre',
  hobby: 'Mudbaths'
};
console.log('person:', person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The persons full name is:', fullName);

person.job = 'Ruler';
console.log('The persons job is:', person.job);

person.previousJob = 'Monster';
console.log('The persons previous job:', person.previousJob);

console.log('person', person);
