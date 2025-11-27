// let promise =new Promise ((resolve,reject)=>{
// console.log("i am a promise")
// //  resolve("success");
// reject("some error occured");
// });

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("some detail");
resolve("success");
        },3000);
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("some detail");
resolve("success");
        },3000);
    })
}
console.log("fetching data1");
let p1=asyncFunc();
p1.then((res)=>{
    console.log("fetching data2"
    );
    let p2= asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    })
})
// by using manually
// console.log("fetching data1")
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("fetching data2")
// let p2=asyncFunc();
// p2.then((res)=>{
//     console.log(res);
// })




// function getData(dataId, getNextData){
//     return new Promise((resolve,reject
//     )=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//             // console.log("success");
//             reject("error generated");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }