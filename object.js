function Student(name,age,friend){
    this.name=name;
    this.age=age;
    // this.district="burera";
    this.friend=friend;
    this.addFriend=(name,age,friend)=>{
    this.friend.push(new Student(name,age,friend))
}
}


const firstFriend=new Student("Noella","20",[]);

firstFriend.addFriend("Marry",'25',[]);
console.log(firstFriend.friend);
const marry=firstFriend.friend[0];


console.log(marry);
marry.addFriend("Emmy",23,[]);
console.log(marry.friend);
const Emmy=marry.friend[0];
Emmy.addFriend("kamarade","14",[]);
Emmy.addFriend("Danny","24",[]);
Emmy.addFriend("Musa","24",[]);
Emmy.addFriend("Fred","24",[]);
Emmy.addFriend("Jeanne","24",[]);
// for(let Friend in Emmy){console.log(Friend );}
const arr=Emmy.friend;
arr.map(item=>console.log(item.name));
// console.log(Emmy.friend);
console.log(arr);
Student.prototype.district="Musanze";
console.log(Emmy.district);
Emmy.district="Rubavu";
console.log(Emmy.district);
console.log(marry.district);
// const myFamily={me:'noella',brother:'fra',sister:'Aim'
//     };
//     myFamily.Friend='mary';
//     delete myFamily.me;
//     console.log(myFamily);
    // for(let members in myFamily){console.log(members);}

  

    


// // firstFriend.friend.push(new Student("jan","20",[]));
// const secondFriend=new Student("Emmy","20",[]);
// console.log(firstFriend.friend);
// const Emmy=firstFriend.friend;
// console.log(Emmy);
// Emmy.addFriend("Patrick","30",[]);
