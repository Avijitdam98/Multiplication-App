const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)


const formE1=document.getElementById('form')
const scoreE1=document.getElementById("score")



let score=JSON.parse(localStorage.getItem('score'));

if(!score){
    score=0;
}
scoreE1.innerText=`score: ${score}`
const inputE1=document.getElementById('input')
const questionEl=document.getElementById('question').innerText=`What is  ${num1} multiply by ${num2}`

const coreectAns=num1*num2

formE1.addEventListener('submit',() => {
    const userAns=inputE1.value
    if(userAns==coreectAns){
        score++;
        UpdatelocalStorage()

    }else{
        score--
        console.log(score)
        UpdatelocalStorage()
        
    }

})

function UpdatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


