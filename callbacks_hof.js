//callbacks

// function greet(name, sayBye){
//     console.log("Hello" + name);
//     sayBye();
//     console.log("call returning back to greet")
// }

// function sayBye(){
//     console.log("Bye!");
// }
// greet("Raju", ()=>{
//     console.log("say bye");
// });


//another way using arrow function
// let result = greet("Raju", ()=>{
//     console.log("say bye");
// });

// //HOF--> High Order Function
// function Calculate(a,b,operation){
//     return operation(a,b);
// }
// function add(x,y){
//     return x + y;
// }
// console.log(Caculate(10,5,add));//15
//every callback is passed to a HOF
//Function using anither function = Higher Order Function
//Function being passed = Callback



// //forEach


// let students = ["Raju","Rajesh","Pooja"];
// console.log(students);

// students.forEach((name, index,array) => {
//     console.log(index + " -> " + name,array);
// });
// students.forEach((i,k,j)=>{
//     console.log("array log",i,k,j);
// })
// MAP
let price = [100, 200, 300];
let gstprice = price.map(p => p + p * 0.18);
console.log(gstprice);
let r1 = price.map(
    (x)=>{
        return x*x;
    }
)
console.log("map result",r1)