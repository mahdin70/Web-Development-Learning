// Concatenation of string 

var s1 = "Software";
var s2 = "Engineer";

document.write(s1 + " " + s2);

document.write("<br>I want to be a " + s1 + " " + s2);

var uni = "IUT";
var year = 2;

document.write("<br>University : " + uni + "<br>Year : " + year+ "nd");

//String Methods :

var text = "Software";
var text2 = " Engineering";
var len = text.length; // ->Returns the text length 
document.write("<br>Length of Text : " + len);

//Taking Input :

var inp = prompt("Enter Your Name :");
document.write("<br>Length of Name : " + inp.length);

//Finding a Character in a specific position :
document.write("<br>Character at 2nd Index (3rd Position) : " + inp.charAt(2));

//Upper and Lower Case :

var upperText = text.toUpperCase();
var lowerText = text.toLowerCase();

document.write("<br>UpperCase Text : " + upperText);
document.write("<br>LowerCase Text : " + lowerText);

//concat function :

document.write("<br>Concatanated String : " + text.concat(text2));

//Slicing String by slice(start_index,length) method;

document.write("<br>Slicing 4 chars from 0th index : " + text.slice(0,4));





