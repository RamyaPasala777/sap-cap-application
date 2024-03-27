// console.log(1+"1"-1+"1");

// let a = 10,
//     b = 5;
//     c = a+b;
//     console.log(c);

// const a = 12,
//   b = "12",
//   c = a + b;
// console.log(c);

//  let object = {
//     name:'ramya',
//     age:21
//  };
//  console.log(object);

// console.log(object["name"]);
// console.log(object.name);
// object["name"]="naveen";
// console.log(object);
// object.name="c";
// console.log(object);

// let arr=["Naveen", 2,true];
// console.log(arr);
// console.log(arr[0]);
// arr.unshift(20);
// console.log(arr);;
// arr.splice(1);
// console.log(arr);;

// let add =  (num)=>{
//  if (num%2==0) {
//     isEven=true;
//  }
//  else{
//     isEven=false;
//  }
//  return isEven;
// };
// console.log(add(8));
// let num=5;

// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         break
//     }
//     console.log(i);
// }

// let a = "hello",
//     b = a.split('');
//     console.log(b);
//   let c = b.reverse().join('');
//   console.log(c);
    

//  const {addition,sub,PHONE,student}= require("./util.js");
//  addition(10,20);  
// sub(20,10);
// console.log(PHONE);
// const {age,name:fname}=student;
// console.log(age,fname);



// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// } 
// function callMe() {
//     console.log('I am callback function');
// }
//  greet('Peter', callMe);




// // let a=  (num1,num2)=>{
// //    let operations={
// //     add:num1+num2,
// //     sub: num2-num1,
// //     mul:num1*num2
// //    };
// //    return operations;

// // };
// // let v=a(2,3);
// // // console.log(v)
// // let {add,sub,mul}=v;
// // console.log(add,sub,mul);

// // let b=(num1)=>{
// //     if(num1%2 == 0){
// //         console.log(`${num1} is even number`);
// //     }else{
// //         console.log(`${num1} is odd number`);
// //     }

// //    }
// // let a = (num2)=>{
// //    setTimeout(b(num2),4000);
// //    console.log("processing............")
    
// // };
// //  a(5);


// // const fnBuildingPromise =()=>{   
// //     return new Promise((resolve,reject)=>{
// //     const bstatus = false;
// //     setTimeout(()=>{
// //         if(bstatus){
// //             resolve("success");
// //         }
// //         else{
// //             reject("error");
// //         }
// //     },3000);
// // })}
// // fnBuildingPromise().then((oSuccessData)=>{
// //                   console.log(oSuccessData);}).catch((error)=>{
// //                     console.log(error)
// //                   })

// // let a =function(){
// //     console.log("Ramya")
// // }
// // console.log(a);


// //  function a(num1){
// //     console.log("RAMYA")
// //     console.log(num1);
// //  };
// //  a(5);

// //  let b= function(num1){
// //       console.log(num1),
// //       console.log("Ramya")
// //  }
// //  b(7);

// //  let c=(n)=>{
// //     console.log("Ramya");
// //     console.log(n);
// //  };c(5)


// // let userInput = prompt("Enter something:")
// // console.log(userInput);

// // let bbb=(n)=>{
// //     setTimeout(b=()=>{
// //         console.log("RAMYA")
// //     },3000);
// //     console.log("RAJESH");
// // }bbb(7);

// // function a (num) {
// //     console.log("ramya"),
// //     console.log(num)
// // };a(5)

// // let a = () =>{
// //     console.log("RAMYA"),
// //     console.log(a)
// // }a(5)


// // let a=function(n){
// //     console.log("hiiiii"),
// //     console.log(n)
// // }
// // a(5)

// // function a(num){
// //     console.log(num);
// // }
// // a(676)

// // function a(num1){
// //   console.log("hiii")
// //   num1()
  
// // }
// // num1 =()=>{
// //     console.log("hello")
    
// //   }
// //   a(num1)

// // a=(b)=>{
// //     console.log("hiiiiiiiii");
// //     b()

