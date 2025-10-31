result=prompt("Enter your marks:");
if(result>=80&& result<=100){
    console.log("grade A");

}
 else if(result>=70&& result<=89){
    console.log("grade B");
    
} else if(result>=60&& result<=69){
    console.log("grade C");
    
} else if(result>=50 && result<=59){
    console.log("grade D");
    
}else if(result>=0 || result<=49) {
    console.log("grade F");
}