let h = document.getElementsByClassName("heading");
console.log("heading",h[0].innerText);



let p = document.getElementById("para")

console.log("para-->",p.innerText);


let count =1;
// let timer =setInterval(()=>{
//     if(count>=5){
//         clearInterval(timer);
//     }
//     count++;
//     console.log("My name ");
//     h[0].innerText="Aniket";

// },2000)


function clickButton (){
    let btn = document.getElementById("btn");
    console.log(btn);
    btn.disabled=true;
    console.log("Button clicked");
     setTimeout(()=>{
     console.log("My name is jkjk");
     p.innerText="Change";
     btn.disabled=false;

},3000)
}