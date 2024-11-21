console.log("HomeWork_17");

// 1. დაწერეთ for ციკლი, 0 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i

for (let i = 0; i < 25; i++) {
  console.log(i);
}

// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i

let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}

// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i

/*
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 30);

ან 2-ე დავალება უნდა ჩანდეს ან 3-ე, ორივეს ერთად i-ის შემთხვევაში აერორებს ბრაუზერში.
ამიტომ გამოვიყენე "j"
*/

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 30);

// 4. მოცემული გვაქვს მასივი const numbers = [2,3,6,7,8,9,23,24,29]. for ლუპის დახმარებით შეამოწმეთ მასივის
//ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.

const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];

let even = [];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) even.push(numbers[index]);
}

console.log(even);

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს
//რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი,
//ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის
//შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

const currentDay = new Date().getDay();

// console.log(currentDay);

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;

  default:
    break;
}
