// // // // // a = { 
// // // // //     id:101,
// // // // //     name:"chandresh",
// // // // //     salary: 150000,
// // // // //     display:function(){
// // // // //         console.log("My name: "+this.name);
// // // // //         console.log("My salary: "+this.salary);
// // // // //     },
// // // // //     inc_sal:function(){
// // // // //         this.salary=this.salary+200000;

// // // // //     },
// // // // //     show:function(){
// // // // //         console.log("My ID:"+this.id);
// // // // //         console.log("My name:"+this.name);
// // // // //     }
// // // // // }
// // // // // a.display();
// // // // // a.inc_sal();
// // // // // a.display();

// // // // // student={
// // // // //     name:"vikash",
// // // // //     marks:70,
// // // // //     inc_marks:function(){
// // // // //         this.marks=this.marks+20;
// // // // //     },
// // // // //     show:function(){
// // // // //         console.log("My Name:"+this.name);
// // // // //         console.log("My Marks:"+this.marks);
// // // // //     }
// // // // // }
// // // // // // student.inc_marks();
// // // // // // student.show();
// // // // // // function getCollege() {
// // // // // //     let college = "ABes College";
// // // // // //     return college;
// // // // // // }

// // // // // // function displayCollege() {
// // // // // //     let name = getCollege();
// // // // // //     console.log("My college is: " + name);
// // // // // // }

// // // // // // displayCollege();

// // // // // const studentGrade = {
// // // // //   name: "Rahul",
// // // // //   marks: 85,
// // // // //   grade: "B",

// // // // //   updateGrade: function(newGrade) {
// // // // //     this.grade = newGrade;
// // // // //   }
// // // // // };

// // // // // console.log(studentGrade);

// // // // // studentGrade.updateGrade("A");

// // // // // console.log(studentGrade);

