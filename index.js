// const player= {
//     name: 'John carter',
//     club: 'la lakers',
//     address: {
//         city:'los Angeles'
//     }
// };


// // const { name, club, address: {city} }= player;
// // console.log(`${name} lives in ${city}`)


// let [firstName, middleName, lastName] =['dlyan', 'coding', 'israel'];

// lastName='clement'

// console.log(lastName)

// function addressMaker(address){
//     const {city, state}=address

//     const newAddress = {
//         city,
//          state,
//         country:'united states'};

//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city:'Austin', state:'Texas'})

let incomes= [62000, 67000, 75000]
let total=0

for(const income of incomes){
    console.log(incomes);
    total+=income;
}
console.log(total)

let fullName="Dlyan coding God israel"

for(const char of fullName){
    console.log(char)
}

const students = [
    {name: 'John', city: 'kigali/kicucir'},
    {name: 'John', city: 'kigali/Gasabo'},
    {name: 'John', city: 'kigali/Nyarugenge'}
    
]

for(const student of students){
    console.log(student.name + " " + "lives in" + " " + student.city)
}

let contacts =['mary', 'joel', 'danny']

let personFriends= ['david',...contacts, 'lily']
contacts.push('john')

let person = {
    name: 'adam',
    age: 25,
    city:'liverpool'
}

let employee = {
    ...person,
    salary:50000,
    position:'software developer'
}

console.log(employee)


const shoppingList= ['egge', 'milk','butter']

const shoppingBacket=[...shoppingList,'onion', 'pinapple']

console.log(shoppingBacket);


function add(...nums){
    console.log(nums);
}

add(2, 3, 4, 5)

function breakfastMenu(){
    return 'im going to scrambled eggs for breakfast'
}

const lunchMenu = function(){
    return 'im going to have a sandwich for lunch'
}

const dinnerMenu= ()=>{
    return 'im going to eat';
}

console.log(dinnerMenu('chicken salad'));