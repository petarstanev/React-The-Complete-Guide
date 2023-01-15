// Primitives: number, strings, booleans
// Complex: array, objects,
// Function types, parameters

let age: number;

age = 12.3;

let userName: string;
userName = "name";

let isInstructor: boolean;
isInstructor = true;

// More complex;
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = { name: string; age: number }

let person: Person;
person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Type inference
let course: string | number = 'React the complete guide';
// set the type on init
course = 1123;

// Functions and types

function addB(a: number,b: number) {
    return a +b;
}

function printValue(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value:T){
    const newArray = [value,...array];
    return newArray
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);
const stringArray = insertAtBeginning(['a','b','c'],'d');

stringArray[0].split('');