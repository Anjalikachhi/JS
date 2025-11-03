let veggies=["potao","tomato","carrot","spinach"];
veggies.push("brinjal","beans","bottlegourd");
console.log(veggies);
 veggies.pop();
console.log(veggies);
//print like string 
console.log(veggies.toString())
// to concatenate the arrays
 let marble=["thor","spiderman","ironman","doctorstrange"];
 let dc=["superman", "batman"];
 let he=["krish"];
  let heroes=marble.concat(dc,he);
  console.log(heroes);
  // unshift  and shift
  marble.unshift("comma");
  marble.shift("comma");

//slice :returns a piece of array
//console.log(marble.slice(1,3));
//splice : to original array (add,rmove,replace);
console.log(marble.splice(1,2,"Antman"));
console.log(marble);

