let work=document.querySelector('#worktime');
let breakt=document.querySelector('#breaktime');
let startTimer=document.querySelector('#start');
let displaydiv=document.querySelector('#display');
let session=document.querySelector('#session');

let workTime=0;
let breakTime=0;
let workSession=0;
let breakSession=0;
let isWorkSession=true;
let interValId;
let time,min,sec;

function handleDisplayMinAndSec(){
    if(sec==-1){
        min=min-1;
        sec=60;
        
    }
    if(min==-1){
        clearInterval(interValId);
        if(!isWorkSession){
            alert(`Take a break of ${breakTime} min`);
        }else{
            alert(`Get Back to work for ${workTime} min`);
        }
        handleWorkAndBreak();
    }
    else{    
    displaydiv.innerText=`${min}:${sec}`;
    sec=sec-1;
    }
}


function handleWorkAndBreak(){    
    if(isWorkSession){
        workSession++;
        time=workTime;
        isWorkSession=false;
    }else{
        breakSession++;
        time=breakTime;
        isWorkSession=true;
    }
     min=time*60;
    if(min%60==0){
        min=time-1;
        sec=60;
    }else{
      sec=min%60;
      min=parseInt(time);
    }
   // console.log(workTime,breakTime);
    if(isWorkSession){
        session.innerText=`${breakSession}st break `;
    }
    else{
        session.innerText=`${workSession} Session of Work`;
    }
    interValId=setInterval(handleDisplayMinAndSec,1000);
    //handleWorkAndBreak();
    

}

function handleTimer(){
    if(work.value.trim()=='' || breakt.value.trim()==''){
        alert("Please Enter Valid time");
    }else{
        workTime=parseFloat(work.value);
        breakTime=parseFloat(breakt.value);
        handleWorkAndBreak();
    }
}



startTimer.addEventListener('click',handleTimer);


