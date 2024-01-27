1. Print firstName and lastName
    
    let firstName = "Sharan"
    let lastName = "C M"
    console.log(`Hello ${firstName} ${lastName}`);

2. Print firstName and lastName based on gender

    let firstName = "Sharan"
    let lastName = "C M"
    let gender = "male"

    if(gender=="male") console.log(`${firstName} ${lastName} is a male`);
    else console.log(`${firstName} ${lastName} is a female`) 

3. Print numbers from 0 to 1000

    for(let i=0;i<=1000;i++){
    console.log(i)
    }

4.  Print firstName and lastName based on marriage
    
    let firstName = "Sharan"
    let lastName = "C M"
    let age = 18
    let isMarried = true;
    if(isMarried == true)
    console.log(`This person name is ${firstName} ${lastName} and age is ${age} is Married`)
    else
    console.log(`This person name is ${firstName} ${lastName} and age is ${age} is not Married`)

5.  Sum of first 1000 numbers

    let ans = 0 
    for(let i = 0 ; i <= 1000 ; i++){
     ans = ans + i;
    }
    console.log(ans)    

6.  Find the largest number  [Array]

    const arrNum = [12,13,154,15,16,17,18,190,20,21,22,23,24,25,26];
    let largestNum = arrNum[0]

    for(let j=0; j<=arrNum.length; j++){
     if(arrNum[j]>largestNum){ 
      largestNum = arrNum[j]
     }
    }
    console.log(largestNum)

7. Print firstName in an Object  [Object]

    const user1 = {
    firstName : 'Sharan',
    lastName : 'C M',
    age : 15,
    gender : 'male'
    }  
    console.log(user1["firstName"]);

8. Array of Objects representation

    const allUser = [
    {
        firstName : 'Sharan',
        lastName : 'C M',
        age : 23,
        gender : 'male'
    },
    {
        firstName : 'Guhan',
        lastName : 'C M',
        age : 17,
        gender : 'male'
    },
    {
        firstName : 'Sunitha',
        lastName : 'MN',
        age : 44,
        gender : 'female'
    }]

        let arrLength = allUser.length
        for(let i = 0 ; i < arrLength ; i++){
        if(allUser[i]["gender"] == 'male'){
            console.log(allUser[i]["firstName"])
            }
        }

9. Array of Objects of Objects representation

    const allUser = [
    {
        firstName : 'Sharan',
        lastName : 'C M',
        age : 23,
        gender : 'male',
        metadata : {
            address : 'Bengaluru',
            country : 'India'
        }
    },
    {
        firstName : 'Guhan',
        lastName : 'C M',
        age : 17,
        gender : 'male',
        metadata : {
            address : 'Chennai',
            country : 'India'
        }
    },
    {
        firstName : 'Sunitha',
        lastName : 'MN',
        age : 45,
        gender : 'female',
        metadata : {
            address : 'Vellore',
            country : 'UK'
        }
    }]
    
    let arrLength = allUser.length
    for(let i = 0 ; i < arrLength ; i++){
        if(allUser[i]["metadata"]["country"] == 'India'){
            console.log(allUser[i]["firstName"],allUser[i]["lastName"],allUser[i]["age"],allUser[i]["gender"])
        }
    }


10. Reverse elements in an Array

    [Method 1] - (To print as interger type in output)

    const arrNum = [12,13,154,15,16,17,18,190,20,21,22,23,24,25,26];
    const newArr = []
    for(let i = arrNum.length-1, j=0; i >= 0 ; i--, j++){
        newArr[j] = arrNum[i];
    }
    for(let k = 0 ; k < newArr.length ; k++){
        console.log(newArr[k])
    }

    [Method 2]

    const arrNum = [12,13,154,15,16,17,18,190,20,21,22,23,24,25,26];
    for(let i = arrNum.length-1; i >= 0 ; i--){
        console.log(arrNum[i]);
    }

    [Method 3] - (Tp print as string type in output)

    const arr = [2,3,45,1,5,34,6,23,555,63,345,532]
    let newArr = []
    for( let j = arr.length-1, k = 0 ; j >= 0 ; j--, k++ ){
        newArr[k] = arr[j]
    }
    console.log(`Original Array : ${arr.join(' ')}`)
    console.log(`Reversed Array : ${newArr.join(' ')}`)

11. Print sum of two numbers using Function  [Functions]

    function findSum(a,b) {              // function - do things with the input and return an output
        return a+b
    }
    console.log(findSum(3,4))
    
    console.log(findSum(32,42))

12. Largest element in the Array

    const arr = [2,3,45,1,5,34,6,23,555,63,345,532]
    largestArr = arr[0]
    for( let i = 0 ; i < arr.length ; i++ ){
         if(arr[i] > largestArr){
            largestArr = arr[i]
        }
    }
    console.log(`Largest element in the Array is ${largestArr}`)

13. callBacks - functions which takes other functions as input

function mathOperation (a , b, fnToCall){
    return fnToCall(a,b)
}

function add(a, b){
    return a+b
}

function sub(a ,b){
    return a-b
}

function mul(a, b){
    return a*b
}


console.log(mathOperation(45,25,sub))

[13b] - callBacks

function sum(n1,n2,fnToCall){
    let result = n1 + n2
    fnToCall(result)
}

function displayResult(data){
    console.log(`Result of the sum is : ${data}`)
}

function displayResultPassive(data){
    console.log(`Sum's result is : ${data}`)
}


const ans = sum(2,5,displayResultPassive)
