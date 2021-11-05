//1 задание
/*function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}

ask(
"Вы согласны?",
() => { alert("Вы согласились."); },
() => { alert("Вы отменили выполнение."); }
);*/


/*2 задание с setInterval
function printNumbers(from,to) {
let index=from;
let time= setInterval(function (){
document.write(index + '\t');
if (index == to ){
clearInterval(time);
}
index++;
},
1000);
}

printNumbers(0,5);*/


/*2 задание с setTimeout
function printNumbers(from,to) {
let index=from;
let time = setTimeout(function go(){
document.write (index + '\t');
if (index < to){
setTimeout(go,1000);
}
index++;
},1000)
}

printNumbers(0,5);*/

/*let today=new Date();
let next_day= new Date("11.02.2023")

//Количество миллисекунд в одном дне

msDay=24*60*60*1000;

//Количество дней

Count_Days = Math.round((next_day.getTime() - today.getTime())/msDay)+1;

dayname = ""
ds = ""+Count_Days
//Вырезаем последнею цифру
dd=parseInt(ds.substr(ds.length-1))

if(Count_Days>4 && Count_Days<21)dayname=" дней"
else
if(dd==1)dayname=" день"
else
if(dd==2||dd==3||dd==4)dayname=" дня"
else dayname=" дней"

document.write("До Нового Года осталось "+ Count_Days +""+dayname )*/

function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds
    
    stl=hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML=stl;
    }
    setInterval(clock, 1000);