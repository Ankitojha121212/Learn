const student= {
    name :"Ankit Ojha",
    age : 21,
    gender : "male",
    height : "6ft 2inch",
    getAvg(){
        return this.age + this.gender;
    }
};

console.log(student);
console.log(student.gender);
console.log(student.getAvg());
console.log(student.name);