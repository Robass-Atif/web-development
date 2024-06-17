 let displayTime=document.getElementById("time");
let sec=0;
let hour=0;
let min=0;
let timer=null;
function stopWatch()
{
    sec++;
    if(sec==60)
    {
        min++;
        sec=0;
        if(min==60)
        {
            hour++;
            min=0;
        }
    }
    let h=hour<10?"0"+hour:hour;
    let m=min<10?"0"+min:min;
    let s=sec<10?"0"+sec:sec;
    displayTime.innerHTML=h+":"+m+":"+s;
}
function watchTime()
{
    
        
   timer= setInterval(stopWatch,1000);
}
function stop()
{
    
    clearInterval(timer);

}
function reset()
{
    hour=min=sec=0;
    clearInterval(timer);
    displayTime.innerHTML="00:00:00";
}