// // // // // function add(...numbers) {
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < numbers.length; i++) {
// // // // //     sum += numbers[i];
// // // // //   }
// // // // //   return sum;
// // // // // }
// // // // // console.log(add(1, 2, 3, 4, 5)); 

// // // // // function sum(name, ...numbers) {
// // // // //     let total = 0;
// // // // //     for (let i = 0; i < numbers.length; i++) {
// // // // //         total += numbers[i];
// // // // //     }
// // // // //     console.log(name + ": " + total);
// // // // // }
// // // // // sum("Alice", 10, 20, 30, 40, 50);

// // // // // function sum(...numbers) {
// // // // //     return numbers.reduce((total, num) => total + num, 0);
// // // // // }
// // // // // const result = sum(1, 2, 3, 4, 5);
// // // // // console.log(result);
// // // // // function sum(...numbers) {
// // // // //   let total = 0;

// // // // //   for (let i = 0; i < numbers.length; i++) {
// // // // //     total += Number(numbers[i]);
// // // // //   }

// // // // //   return total;
// // // // // }

// // // // // let input = prompt("Enter numbers separated by commas:");
// // // // // let numbers = input.split(",");

// // // // // console.log("Sum =", sum(...numbers));
// // // // class Hello {
// // // //   name = "chandresh";
// // // //   display() {
// // // //     console.log("My name is: " + this.name);
// // // //   }
// // // // }
// // // // class Hello1{
// // // //   constructor(name){{
// // // //     console.log("My name is: "+this.name);
// // // //   }
// // // // }
// // // // let obj = new Hello1("chandresh");
// // // // class secA{
// // // //   constructor(name,rollno,address,mobile){
// // // //     this.name = name;
// // // //     this.rollno = rollno;
// // // //     this.address = address;
// // // //     this.mobile = mobile;
// // // //     console.log("My name is: "+this.name);
// // // //     console.log("My rollno is: "+this.rollno);
// // // //     console.log("My address is: "+this.address);
// // // //     console.log("My mobile is: "+this.mobile);
// // // //   }
// // // // }
// // // // let obj1 = new secA("chandresh",101,"ahmedabad",9876543210);
// // // // let obj2 = new secA("vikash",102,"surat",9876543211);
// // // class a{
// // //   static name = "chandresh";
// // //   static display(){
// // //     console.log("My name is: "+a.name);
// // //   }
// // // }
// // // a.display();
// // class Hello{
// //   static name = "chandresh";
// //   constructor(){
// //     this.instancevariable = "This is an instance variable";
// //   }
// //   show(){
// //     console.log("My name is static variable: "+Hello.name);
// //     console.log("Instance variable: "+this.instancevariable);
// //     console.log(`this is my name: ${Hello.name}`);
// //   }
// // }
// // let obj = new Hello();
// // obj.show();

// // class student{
// //   name;
// //   rollno;
// //   marks;
// //   static count = 0;
// //   constructor(name,rollno,marks){
// //     this.name = name;
// //     this.rollno = rollno;
// //     this.marks = marks;
// //     student.count++;
// //   }
// //   display(){
// //     console.log("Name: "+this.name);
// //     console.log("Roll No: "+this.rollno);
// //     console.log("Marks: "+this.marks);
// //   }
// //   displayresult(){
// //     if(this.marks>=40){
// //       console.log("Pass");
// //     }else {
// //       console.log("Fail");
// //     }

// // }
// // let s1 = new student("chandresh",101,80);
// // let s2 = new student("vikash",102,30);
// // s1.display();
// // s1.displayresult();
// // s2.display();
// // // s2.displayresult();
// // class Student {
// //     name;
// //     rollno;
// //     marks;

// //     static count = 0;

// //     constructor(name, rollno, marks) {
// //         this.name = name;
// //         this.rollno = rollno;
// //         this.marks = marks;

// //         Student.count++;
// //     }

// //     display() {
// //         console.log("Name: " + this.name);
// //         console.log("Roll No: " + this.rollno);
// //         console.log("Marks: " + this.marks);
// //     }

// //     displayresult() {
// //         if (this.marks >= 40) {
// //             console.log("Pass");
// //         } else {
// //             console.log("Fail");
// //         }
// //     }
// // } 

// // let s1 = new Student("Chandresh", 101, 80);
// // let s2 = new Student("Vikash", 102, 30);

// // s1.display();
// // s1.displayresult();

// // s2.display();
// // s2.displayresult();

// // console.log("Total students:", Student.count);

// // class BankAccount {
// //     bankHolderName;
// //     accountNo;
// //     balance;

// //     constructor(bankHolderName, accountNo, balance) {
// //         this.bankHolderName = bankHolderName;
// //         this.accountNo = accountNo;
// //         this.balance = balance;
// //     }

// //     deposit(amount) {
// //         this.balance += amount;
// //         console.log("Deposited: " + amount);
// //         console.log("Balance: " + this.balance);
// //     }

// //     withdrawal(amount) {
// //         if (amount <= this.balance) {
// //             this.balance -= amount;
// //             console.log("Withdrawn: " + amount);
// //             console.log("Balance: " + this.balance);
// //         } else {
// //             console.log("Insufficient balance");
// //         }
// //     }

// //     static banif() {
// //         console.log("Welcome to our Bank");
// //     }
// // }

// // let b1 = new BankAccount("Chandresh", 101, 5000);
// //   // let b2 = new BankAccount("Vikash", 102, 3000);

// // BankAccount.banif();

// // console.log("Name: " + b1.bankHolderName);
// // console.log("Account No: " + b1.accountNo);
// // console.log("Balance: " + b1.balance);

// // b1.deposit(2000);
// // b1.withdrawal(3000);
// // // console.log("Name: " + b2.bankHolderName);
// // // console.log("Account No: " + b2.accountNo);
// // // console.log("Balance: " + b2.balance);

// // // b2.deposit(2800);
// // // b2.withdrawal(39000);
// class Employee {
//     constructor(name, id, basicSalary) {
//         this.name = name;
//         this.id = id;
//         this.basicSalary = basicSalary;
//     }

//     calculateSalary() {
//         return this.basicSalary;
//     }
// }

// class Manager extends Employee {
//     constructor(name, id, basicSalary, incentives) {
//         super(name, id, basicSalary);
//         this.incentives = incentives;
//     }

//     calculateSalary() {
//         return this.basicSalary + this.incentives;
//     }
// }

// let m1 = new Manager("Chandresh", 101, 150000, 10000);

// console.log("Name: " + m1.name);
// console.log("ID: " + m1.id);
// console.log("Salary: " + m1.calculateSalary());
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Chandresh");
}

processUser(greet);


console.log("Start");

setTimeout(function() {
    console.log("Hello Chandresh");
}, 2000);

console.log("End");


function prom(complete) {

    return new Promise(function(resolve, reject) {

        let error = false;

        if (!error) {
            console.log("Your promise has been resolved");
            resolve();
        } else {
            console.log("Your promise has not been resolved");
            reject();
        }

    });
}