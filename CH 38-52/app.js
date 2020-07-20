// CH 38-42
// // Task 1
// function addnum(a, b) {
//     return a + b
// }
// console.log(addnum(4, 5))

// // Task 2
// function leapyear(year) {
//     alert(ss + " " + " Is A Leap Year" + " " + ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))

// }
// var ss = +prompt("Enter Year")
// console.log(leapyear(ss))

// // Task 3
// var a = +prompt("Enter The Value Of a")
// var b = +prompt("Enter The Value Of b")
// var c = +prompt("Enter The Value Of c")
// var s = (a + b + c) / 2

// function area(){
// var area = (s * (s - a) * (s - b) * (s - c))
// return area
// }

// alert(area())

// // Task 4
// var mark1 = +prompt("Enter The Marks1")
// var mark2 = +prompt("Enter The Marks2")
// var mark3 = +prompt("Enter The Marks3")

// function avg(){
//     var avgs = (mark1+mark2+mark3)/3
//     return avgs
// }
// function per(){
//     var per = ((mark1+mark2+mark3)) /300 *100
//     return per
// }
// function main(){
//     alert("The Average Of Your Result Is : "+avg())
//     alert("The Percentage Of Your Result Is : "+per())
// }
// main()

// //  Task 5
// function count(){
//     var word = prompt("Enter The Word")
//     var let = prompt("What IS letter")
//     return word.split(" ").length
// }
// alert(count())


// // Task 6
// var ent = prompt("Enter The Sentence")
// function vowrep(){
//     return ent.replace(/a|e|i|o|u/g , " ")

// }
// alert(vowrep())

// // Task 8

// var kms = +prompt("Enter The Distance In Km")

// function m() {
//     var meter = kms * 1000
//     return meter
// }

// function f() {
//     var feet = kms * 3281
//     return feet
// }

// function i() {
//     var inch = kms * 39370
//     return inch
// }

// function cm() {
//     var centm = kms * 100000
//     return centm
// }

// function combine() {
//     alert("The Result In Meter Is : " + m())
//     alert("The Result In Feet Is : " + f())
//     alert("The Result In Inches Is : " + i())
//     alert("The Result In CentiMeter Is : " + cm())
// }
// combine()

// // Task 9
// var hour = +prompt("Enter The Amount Of Hours You Work")

// function overtime() {
//     if (hour > 40) {
//         var ss = (hour - 40) * 12
//         alert("Your Over Time Payment Is : " + ss + "$")
//     } else {
//         alert("You Have Worked : " + hour + " Hours")
//     }
// }
// overtime()




// CH 43-48

// // Task 2
// function phone() {
//     alert("Thanks For Purchased The Phone From Us")
// }

// // Task 3

// function del() {
//     document.getElementById("hex").innerHTML = ""
// }

// function dels() {
//     document.getElementById('hexs').innerHTML = ""

// }

// function deld() {
//     document.getElementById('hexd').innerHTML = ""
// }

// function delf() {
//     document.getElementById('hexf').innerHTML = ""
// }



// // Task 4
// function over() {
//     document.getElementById('overs').src = "mob1.png";
// }

// function out() {
//     document.getElementById('overs').src = "mob2.png";

// }


// // Task 5
// var msec = 0;
// var msech = document.getElementById('msec')
// var interval;


// function timer() {
//     msec++
//     msech.innerHTML = msec;

// }

// function increase() {
//     interval = setInterval(timer, 10)
// }

// function decrease() {
//     interval = setInterval(timer, 100)
// }


// CH 49-52

// Task 1

// function form() {
//     var name = document.getElementById('name')
//     var email = document.getElementById('email')
//     var pass = document.getElementById('pass')

//     var ss = name.value
//     document.write("The Name Is : " + ss + "<br>")

//     var sf = email.value
//     document.write("The Email Is : " + sf + "<br>")


//     var sd = pass.value
//     document.write("The Password Is : " + sd + "<br>")

// }

// Task 2
// function readmore() {
//     var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit Possimus illum tempore nisi explicabo sapiente  Quas temporibus nobis, esse modi fuga voluptates aperiam mollitia velit dolorum recusandae dolore deleniti praesentium eaque."
//     var para = document.getElementById('para')
//     para.innerHTML = text
// }