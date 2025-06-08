// // // // // function savetoDB(data,success,failure){
// // // // //     let internetspeed=Math.floor(Math.random()*10)+1;
// // // // //  if(internetspeed>4){
// // // // //     success();
// // // // //  }else{
// // // // //   failure();
// // // // //  }
// // // // // }
// // // // // savetoDB("pavankumar",()=>{
// // // // //     console.log("success:data was saved");
// // // // //     savetoDB("kumar",()=>{
// // // // //         console.log("success2:data was saved");
// // // // //         savetoDB("pramod",()=>{
// // // // //             console.log("success3:data saved");
// // // // //         },()=>{
// // // // //   console.log("failure3:failed");
// // // // //         })
// // // // //     },()=>{
// // // // //         console.log("failure2:weak internet");
// // // // //     });
// // // // // },()=>{
// // // // //     console.log("failure1:weak network");
// // // // // });
// // h1=document.querySelector("h1");
// // function changeColor(color,delay){
// //     return new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         h1.style.color=color;
// //         console.log
// //         resolve("color changed");
        
// //     },delay);
// // });
// // }
// // async function demo() {
// //     try{
// //   await  changeColor("red",1000);
// //    await changeColor("orange",1000);
// //  await   changeColor("green",1000);
// //  changeColor("blue",1000);
// //     }catch(e){
// // console.log(e);
// //     }
// // let a=2;
// // console.log(a);
// // }


// // // changeColor("red",1000)
// // // .then(()=>{
// // //     console.log("red color was completed");
// // //     return changeColor("orange",1000);
// // // })
// // // .then(()=>{
// // // console.log("orange was completed");
// // // return changeColor("green",1000);
// // // })
// // // .then(()=>{
// // //     console.log("green was completed");
// // //     return changeColor("blue",1000);
// // // })
// // // .then(()=>{
// // //  console.log("blue was completed");
// // // })


// // // // changeColor("red",1000,()=>{
// // // //     changeColor("orange",1000,()=>{
// // // //         changeColor("green",1000,()=>{
// // // //             changeColor("blue",1000);
// // // //         });
// // // //     });
// // // // });



// // // // // function saveDB(data){
// // // // //     return new Promise((resolve,reject)=>{
// // // // //         let internetspeed=Math.floor(Math.random()*10)+1;
// // // // //         if(internetspeed>4){
// // // // //             resolve("sucess: data is saved");
// // // // //         }else{
// // // // //             reject("failure:weak intenet");
// // // // //         }
// // // // //     });
// // // // // }
// // // // // saveDB("pavankumar")
// // // // // .then((result)=>{
// // // // //     console.log("data1 saved:promise was success",result);
// // // // //     return saveDB("shradha");
// // // // // }).then((result)=>{
// // // // //     console.log("data2 saved:promise was success",result);
// // // // //     return saveDB("Khapra");
// // // // //     })
// // // // //     .then((result)=>{
// // // // //         console.log("data3saved",result);
// // // // //     })
// // // // // .catch((error)=>{
// // // // //     console.log("promise was rejected",error);
    
// // // // // });
// // // async function hello(){
// // //     acbc
// // //     return "hello";
// // // }
// // // hello()
// // // .then((result)=>{
// // //     console.log("promise was resolved");
// // // })
// // // .catch((error)=>{
// // // console.log("erorr 404");
// // // })

// // function getnum(){
// //     return new Promise((resolve,reject)=>{
// //      setTimeout(()=>{
// //         let num=Math.floor(Math.random()*10)+1;
// //         console.log(num);
// //      },1000);
// //     }
// // );}
// // async function demo(){
// //  await getnum();
// //   getnum();
// //   await getnum();
// // }
// // demo();

// // let jsonres='{"fact":"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.","length":111}';
// // let js=JSON.parse(jsonres);
// // console.log(js);

// // let ress={
// //     name:"pavan",
// //     age:21,
// //     location:"bangaluru"
// // }
// // let jsonfrmt=JSON.stringify(ress);
// // console.log(jsonfrmt);
// let url="https:catfact.ninja/fact";
// let url2="https://dog.ceo/api/breeds/image/random";
// let btn=document.querySelector("button");


// btn.addEventListener("click",async()=>{
//     let link=await getimg();
//     let i=document.querySelector("#result");
//     i.setAttribute("src",link);
//     console.log(link);
// })

// async function getimg(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("image not found",e);
//     }
// }
// // async function getfacts(){
// //     let res=await axios.get(url);
// //     console.log(res.data.fact);
// // }

// // btn.addEventListener("click",async()=>{
// //     let fact=await getfacts();
// //     console.log(fact);
// // })

// // // async function getfacts(){
// // //     let res=await fetch(url);
// // //     let data=await res.json();
// // //     console.log(data);
// // // }

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colarr=await getcolleges(country);
    console.log(colarr);
    show(colarr);
});
function show(colarr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colarr){
        console.log(colarr);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcolleges(country){
    try{
       let info= await axios.get(url+country);
        return info.data;
    }catch(e){
        console.log("error",e);
        return [];
    }
}


