// Sample array of developers
let developers = [
  { name: 'John', age: 30, profession: 'developer' },
  { name: 'Alice', age: 28, profession: 'admin' },
  // Add more data as needed
];

function printDevelopers() {
  console.log(developers);
}

function addData() {
  const name = prompt('Enter the name:');
  const age = parseInt(prompt('Enter the age:'));
  const profession = prompt('Enter the profession:');
  
  const newData = { name, age, profession };
  developers.push(newData);
  console.log('Data added successfully:', newData);
}

function removeAdmin() {
  developers = developers.filter(person => person.profession.toLowerCase() !== 'admin');
  console.log('Admins removed successfully.');
}

function concatenateArray() {
  const dummyArray = [{ name: 'Bob', age: 25, profession: 'designer' }, { name: 'Eve', age: 35, profession: 'analyst' }];
  const resultArray = developers.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

function averageAge() {
  const totalAge = developers.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / developers.length;
  console.log('Average Age:', avgAge.toFixed(2));
}

function checkAgeAbove25() {
  const isAbove25 = developers.some(person => person.age > 25);
  console.log('At least one person above 25:', isAbove25);
}

function uniqueProfessions() {
  const professions = [...new Set(developers.map(person => person.profession))];
  console.log('Unique Professions:', professions);
}

function sortByAge() {
  developers.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', developers);
}

function updateJohnsProfession() {
  const johnIndex = developers.findIndex(person => person.name.toLowerCase() === 'john');
  if (johnIndex !== -1) {
    developers[johnIndex].profession = 'manager';
    console.log("John's profession updated to 'manager'");
  } else {
    console.log('John not found in the array.');
  }
}

function getTotalProfessions() {
  const developerCount = developers.filter(person => person.profession.toLowerCase() === 'developer').length;
  const adminCount = developers.filter(person => person.profession.toLowerCase() === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}
