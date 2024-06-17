const num=document.querySelectorAll('.counterNumber');

const speed=70;

num.forEach((currNum) =>{

    
    const update = () =>{
        
        
const target=parseInt(currNum.dataset.number);
// console.log(target);

let intial=parseInt(currNum.innerText);
// while(intial<target)
// {
const increment= Math.trunc(target/speed);



if(intial<target)
{

    const a=intial+ increment;
    if(a<target)
    {
currNum.innerText=a+"+";
    }
    else
    {
currNum.innerText=target;

    }

console.log(increment);
setTimeout(update,10);


}
};

update();


}

);

