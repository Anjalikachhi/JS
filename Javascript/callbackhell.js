function getData(dataId,getNextData){
    setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
getNextData();

    }
    },2000
    );
}
//THIS IS CALLBACK HELL
getData(1,()=>{
    console.log("getting data");
    getData(2,()=>{
         console.log("getting data");
        getData(3);
    });
});