const Student={
fullName:"Anjali",
age:20, 
cgpa:8.5,
isPass: true,
};
// Student["age"]=Student["age"]+1;
Student.age=Student.age+1;
Student["fullName"]="Anju";
console.log(Student["age"]);
console.log(Student.age);
console.log(Student.fullName);
