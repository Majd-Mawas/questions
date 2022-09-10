const Btn1 = document.getElementById("ques-1")
const Btn2 = document.getElementById("ques-2")
const Btn3 = document.getElementById("ques-3")

const Btns = document.querySelectorAll(".question-btn")

Btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("ques1")
    })
})

const Ans1 = document.getElementById("ans1")
const Ans2 = document.getElementById("ans2")
const Ans3 = document.getElementById("ans3")

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")

const imgM = "images/icons8-minus-50.png"
const imgP = "images/icons8-plus-64.png"

const className = "ques1"

Btn1.addEventListener("click",function(){

    if(!Ans1.classList.toggle(className))
        img1.setAttribute("src", imgM)
    else
        img1.setAttribute("src", imgP)

        Ans2.classList.add(className)
        Ans3.classList.add(className)

        img2.setAttribute("src", imgP)
        img3.setAttribute("src", imgP)

})

Btn2.addEventListener("click",function(){

    if(!Ans2.classList.toggle(className))
        img2.setAttribute("src", imgM)
    else
        img2.setAttribute("src", imgP)

        img1.setAttribute("src", imgP)
        img3.setAttribute("src", imgP)

        Ans1.classList.add(className)
        Ans3.classList.add(className)

})

Btn3.addEventListener("click",function(){

    if(!Ans3.classList.toggle(className))
        img3.setAttribute("src", imgM)
    else
        img3.setAttribute("src", imgP)

        Ans1.classList.add(className)
        Ans2.classList.add(className)

        img1.setAttribute("src", imgP)
        img2.setAttribute("src", imgP)


})

