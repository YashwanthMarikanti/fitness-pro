function show(id){

document.querySelectorAll('.section')
.forEach(sec=>sec.style.display='none')

document.getElementById(id).style.display='block'

}

function calc(){

let w=document.getElementById("weight").value

let protein=w*1.6

document.getElementById("protein")
.innerText="You need "+protein+"g protein daily"

}

function ask(){

let q=document.getElementById("question")
.value.toLowerCase()

let answer="";

if(q.includes("protein"))
answer="Eat eggs, chicken, paneer"

else if(q.includes("gym"))
answer="Follow 5 day split"

else if(q.includes("calisthenics"))
answer="Start pushups and pullups"

else if(q.includes("fat loss"))
answer="Calorie deficit + cardio"

else
answer="Follow workout and diet plan"

document.getElementById("answer").innerText=answer

}
