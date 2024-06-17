let hour = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var popup = document.querySelector(".popup")
const container = document.getElementById("not");


function start1() {

    if (hour.value == ""  || min.value=="" || sec.value=="" ||(hour.value=="0" && min.value=="0" && sec.value=="0")) {
        const p = document.createElement("p");
        p.innerHTML = "please enter all input ";
        p.classList.add("alert");
        const btn = document.getElementById("start");

        container.appendChild(p);
        btn.disabled = true;
        setTimeout(function () {
            p.parentNode.removeChild(p);
            btn.disabled = false;
        }, 2000); // 2000 milliseconds (2 seconds)


    }
    
    else  {
        container.classList.add("hide");

        popup.classList.remove("hide");
        let h = hour.value < 10 ? "0" + hour.value : hour.value;
        let m = min.value < 10 ? "0" + min.value : min.value;
        let s = sec.value < 10 ? "0" + sec.value : sec.value;
        timer.innerHTML = h + ":" + m + ":" + s;

        reset.disabled=true;

        let h1 = parseInt(hour.value);
        let m1 = parseInt(min.value);
        let s1 = parseInt(sec.value);
       const abc= setInterval(()=>
        {
            s1--;
            if (s1 < 0) {
                m1--;
                s1 = 59;
                if (m1 < 0) {
                    h1--;
                    m1 = 59;
                }
            }
        
            // Format the time values as strings with leading zeros
            let h = h1 < 10 ? "0" + h1 : h1;
            let m = m1 < 10 ? "0" + m1 : m1;
            let s = s1 < 10 ? "0" + s1 : s1;
            timer.innerHTML = h + ":" + m + ":" + s;
             
            if(h1<=0 && m1<=0 && s1<=0)
            {
                clearInterval(abc);
                alert("Time Up");
                reset.disabled=false;
            }
        }, 1000);



    }
}
function reset1()
{
    popup.classList.add("hide");

    container.classList.remove("hide");
}


