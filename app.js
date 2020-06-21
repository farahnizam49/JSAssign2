                
                /*-----------------------------------Chapter # 21 to 25-----------------------------------*/

//Task # 1

// var firstname=prompt("Enter your first name");
// var lastname=prompt("Enter your last name");
// var space=" ";
// var fullName=firstname+space+lastname;
// alert("Hello! " + fullName);

//Task # 2

// var favmobile=prompt("Enter your favourite mobile phone model");
// var totallength = favmobile.length;
// document.write("My favorite mobile phone is : "+favmobile);
// document.writeln("Length of string : "+totallength);

//Task # 3

// var string="Pakistani";
// var index = string.indexOf("n");
// document.writeln("String : "+string);
// document.writeln("Index of n : "+index);

//Task # 4

// var string="Hello World";
// var index = string.lastIndexOf("l");
// document.writeln("String : "+string);
// document.writeln("Last index of 'l' : "+index);

//Task # 5

// var string="Pakistani";
// var char = string.charAt(3);
// document.writeln("String : "+string);
// document.writeln("Character at index 3 is : "+char);

//Task # 6

// var firstname=prompt("Enter your first name");
// var lastname=prompt("Enter your last name");
// var space=" ";
// var fullName=firstname.concat(lastname);
// alert("Hello! " + fullName);

//Task # 7

// var city="Hyderabad";
// var newcity=city.replace("Hyder","Islam");
// document.writeln("City : "+city);
// document.writeln("After replacement : "+newcity);

//Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newmsg = message.replace(/and/g,"&");
// document.writeln(message);
// document.writeln("After replacement : "+newmsg);

//Task # 9

// var string="472";
// var num=Number(string);
// document.writeln("Value : "+string);
// document.writeln("Type : String");
// document.writeln("Value : "+num);
// document.writeln("Type : Number");

//Task # 10

// var userinput=prompt("Enter something!");
// var uppercase=userinput.toUpperCase();
// document.writeln("User Input : "+userinput);
// document.writeln("Upper Case : "+uppercase);

//Task # 11

// var str=prompt("Enter something!");
// function TitleCase () {
//   if ((str===null) || (str===''))
//        return false;
//   else
//    str = str.toString();

//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln("User Input : "+str);
// document.writeln("Title Case : ",TitleCase());

//Task # 12

// var num=35.36;
// var str=num.toString();
// var str1=str.replace(".","");
// document.writeln("Number : "+num);
// document.writeln("Result : "+str1);

//Task # 13

// var name=prompt("Enter your username");
// for(var i=0; i < name.length; i++){
// 	if ((name.charAt(i) === "@")||(name.charAt(i) === "!")||(name.charAt(i) === ".")||(name.charAt(i) === ",")){
// 		alert("Please enter a valid username");
// 	}
// 	else{
// 		alert("Username is correct");
// 	}
// }

//Task # 14

// var input=prompt("Welcome to Farah Bakers. What do you want to order sir/ma'am!");
// var check=input.toLowerCase();
// var arr=["cake", "apple pie", "cookie", "chips", "patties"];
// for(var i=0; i <= 4; i++){
// 	if (check===arr[i]) {
// 		alert("" +input+ " is available at index " +i+ " in our bakery");
// 		break;
// 	}
// 	else{
// 		alert("We are sorry " +input+ " is not available in our bakery");
// 	}
// }

//Task # 15

// var pass=prompt("Enter Your Password");
// var p1=pass.charAt(0);
// var p2=pass.charAt(0);
// if(p1==Number(p1)){
// 	alert("Password cannot begin with numbers \n Please enter valid Password");
// }
// else if(pass.length<=6){
// 	alert("Hello Welcome to the page");
// }
// else{
// 	alert("Length must be less than or equal to 6");
// }

//Task # 16

// var university = "University of Karachi";
// var result=university.split(" ");
// document.writeln(result);

//Task # 17

