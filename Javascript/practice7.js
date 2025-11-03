let marks=[85,97,44,37,76,60];
let sum=0;let average;
for(let i=0;i<marks.length;i++){
  sum=sum+marks[i];}

average=sum/marks.length;
console.log(average)
// to find the 10% off on the prices
let price=[250,645,300,900,50];
for(let i of price){
    off=(i*10)/100;
    i=i-off;
    console.log(i);
}
//or 
for (let i =0;i<price.length;i++){
    let offer=price[i]/10;
    price[i]-=offer;
}
console.log(price);