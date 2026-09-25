// console.log("===array===");
// let arr=[1,2,3,4,];
// let sum=0;
// for(let index=0;index<arr.length;index++){
//     console.log(arr[index]);

//     sum += arr[index];
// }

// console.log("Array sum: ",sum);

// console.log("\n===2d array");
// let student=[
//     ["vikash","male","aiml","35","99"],
//     ["Ram","Male","AIml","22","98"],
//     ["shyam","MAle","Aiml","21","97"]
// ];
// console.log("student`s detail:",student);

console.log("===Object===");

const student ={
    id:11,name:"Chandresh",course:"node.js"
};

console.log(student);
console.log(student.name);

console.log("===array of object===");

const user = [
    {id:1,name:"rahul"},
    {id:2,name:"ram"},{
        id:3,name:"shyam"
    }
];
console.log(user);
console.log("===method===");
const ab = {
    id:11,
    name:"Chandresh",
    course:"node.js",

    display: function(){
        console.log("ID=",this.id);
        console.log("Name=",this.name);
        console.log("Course=",this.course);

    }
   
};

 delete ab.id;
 ab.display();
 ab.id=13;
ab.display();