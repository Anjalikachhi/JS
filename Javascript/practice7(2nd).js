let companies=["Bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);