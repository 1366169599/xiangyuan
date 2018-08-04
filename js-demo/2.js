// // // // var today = new Date();
// // // // var day = today.getDay();
// // // // var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// // // // console.log("Today is: " + daylist[day] + ".");
// // // // // console.log(today);
// // // // var hour = today.getHours();
// // // // var minute = today.getMinutes();
// // // // var second = today.getSeconds();
// // // // var prepand = (hour >= 12) ? " PM " : " AM ";
// // // // hour = (hour >= 12) ? hour - 12 : hour;
// // // // if (hour === 0 && prepand === ' PM ') {
// // // //     if (minute === 0 && second === 0) {
// // // //         hour = 12;
// // // //         prepand = ' Noon';
// // // //     }
// // // //     else {
// // // //         hour = 12;
// // // //         prepand = ' PM';
// // // //     }
// // // // }
// // // // if (hour === 0 && prepand === ' AM ') {
// // // //     if (minute === 0 && second === 0) {
// // // //         hour = 12;
// // // //         prepand = ' Midnight';
// // // //     }
// // // //     else {
// // // //         hour = 12;
// // // //         prepand = ' AM';
// // // //     }
// // // // }
// // // // console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);



// // // var today = new Date();
// // // var dd = today.getDate();

// // // var mm = today.getMonth()+1; 
// // // var yyyy = today.getFullYear();
// // // if(dd<10) 
// // // {
// // //     dd='0'+dd;
// // // } 

// // // if(mm<10) 
// // // {
// // //     mm='0'+mm;
// // // } 
// // // today = mm+'-'+dd+'-'+yyyy;
// // // console.log(today);
// // // today = mm+'/'+dd+'/'+yyyy;
// // // console.log(today);
// // // today = dd+'-'+mm+'-'+yyyy;
// // // console.log(today);
// // // today = dd+'/'+mm+'/'+yyyy;
// // // console.log(today);



// // // var side1 = 5; 
// // // var side2 = 6; 
// // // var side3 = 7; 
// // // var perimeter = (side1 + side2 + side3)/2;
// // // var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// // // console.log(area);



// // // function animate_string(id) {
// // //     var element = document.getElementById(id);
// // //     var textNode = element.childNodes[0]; // assuming no other children
// // //     var text = textNode.data;

// //     setInterval(function () {
// //       console.log("abc");
// //     }, 1000);




// // for(var year=2014;year<=2050;year++){
// //     var day=new Date(year,0,1);
// //     if(day.getDay()==0){
// //         console.log(year)
// //     }
// // }


// // var num=Math.ceil(Math.random()*10);
// // var text=prompt("猜吧");
// // if(text<10){
// //     alert("猜对了")
// // }else{
// //     alert('猜错了')
// // }



// // var today=new Date()
// // var cmas=new Date(today.getFullYear(),11,25);
// // if(today.getMonth=11 && today.getDay>25){
// //     today.getFullYear()+1;
// // }
// // var day=24*60*60*1000;
// // var a=Math.ceil((cmas.getTime()-today.getTime())/day)
// // console.log(a+" days left until Christmas!")



// function operate(op)
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         if(op == '+') {
//             document.getElementById("result").innerHTML = num1 + num2;

//         }else if(op == '-') {
//             document.getElementById("result").innerHTML = num1 -num2;
//         }else if(op == '*') {
//             document.getElementById("result").innerHTML = num1 * num2;
//         }else {
//             document.getElementById("result").innerHTML = num1/num2;

//         }
// }