// var userinput=prompt("Enter Something");
// var lastchar=userinput[userinput.length-1];
// document.writeln("User Input : "+userinput);
// document.writeln("Last Character of user input is : "+lastchar);

//Task # 18

// var text="The quick brown fox jumps over the lazy dog.";
// var newchar=text.toLowerCase();
// var occur=(newchar.match(/the/g)).length;
// document.writeln("Text : "+text);
// document.writeln("There are " +occur+ " occurrence(s) of word 'the'");

                /*-----------------------------------Chapter # 26 to 30-----------------------------------*/

//Task # 1

// var int=+prompt("Enter positive integer number");
// var num1=Math.round(int);
// var num2=Math.floor(int);
// var num3=Math.ceil(int);
// document.writeln("Number : "+int);
// document.writeln("Round off value : "+num1);
// document.writeln("Floor value : "+num2);
// document.writeln("Ceil value : "+num3);

//Task # 2

// var int=+prompt("Enter negative floating point number");
// var num1=Math.round(int);
// var num2=Math.floor(int);
// var num3=Math.ceil(int);
// document.writeln("Number : "+int);
// document.writeln("Round off value : "+num1);
// document.writeln("Floor value : "+num2);
// document.writeln("Ceil value : "+num3);
                
//Task # 3

// var num=+prompt("Enter Absolute Value");
// var absnum=Math.abs(num);
// document.writeln("The absolute value of "+num+" is : "+absnum);

//Task # 4

// Math.floor( Math.random() * 6 );
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('Random dice value : ' + diceRoll);

//Task # 5

// var headsuser=prompt("Enter heads team name");
// var tailsuser=prompt("Enter tails team name");
// var toss=Math.random()*2;
// var floor=Math.floor(toss);
// if(floor===0){
// 	alert("Heads " +headsuser+ " Team Win The Toss!");
// }
// else{
// 	alert("Tails " +tailsuser+ " Team Win The Toss!");
// }

//Task # 6

// Math.floor( Math.random() * 100 );
// var num = Math.floor( Math.random() * 100 ) +1;
// alert('Random number between 1 and 100 : ' + num);

//Task # 7

// var weight=prompt("Enter Your Weight In Kgs");
// var newweight=parseInt(weight);
// document.writeln("The weight of user is " +newweight+ " kilograms");

//Task # 8

// var secretnum=[1,2,3,4,5,6,7,8,9,10];
// var res=+prompt("Enter a number between 1 and 10");
// // var res = Math.floor( Math.random() * 10 ) +1;
// if(res===1||res===2||res===3||res===4||res===5||res===6||res===7||res===8||res===9||res===10){
// 	alert("Congratulations! Your Guess Is Correct");
// }
// else{
// 	alert("Try Again!");
// }

                /*-----------------------------------Chapter # 31 to 34-----------------------------------*/

//Task # 1

// var currentdate= new Date();
// document.writeln(currentdate);

//Task # 2

// var months=["January","Feburary","March","April","May","June","July","August","September","Octuber","November","December"];
// var currentdate=new Date();
// var themonth=currentdate.getMonth();
// var currentmonth=months[themonth];
// alert("Current Month : "+currentmonth);

//Task # 3

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// var day=nameOfToday.slice(0,3);
// alert("Today is "+day);

