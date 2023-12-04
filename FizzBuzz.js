/* Solve the "FizzBuzz" problem in Golang or Node.js. ❗️Make your code as extensible and flexible as possible.❗️ Акцент на останньому реченні.
Спершу я вирішив завдання таким чином створив функцію задав умови... все вийшло але нема гнучкості про яку йдеться в завданні. На далі я буду вказувати свої дії в коментах.
 */
const getFizzBazz = (n) => {
    const delyToTwo = n % 3;
    const delyToThre = n % 5;
    let response = n;
    if (delyToTwo === 0){
        response = "Fizz";
    }
    if (delyToThre === 0){
        response = "Buzz";
    }
    if (delyToTwo === 0 && delyToThre === 0){
           response = "FizzBuzz";
          } 
          return response           
}        

function fizzBazzPrint(num) {
    for (let i = 1; i <= num; i++){
        console.log(getFizzBazz(i))
    }
}

fizzBazzPrint(100)

/*  Потім в мене виникла ідея як можна розширювати стек умов за допомогою масивів або класів, вирішив використати масиви. Я створив два масиви з цифрами та словами. Розширивши масив можна збільшувати кількість умов та варіантів наприклад: я додав '_Infinity', '_Par', а також додав умови для коректного запуску, провірку на рівність масивів, вхідного значення (>1  та дроби),  */

const inputNumber = 100;
const arrayNum = [3, 5, 8, 2] 
const arrayWord = ['Fizz','Buzz', '_Infinity', '_Par']


// function find(num){
//     let res = ''
//     for(let i = 0; i <= arrayNum.length; i++){
//         if (num % arrayNum[i] === 0)   {
//             res = res + arrayWord[i]
//         }        
//     }
//     return res    
// }

// if(arrayNum.length !== arrayWord.length){
//     console.log("Arrays must be the same size")
// }
// else if (inputNumber <= 1) {
//     console.log("The input value must be greater than 1")
// } 
// else if (inputNumber % 1 !== 0) {
//     console.log("The input value must be integer")
// }
// else{
//     for(let i = 1; i <= inputNumber; i++){
//         console.log((i + ' ' + find(i) || i  ))
//     }
// }

/*Також я знайшов рішення по ООП ось посилання на дререло та хвилини
https://www.youtube.com/watch?v=TWmmfDvcYO0 18:00 ООП
нажаль код з відео був непрацюючим, внісши деякі корективи я виправив помилку і все працює. Даний код напевно і буде найбільш гнучким, хоч і не найбільш зрозумілим.
*/

// const MAX_NUM = 50;

// class Tag /*Implements Value*/ {
//   constructor(_value) {
//     this.value = _value;
//   }
// }

// class Printer {
//   constructor(_context) {
//     this.context = _context;
//   }
//   print() {
//     console.log(this.context.value);
//   }
// }

// class DivCondition /*implements Condition, truthy*/ {
//   constructor(_divider) {
//     this.divider = _divider;
//   }
//   isTruthy(num) {
//     return num % this.divider === 0;
//   }
// }

// class AndStrategy /* implements Strategy, Thruthy*/ {
//   constructor(_conditionsOrStrategies) {
//     this.conditions = _conditionsOrStrategies;
//     this.lengthOfConditions = _conditionsOrStrategies.length;
//   }
//   isTruthy(num) {
//     let conditionsArray = [];
//     for (let i in this.conditions) {
//       if (!this.conditions[i].isTruthy(num)) {
//         conditionsArray.push(false);
//       } else {
//         conditionsArray.push(true);
//       }
//     }
//     for (let i = 0; i < this.lengthOfConditions; i++) {
//       if (conditionsArray[i] === true && i + 1 != this.lengthOfConditions) {
//         continue;
//       } else if (conditionsArray[i] === false) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }

// class TagNumRule /*Implements Rule*/ {
//   constructor(_tag, _strategy) {
//     this.strategy = _strategy;
//     this.tag = _tag;
//   }
//   isSuccess(num) {
//     return this.strategy.isTruthy(num);
//   }
// }

// class TagNumRulesCollection /*Implements collection*/ {
//   constructor(_tags) {
//     this.tags = _tags;
//   }
//   find(num, defaultValue) {
//     for (let i in this.tags) {
//       if (this.tags[i].isSuccess(num)) {
//         return this.tags[i].tag;
//       }
//     }
//     return defaultValue;
//   }
// }

// const numTags = new TagNumRulesCollection([
//   new TagNumRule(
//     new Tag("FizzBuzz"),
//     new AndStrategy([new DivCondition(3), new DivCondition(5)])
//   ),
//   new TagNumRule(new Tag("Fizz"), new AndStrategy([new DivCondition(3)])),
//   new TagNumRule(new Tag("Buzz"), new AndStrategy([new DivCondition(5)])),
//   new TagNumRule(new Tag("Infinity"), new AndStrategy([new DivCondition(8)])),
// ]);

// for (let i = 1; i < MAX_NUM; i++) {
//   new Printer(numTags.find(i, new Tag(i))).print();
// }