// // }
// // b =()=>{
// //    console.log("hellooooooooooooooooo")
// // }
// // a(b)

// // function a(b){
// //     setTimeout(c=()=>{
// //         console.log("rajesh chowdary")
// //     },3000)
// //     console.log("ramya")
// //     b()
// // }
// // function b(){
// //     console.log("pasala")
// // }
// // a(b)




// // let a = new Promise(function(resolve,reject){
// //        const x = "ramya"
// //        const y = "pasala"
// //        if(x==y){
// //         resolve();
// //        }
// //        else{
// //         reject()
// //        }

// // });
// // a.then(function(){
// //     console.log("success")
// // }).
// // catch(function(){
// //     console.log("error")
// // })

// // let a = new Promise(function (resolve,reject){
// //    const num1 = 2
// //     if(num1%2 ==0){
// //         resolve()
// //     }
// //     else{
// //        reject()
// //     }
// // })
// // a.then(function(){
// //     console.log("sucess")
// // }).catch(function() {
// //     console.log("error")
    
// // })


// // // let a= function(b){
// // //     console.log("ramya");
// // //     b();
// // // }
// // // b=function(){
// // //     console.log("heloooooo")
// // // }
// // // a(b);

// // // function a() {
// // //     let first_promise = 
// // //         new Promise((resolve, reject) => resolve("Hello"));
// // //     let second_promise = 
// // //         new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve(" GeeksforGeeks..");
// // //         }, 1000);
// // //     });
// // //     let combined_promise = 
// // //         Promise.all([first_promise, second_promise]);
// // //     return combined_promise;
// // // }
 
// // // async function display() {
// // //     let data = await a();
// // //     console.log(data);
// // // }
 
// // // display();


//  a=()=>{
//     let f_p = new Promise((resolve,reject)=>{
//         resolve("hello")
//     }
       
//     )
//     let s_p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hiiiiiii")
//         },2000)
//         console.log("second promise")
//     })
//   let c_p = Promise.all([f_p,s_p])
//    return c_p;
// }
// async function display() {
//     let data = await a();
//     console.log(data);
    
// }
// display();



// const express=require("express");
// const users=require("./users.json");
// const bodyParser=require("body-parser");

// const app=express();
// app.use(bodyParser.json())
// const url = "/user"
// app.post(url,(req,res)=>{
//     const newUser = req.body;
//     console.log(newUser)
//     users.push(newUser);
//     res.status(201).json(users);
// })

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/rrrrr",(req,res)=>{
//     res.status(200).json(users)
// })

// app.get("/ram",(req,res)=>{
//     const userId=req.params["id"];
//     const newOne = users.find((a)=>{
//         return userId === a.id
//     })
//     res.status(200).json(newOne)
// })
// app.listen("3005",()=>{
//     console.log("Server is running");
// })


const express = require("express");
const users = require("./users.json");
const body = require("body-parser");
let app = express();
const PORT=process.env.PORT || 3005
app.use(body.json())


// app.get("/",(req,res)=>{
//     res.status(200).json(users)
   
// })
// app.get("/:id",(req,res)=>{
//   let dev =parseInt(req.params.id)
//  let rr= users.filter((element)=>{
//    return dev === element.id
//   })

//   res.status(222).json(rr)
//   console.log(dev);
// })

// app.get("/user/:name",(req,res)=>{
//     let userName = req.params.name
//     let oName =users.filter((ele)=>{
//         return userName === ele.name
//     })
//     res.status(225).json(oName)
//     console.log(userName)
//     })



// app.post("/",(req,res)=>{
//     const newUser=req.body
//     users.push(newUser);
//     res.status(201).json(users);
// })




app.get("/",(req,res)=>{
    res.status(201).send("helloooo")
})

app.get("/:id",(req,res)=>{
    let userId = parseInt(req.params.id)
    let result = users.filter((element)=>{
        return userId === element.id
    })
    res.status(200).json(result)
})

app.post("/post",(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.status(201).json(users)
})

app.listen(PORT,()=>{
    console.log("server is running..........!")
})

