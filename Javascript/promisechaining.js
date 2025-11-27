function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("data",dataId);
    resolve("success");
     if(getNextData){
getNextData();

    }
    },2000);
      });
}


    
   
//promise chain
let p1=getData(1);
p1.then((res)=>{
    console.log(res);
    return getData(2);
    }).then((res)=>{
        console.log(res)
    })
    // getData(2).then((res)=>{
    //     console.log(res);
    // })

// getData(1,()=>{
//     console.log("getting data");
//     getData(2,()=>{
//          console.log("getting data");
//         getData(3);
//     });
// });