//Task # 4

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday==="Sunday"||nameOfToday==="Saturday") {
// 	alert("It's Fun Day");
// }
// else{
// 	alert("Working Day");
// }

//Task # 5

// var currentdate= new Date();
// var date=currentdate.getDate();
// if(date<16){
// 	document.write("First fifteen days of the month");
// }
// else{
// 	document.write("Last days of the month");
// }

//Task # 6

// var currentdate= new Date();
// var millisec=currentdate.getTime();
// var mint=(millisec/(1000*60*60));
// document.writeln("Current Date : "+currentdate);
// document.writeln("Elapsed milliseconds since January 1, 1970 : "+millisec);
// document.writeln("Elapsed minutes since January 1, 1970 : "+mint);

//Task # 7

// var currentdate= new Date();
// var hours=currentdate.getHours();
// if (hours<12) {
// 	alert("Its AM");
// }
// else{
// 	alert("Its PM");
// }

//Task # 8

// var laterDate=new Date(2020, 12, 0);
// document.writeln("Later Date : "+laterDate);

//Task # 9

// var date1 = new Date("06/18/2015"); 
// var date2 = new Date("04/24/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// alert( + Difference_In_Days + " days have passed since 1st Ramadan, 2015");

//Task # 10

// var date1 = new Date("12/31/2014"); 
// var date2 = new Date("12/05/2015"); 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Sec = Difference_In_Time / (1000 * 60); 
// document.write("On reference date " +date2+ " , " +Difference_In_Sec+ " seconds had passed since beginning of 2015");

//Task # 11

// var currentdate=new Date();
// var hours=currentdate.getHours();
// var newhours=hours-1;
// var resethours=currentdate.setHours(newhours);
// document.write(currentdate);
// document.write("1 hour ago, it was "+resethours);
// console.log()

//Task # 12

// var currentdate=new Date();
// var years=currentdate.getFullYear();
// var newyears=years-100;
// var resetyears=currentdate.setFullYear(newyears);
// alert("" +currentdate+ "\n100 years back, it was "+resetyears);
// console.log();

//Task # 13

// var age=prompt("Enter your age : ");
// age = parseInt(age);
// var birthday = new Date();
// document.write("Your age is " +age+ "<br>");
// document.write("Your birth year is " +(birthday.getFullYear()-age)+ "<br>");

//Task # 14

// var months=["January","Feburary","March","April","May","June","July","August","September","Octuber","November","December"];
// var current=new Date();
// var current_month=current.getMonth();
// var charge_per_unit=16;
// var late_payment=350;
// var customer_name=prompt("Enter your name ");
// var no_of_units=prompt("Enter no of units : ");
// var NA=no_of_units*charge_per_unit; //Net amount (within due date)
// var GA=NA*late_payment; //Gross amount (after due date)
// document.write("<h2>K-Electric Bill</h2><br><br>");
// document.write("Customer Name : "+customer_name+"<br>");
// document.write("Month : "+months[current_month]+"<br>");
// document.write("Number of units : "+no_of_units+"<br>");
// document.write("Charge per unit : "+charge_per_unit+"<br>");
// document.write("Net amount payable (within due date) : "+NA+"<br>");
// document.write("Late payment fee : "+late_payment+"<br>");
// document.write("Gross amount payable (after due date) : "+GA+"<br>");

                /*-----------------------------------Chapter # 35 to 38-----------------------------------*/

//Task # 1

// function currentdate(){
// 	var date= new Date();
// 	document.write(date);
// }
// currentdate();

//Task # 2

// function greet(){
// 	var firstname=prompt("Enter your first name");
// 	var lastname=prompt("Enter your last name");
// 	var fullName=firstname+" "+lastname;
// 	alert("Hello! "+fullName);
// }
// greet();

//Task # 3

// function add(){
// 	var num1=+prompt("Enter 1st Number");
// 	var num2=+prompt("Enter 2nd Number");
// 	var sum=num1+num2;
// 	alert("The sum of " +num1+ " & " +num2+ " is : "+sum);
// }
// add();

//Task # 4

// function calculator(){
// var a=+prompt("Enter 1st Number");
// var b=+prompt("Enter 2nd Number");
// var select=+prompt("Select Operation you want to perform.\n1:Addition\n2:Subtraction\n3:Multiplication\n4:Division\n5:Modulus")

// if (select==1) {
// 	var add=a+b;	
// 	alert("Addition of "+a+" and "+b+" is "+add);
// }
// if (select==2) {
// 	var sub=a-b;	
// 	alert("Subtraction of "+a+" and "+b+" is "+sub);
// }
// if (select==3) {
// 	var mul=a*b;	
// 	alert("Multiplication of "+a+" and "+b+" is "+mul);
// }
// if (select==4) {
// 	var div=a/b;	
// 	alert("Division of "+a+" and "+b+" is "+div);
// }
// if (select==4) {
// 	var mod=a%b;
// 	alert("Modulus of "+a+" and "+b+" is "+mod);
// }
// }
// calculator();

//Task # 5

// function square(){
// 	var num=+prompt("Enter number to find its square");
// 	var squ=num*num;
// 	alert("The square of " +num+ " is : "+squ);
// }
// square();

//Task # 6

// function factorial(){
// 	var fact=1;
// 	var num=+prompt("Enter your number to find its factorial");
// 	for(var i=1; i<=num; i++){
// 		var fact=fact*i;
// 	}
// 	alert("Factorial of " +num+ " is : "+fact);
// }
// factorial();

//Task # 7

// function counting(){
// 	var a=+prompt("Enter Starting Number");
//     var b=+prompt("Enter Ending Number");
//     for(var i=a; i<=b; i++){
//     	document.writeln(i);
//     }
// }
// counting();

//Task # 8

// var base=+prompt("Enter Base Of A Right Angle Triangle");
// var perp=+prompt("Enter Perpendicular Of A Right Angle Triangle");
// var result;
// function calculateHypotenuse(){
// 	function calculateSquare(){
// 		result=Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));
// 		alert("Hypotenuse of given right angled triangle is : "+result);
// 	}
// 	calculateSquare();
// }
// calculateHypotenuse();

//Task # 9

// var width, height=5;
// function calculateArea(width,height){
// 	var A=width*height;
// 	alert("The area of a rectangle is : "+A);
// }
// calculateArea(5,height);

//Task # 10

// function check_Palindrome(str_entry){

// // Change the string into lower case and remove  all non-alphanumeric characters
//    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// 	var ccount = 0;
// // Check whether the string is empty or not
// 	if(cstr==="") {
// 		console.log("Nothing found!");
// 		return false;
// 	}
// // Check if the length of the string is even or odd 
// 	if ((cstr.length) % 2 === 0) {
// 		ccount = (cstr.length) / 2;
// 	} else {
// // If the length of the string is 1 then it becomes a palindrome
// 		if (cstr.length === 1) {
// 			console.log("Entry is a palindrome.");
// 			return true;
// 		} else {
// // If the length of the string is odd ignore middle character
// 			ccount = (cstr.length - 1) / 2;
// 		}
// 	}
// // Loop through to check the first character to the last character and then move next
// 	for (var x = 0; x < ccount; x++) {
// // Compare characters and drop them if they do not match 
// 		if (cstr[x] != cstr.slice(-1-x)[0]) {
// 			console.log("Entry is not a palindrome.");
// 			return false;
// 		}
// 	}
// 	console.log("The entry is a palindrome.");
// 	return true;
// }
// check_Palindrome('madam');
// check_Palindrome('nurses run');
// check_Palindrome('fox');

//Task # 11

// var str=prompt("Enter something!");
// function TitleCase () {
//   if ((str===null) || (str===''))
//        return false;
//   else
//    str = str.toString();

//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln("User Input : "+str);
// document.writeln("Title Case : ",TitleCase());

//Task # 12

// function find_longest_word(str){
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write("The longest word in the given string is ");
// document.writeln(find_longest_word('Web Development Tutorial'));

//Task # 13

// function char_count(str, letter){
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.writeln("The number of occurrence of letter 'a' is : ");
// document.writeln(char_count('farah nizam', 'a'));

//Task # 14

// var radius;
// function calcCircumference(radius){
// 	var Circumference_of_circle = 2*3.142*radius;
// 	document.writeln("The circumference is "+Circumference_of_circle);
// }
// function calcArea(radius){
// 	var Area_of_circle = 3.142*radius*radius;
// 	document.writeln("The Area is "+Area_of_circle);
// }
// calcCircumference(5);
// calcArea(5);