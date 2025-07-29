export {};

let msg = "welcome back";
console.log(msg);

let isbeginner: boolean = true;
let total: number = 23;
let name: string = "rohith";
// name = "true";

let line: string = `my name is ${name}`;
console.log(line);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let p1: [string, number] = ["chris", 23];

enum Color {
  red = 50,
  green,
  blue,
}
let c: Color = Color.green;
console.log(c);

let random: any = 10;
random = true;
random = "hii";


function add(num1:number,num2?:number):number{
    if(num2){
        return num1+num2;
    }
    else{
        return num1;
    }
}
console.log(add(4,9));