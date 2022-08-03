let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let subBtn = document.getElementById("submit");
let pause = document.getElementById("pause");
let paused = false;


let timer = setInterval(()=>{ let number = parseInt(counter.innerHTML);
    const blam = counter.innerHTML = number +1 }, 1000);

plus.addEventListener("click", ()=>{
let number = parseInt(counter.innerHTML);
counter.innerHTML = number+1
});

minus.addEventListener("click", ()=>{
    let number = parseInt(counter.innerHTML);
    counter.innerHTML = number-1
});

heart.addEventListener("click", ()=>{
    let newLikes = document.createElement("li");
    newLikes.innerHTML = `${counter.innerHTML} has been liked 1 time`;
    document.getElementsByClassName("likes")[0].appendChild(newLikes);      
});

subBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let input = document.getElementById("comment-input");
    let comInput = document.createElement("p"); comInput.innerHTML = input.value
    document.getElementsByClassName("comments")[0].appendChild(comInput);
})


pause.addEventListener("click", ()=>{

paused = !paused;
    if(paused){
        clearInterval(timer);
        pause.innerHTML = "resume";
        heart.setAttribute("disabled", " ");
        plus.setAttribute("disabled", " ");        
        minus.setAttribute("disabled", " ");
        subBtn.setAttribute("disabled", " ");
    }
    else{ pause.innerHTML = "pause";
    heart.removeAttribute("disabled"," ");
    plus.removeAttribute("disabled"," ");
    minus.removeAttribute("disabled"," ");
    subBtn.removeAttribute("disabled"," ");
    timer = setInterval(() => {let number = parseInt(counter.innerHTML);
        counter.innerHTML = number +1;} , 1000)}
})