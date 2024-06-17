let btn=document.querySelectorAll(".button-option");
let restart=document.querySelector("#restart");
let popup=document.querySelector(".popup");
let message=document.querySelector("#message");
let newGame=document.getElementById('new-game')
let container=document.querySelector(".container")
newGame.addEventListener("click",()=>{
enableButton();
count=0;
});
restart.addEventListener("click",()=>
{
    enableButton();
count=0;
});
// winning pattern
let winningPattern =[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [0,4,8]

];
function disableButton()
{
btn.forEach((e)=>{
e.disabled=true;
});
popup.classList.remove("hide");
container.classList.add("hide");

}
function enableButton()
{
    btn.forEach((e)=>{
        e.innerHTML="";
        e.disabled=false;
    });
    popup.classList.add("hide");
    container.classList.remove("hide");
}
function winFunction(letter)
{
    disableButton();
    if(letter=="X")
    {
        message.innerHTML="&#x1F389; <br> 'X' Wins";
    }
    else
    {
        message.innerHTML="&#x1F389; <br> 'O' Wins";
    }
}
function draw()
{
    disableButton();
    message.innerHTML="&#x1F60E; <br> 'Its a Draw";

}
function winChecker()
{
    for(i of winningPattern)
    {
        let[e1,e2,e3]=[
            btn[i[0]].innerHTML,
            btn[i[1]].innerHTML,
            btn[i[2]].innerHTML,

        ];
        if(e1!="" && e2!="" && e3!="")
        {
            if(e1==e2 && e1==e3 && e2==e3)
            {
                winFunction(e1);
            }
        }
    }
}
let xTurn=true;
let count=0;
btn.forEach((e)=>{
e.addEventListener("click",()=>
{
    if(xTurn)
    {
        xTurn=false;
        e.innerHTML="X";
        e.disabled=true;
    }
    else
    {
        e.innerHTML="O";
        xTurn=true;
        e.disabled=true;

    }
    count++;
    if(count==9)
    {
    draw();
    }
    winChecker();
})
});
window.onload=enableButton;