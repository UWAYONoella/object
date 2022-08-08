function Student(name,age,friend){
    this.name=name;
    this.age=age;
    // this.district="burera";
    this.friend=friend;
//  Student.prototype.addFriend=(name,age,friend)=>{
//     this.friend.push(new Student(name,age,friend));
// }
}


const firstFriend=new Student("Noella","20",[]);


firstFriend.mother="Kariza";
Student.prototype.addFriend="ikaram";
Student.prototype.age=100;
Student.prototype.addFriend=function(name,age,friend){
    this.friend.push(new Student(name,age,friend));
}


firstFriend.addFriend("Marry",'25',[]);

console.log(`${firstFriend.name}`);

// for (let id in firstFriend) {
//     console.log(`${id}:${firstFriend[id]}`);
// }



// console.log(firstFriend.friend);
// // console.log(Student.prototype);
const marry=firstFriend.friend[0];


console.log(marry);
console.log(`${marry.name}`);
// for(let id in marry){
//     console.log(`${id}:${marry[id]}`);
// }
marry.addFriend("Emmy",23,[]);
console.log(marry.friend);

// Student.prototype.Emmy=function(name,age,friend){
    


const Emmy=marry.friend[0];
Emmy.addFriend("kamarade","14",[]);
Emmy.addFriend("Danny","24",[]);
Emmy.addFriend("Musa","24",[]);
Emmy.addFriend("Fred","24",[]);
Emmy.addFriend("Jeanne","24",[]);
// for(let id in Emmy){
//     console.log(`${id}:${Emmy}`);
// }
const arr=Emmy.friend;
arr.map(item=>console.log(item.name));
// console.log(Emmy.friend[3]);
console.log(arr);
console.log(`${Emmy.friend}`);

// console.log(Student.prototype);



// Student.prototype.district="Musanze";
// console.log(Emmy.friend);
// Emmy.district="Rubavu";
// console.log(Emmy.district);
// console.log(marry.district);




// // firstFriend.friend.push(new Student("jan","20",[]));
// const secondFriend=new Student("Emmy","20",[]);
// console.log(firstFriend.friend);
// const Emmy=firstFriend.friend;
// console.log(Emmy);

