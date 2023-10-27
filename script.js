// Question 1:

let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };
let string1 = JSON.stringify(obj1);    // Convert JSON obj1 to string
let string2 = JSON.stringify(obj2);    // Convert JSON obj1 to string
if (string1 === string2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}

// Question 2:

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    let data = request.response;
    let output = JSON.parse(data);
    for(let i=0;i<output.length;i++){
        console.log(output[i].flags.png)
    }
}

// Question 3:

let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    let data1 = request1.response;
    let output1 = JSON.parse(data1);
    for(let i=0;i<output1.length;i++){
        console.log(output1[i].name.common,output1[i].region,output1[i].subregion,output1[i].population)
    }
}