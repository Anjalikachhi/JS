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
async function getAlldata() {
    console.log("geting datta 1");
    await getData(1);
        console.log("geting datta 2");

        await getData(2);
            console.log("geting datta 3");

    await getData(3);

}
//promise chain
// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     return getData(2);
//     }).then((res)=>{
//         return getData(3);
//     }).then((res)=>{
//         console.log(res);
//     })


    ///call back hell
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