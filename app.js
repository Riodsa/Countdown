var timenow = new Date()
var yearnow = timenow.getFullYear()
var monthnow = timenow.getMonth()
var datenow = timenow.getDate()
var today = timenow.getDay()
var startclass = new Date(yearnow,monthnow,datenow,8,30,1,0)
var endClass1 = new Date(yearnow,monthnow,datenow,9,20,1,0)
var endClass2 = new Date(yearnow,monthnow,datenow,10,10,1,0)
var endClass3 = new Date(yearnow,monthnow,datenow,11,0,1,0)
var endClass4 = new Date(yearnow,monthnow,datenow,11,50,1,0)
var endClass5 = new Date(yearnow,monthnow,datenow,12,40,1,0)
var endClass6 = new Date(yearnow,monthnow,datenow,13,30,1,0)
var endClass7 = new Date(yearnow,monthnow,datenow,14,20,1,0)
var endClass8 = new Date(yearnow,monthnow,datenow,15,10,1,0)
var endclass = new Date(yearnow,monthnow,datenow,16,0,1,0)
var midnight = new Date(yearnow,monthnow,datenow,24,0,0,0)
var timeleft
var classname
var KAB
var timer
var monday = ["นาฏศิลป์","พละ","คณิตเพิ่ม","คณิตเพิ่ม","พัก","สังคม","คณิตพื้น","เคมี","เคมี"]
var tuesday = ["ฟิสิกส์","ฟิสิกส์","ไทย","คณิตเพิ่ม","พัก","อังกฤษพื้น","แนะแนว","IS","IS"]
var wednesday = ["การงาน","คณิตเพิ่ม","เคมี","อังกฤษพื้น","พัก","ว่าง","ว่าง","ว่าง"]
var thrusday = ["คอม","คอม","ชีวะ","ชีวะ","พัก","คณิตเพิ่มพูน","คณิตเพิ่มพูน","ประวัติ","อังกฤษพื้น"]
var friday = ["อังกฤษเพิ่ม","คณิตพื้น","ฟิสิกส์","ฟิสิกส์","พัก","ไทย","สังคม","เคมี","ว่าง"]  
console.log(startclass.toLocaleString())
console.log(endclass.toLocaleString())
console.log(timenow.toLocaleString())

timer = setInterval(function () {
    checktime();
  }, 1000);

function checktime()
{
    if(today >= 1 && today <= 5)
    {
        if(timenow.getTime() < startclass.getTime()) //ก่อนเริ่มเรียน
        {
            console.log("Before Class")
            countdown(startclass)
            KAB = 0
            document.getElementById("thisclass").innerHTML = "ยังไม่ถึงเวลาเรียน"
            document.getElementById("KAB").innerHTML = KAB
            
        }
        else if((timenow.getTime() >= startclass.getTime()) && (timenow.getTime() < endClass1.getTime())) // กำลังเรียนคาบ1
        {
            console.log("Onclass")
            countdown(endClass1)
            KAB = 1
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass")
            .innerHTML = classname
        }
        else if((timenow.getTime() >= endClass1.getTime()) && (timenow.getTime() < endClass2.getTime())) // กำลังเรียนคาบ2
        {
            console.log("Onclass")
            countdown(endClass2)
            KAB = 2
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(today)
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass3.getTime())) // กำลังเรียนคาบ3
        {
            console.log("Onclass")
            countdown(endClass3)
            KAB = 3
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass4.getTime())) // กำลังเรียนคาบ4
        {
            console.log("Onclass")
            countdown(endClass4)
            KAB = 4
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass5.getTime())) // กำลังเรียนคาบ5
        {
            console.log("Onclass")
            countdown(endClass5)
            KAB = 5
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass6.getTime())) // กำลังเรียนคาบ6
        {
            console.log("Onclass")
            countdown(endClass6)
            KAB = 6
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass7.getTime())) // กำลังเรียนคาบ7
        {
            console.log("Onclass")
            countdown(endClass7)
            KAB = 7
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass8.getTime())) // กำลังเรียนคาบ8
        {
            console.log("Onclass")
            countdown(endClass83)
            KAB = 8
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if((timenow.getTime() >= endClass2.getTime()) && (timenow.getTime() < endClass9.getTime())) // กำลังเรียนคาบ9
        {
            console.log("Onclass")
            countdown(endclass)
            KAB = 9
            document.getElementById("KAB").innerHTML = KAB
            classname = checksubject(timenow.getDay())
            document.getElementById("thisclass").innerHTML = classname
        }
        else if(timenow.getTime() > endclass.getTime())
        {
            console.log("After Class")
            countdown(midnight)
            KAB = 10
            document.getElementById("thisclass").innerHTML = "เลยเวลาเรียนแล้ว"
        }
        document.getElementById("timeleftname") = "timeleft"
        document.getElementById("nextclass").innerHTML = "nextclass"
        document.getElementById("BOKKAB").innerHTML = "คาบ"
    }
    else if((today == 0) || (today == 6))
    {
        countdown(midnight)
        KAB = 10
        console.log("ไม่มีคาบเรียน")
        classname = "วันนี้ไม่มีเรียน"
        document.getElementById("KAB").innerHTML = "วันหยุด"
        document.getElementById("thisclass").innerHTML = "วันนี้ไม่มีเรียน"
        document.getElementById("timeleftname").innerHTML = "Countdown to Midnight"
        document.getElementById("nextclass").innerHTML = ""
        ocument.getElementById("BOKKAB").innerHTML = ""
    }
}

function countdown(toThis)
{
    var dateEntered = toThis;
    var now = new Date();
     var difference = dateEntered.getTime() - now.getTime();
    console.log(difference)
    if (difference <= 0) {
    // Timer done
    clearInterval(timer);
    } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("hourleft").innerHTML = hours
    document.getElementById("minuteleft").innerHTML = minutes
    document.getElementById("secondleft").innerHTML = seconds
  }
}

function checkvalue(x){
    if(x < 10) {x = "0" + x}
    return x
}

function checksubject(datenow)
{
    switch(datenow)
    {
        case 0 : return "วันนี้ไม่มีเรียน"
        case 1 : return monday[KAB]
        case 2 : return tuesday[KAB]
        case 3 : return wednesday[KAB]
        case 4 : return thrusday[KAB]
        case 5 : return friday[KAB]
        case 6 : return "วันนี้ไม่มีเรียน"
    }
}