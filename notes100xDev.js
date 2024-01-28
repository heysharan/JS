[1] - Length of String [Length is not a function, so no arguments]

function getLength(str){
    length = str.length;
    console.log(`Original String : ${str} 
Length of String : ${length}`);
}

getLength("Hello World!");

[2] - indexOf() & lastIndexOf() of target [Its a function, so need to give arguments]

[a] - Gets the Index of the target 

function findIndexOf(str, target){
    console.log(`Original String : ${str}`);
    console.log(`Index : ${str.indexOf(target)}`);
}

findIndexOf("Hello World!", "H");

[b] - Gets the last index of the target

function lastIndex(str , target){
    console.log(`Original String : ${str}`);
    console.log(`Index : ${str.lastIndexOf(target)}`);
}

lastIndex("Hello World World World" , "World");

[3] - slice()  [has to arguments (start)-Included (end)-Not Included]

function getSlice (str, start, end) {
    console.log(`Original String : ${str}`);
    console.log(`Sliced String : ${str.slice(start, end)}`)
}

getSlice("My Name is Sharan", 0 , 5)

[b] - without using inBuild function

function cutIt(str, start, end){
    let newStr = "";
    for(let i = 0 ; i < str.length ; i++){
        if(i >= start && i < end){
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(cutIt("My Name is Sharan", 0 , 5));

[4] - replace() - [has 3 arguments (string), (targetStringToReplace), (replacementString)]

function strReplace (str, target, replacement){
    console.log(`Original String : ${str}`);
    console.log(`Replaced String ${str.replace(target, replacement)}`);
}

strReplace("Hello javaScript", "Hello" , "Hi");

[5] - split() [takes a delimiter as arguments which is used for spliting the string into array of individuals]

function strReplace (str, delimiter){
    console.log(`Original String : ${str}`);
    console.log("Replaced String", str.split(delimiter));
}

strReplace("Hello,javaScript", ",");

[6] - trim() [ takes a string as input and removes all the spaces in the beginning and in the end of the string but not in between of the string  ]

function strReplace (str){
    console.log(`Original String : ${str}`);
    console.log("Replaced String", str.trim(str));
}

strReplace("    Hello javaScript     ");

[7] - toUpperCase() & toLowerCase() [takes string arguments]

function strUpperCase (str){
    console.log(`Original String : ${str}`);
    console.log("Replaced String", str.toUpperCase(str));
}

function strLowerCase (str){
    console.log(`Original String : ${str}`);
    console.log("Replaced String", str.toLowerCase(str));
}

strUpperCase("Hello JavaScript");
strLowerCase("Hello JavaScript");

[8] - parseInt() & parseFloat() [converts string into integer/float if proper values are given as input]

function convertToInteger (str){
    console.log(`Original Value : ${str}`);
    console.log("Converted Integer Value :", parseInt(str));
}

function convertToFloat (str){
    console.log(`Original Value : ${str}`);
    console.log("Converted Float Value :", parseFloat(str));
}

convertToInteger("45");
convertToFloat("45.345");

[9] pop(), push(), shift(), unshift(), concat()

function putInTheBack (arr, element){
    console.log(`Original Array : ${arr}`);
    arr.push(element)
    console.log("New Array :", arr);
}

function takeFromBack (arr){
    console.log(`Original Array : ${arr}`);
    arr.pop()
    console.log("New Array :", arr);
}

function takeFromFront (arr){
    console.log(`Original Array : ${arr}`);
    arr.shift()
    console.log("New Array :", arr);
}

function putInTheFront (arr, element){
    console.log(`Original Array : ${arr}`);
    arr.unshift(element)
    console.log("New Array :", arr);
}

function mergeTwoArray (arr, arr1){
    console.log(`Original Array 1 : ${arr}`);
    console.log(`Original Array 2 : ${arr1}`);
    finalArr = arr.concat(arr1);
    console.log(`New Array : ${finalArr}`);
}

putInTheBack([1,2,3,4] , 5);                    // pop() -    puts an element in the back       [2 arguments / arr and element]
takeFromBack([1,2,3,4]);                        // push() -   takes an element form the back    [1 arguments / arr ] 
takeFromFront([1,2,3,4]);                       // shift() -  takes an element in the front     [1 arguments / arr ]
putInTheFront([1,2,3,4], 0);                    // unshift()- puts an element in the front      [2 arguments / arr and element]
mergeTwoArray([1,2,3,4], [5,6,7,8])             // concat()-  merges two array together         [2 argumenst / arr and arr] 



