const URL="https://api.thecatapi.com/v1/images/search?limit=10";

// const factpara=document.querySelector("#fact");
// const btn=document.querySelector("#button");
// btn.addEventListener("click",getFacts);
const getFacts=async ()=>{
    console.log("getting data");

    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data[0]);
// factpara.innerText=data[0].Text;
};
getFacts();